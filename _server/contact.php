<?php

enableCors();

$logfile = fopen('../logs/contact-' . date('Y-m-d', time()) . '.log', 'a');
clog("Request: " . print_r($_POST, true), $logfile);

if ($_SERVER['REQUEST_METHOD'] != "OPTIONS" && $_SERVER['REQUEST_METHOD'] != "POST") {
    error(406, $_SERVER['REQUEST_METHOD'] . ' is not allowed on this resource.', $logfile);
}

// simple SPAM prevention
if (trim($_POST['_gotcha']) != '') {
	clog('Spam? Value of _gotcha is: ' . $_POST['_gotcha'], $logfile);
	error(400, 'Spam? Value of _gotcha is: "' . $_POST['_gotcha'] . '"', $logfile);
}

if (!validate()) {
	error(400, 'Form validation failed', $logfile);
}

if (!sendSuccess()) {
	error(500);
}

ok($logfile);

function enableCors() {
	
	header('Access-Control-Allow-Origin: http://www.ruppertdesign.de');
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
			header('Access-Control-Allow-Methods: POST, OPTIONS');         
		}
		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
			header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
		}
		die();
	}
}

function validate() {
	
	$rules = array();
	$rules['name'] = array (
		'required' => true,
		'regex' => '/^[\p{L}\p{N},\. _-]{3,}$/u'
	);
	$rules['email'] = array (
		'required' => true,
		'regex' => '/^[\p{L}\p{N}._%+-]+@[\p{L}\p{N}.-]+\.[a-z]{2,4}$/u'
	);
	$rules['tel'] = array (
		'required' => false,
		'regex' => '/^[\(\)0-9 \/\+-]*$/u'
	);
	$rules['message'] = array (
		'required' => true,
		'regex' => '/^[\p{L}\p{N}\p{Zs}\t\r\n\s\p{P}\p{S}]{1,}$/u'
	);
	$rules['newsletter'] = array (
		'required' => false,
		'regex' => '/^[a-z0-1]*$/' // true/false/on/off...
	);
	
	// throw away everything unexpected
	foreach($_POST as $param => $val) {
		if (!isset($rules[$param])) {
			unset($_POST[$param]);
		}
	}
	
	foreach($rules as $field => $constraints) {
		$val = trim($_POST[$field]);
		if ($val == '' && $rules[$field]['required']) {
			return false;
		}
		if ($val != '' && !preg_match($rules[$field]['regex'], $val)) {
		echo $val;
			return false;
		}
	}
	
	return true;

}

function sendSuccess() {
	$subject = 	'Kontaktanfrage auf RUPPERTdesign.de';
	$message = 	'Name: ' . $_POST['name'] . "\n" .
				'eMail: ' . $_POST['email'] . "\n" .
				'Telefon: ' . $_POST['tel'] . "\n" .
				'Newsletter: ' . (isset($_POST['newsletter']) ? 'Ja' : 'Nein') . "\n\n" .
				'Nachricht: ' . $_POST['message'] . "\n\n" .
				'-- Bitte direkt an ' . $_POST['email'] . ' schreiben --';
	return sendMail($subject, $message);
}

function sendError() {
	return sendMail('Fehler beim Senden des Kontaktformulars!', 'Bitte die Logfiles prüfen');
}

function sendMail($subject, $message) {
	$to      = 	'RUPPERTdesign <info@ruppertdesign.de>, post@florianhirsch.de';
	$headers =	'From: RUPPERTdesign <info@ruppertdesign.de>' . "\n" .
				'Reply-To: info@ruppertdesign.de' . "\n" .
				'Content-Type: text/plain; charset="utf-8"' . "\n" .
				'Content-Transfer-Encoding: 8bit';
	return mail($to, $subject, $message, $headers);
}

function error($status, $msg, $logfile) {
	clog('Error ' . $status . ': ' . $msg, $logfile);
	sendError();
	response($status, 'fehler', $logfile);
}

function ok($logfile) {
	clog('Form successfully sent', $logfile);
	response(200, 'danke');
}

// will only send a HTTP Status for AJAX-Requests, otherwise a 303-redirect
function response($status, $redirectPage, $logfile) {
	if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
		header('Content-Type: text/plain; charset=utf-8');
		http_response_code($status);
	} else {
		header('Location: http://www.ruppertdesign.de/' . $redirectPage . '/', true, 303);
	}
	fclose($logfile);
	die();
}

function clog($msg, $logfile) {
	$pre = '[' . date('Y-m-d H:i:s', time()) . ' - ' . $_SERVER['REMOTE_ADDR'] . '] ';
	fwrite($logfile, $pre . $msg . "\n");
}

?>