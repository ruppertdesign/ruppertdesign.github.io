<?php

enableCors();

if ($_SERVER['REQUEST_METHOD'] != "OPTIONS" && $_SERVER['REQUEST_METHOD'] != "POST") {
    http_response_code(406);
    die();
}

// simple SPAM prevention
if (trim($_POST['_gotcha']) != '') {
	error(400);
}

if (!validate()) {
	error(400);
	die();	
}

if (!sendMail()) {
	error(500);
}

ok();

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
		'regex' => '/^[0-9a-zA-ZüÜöÖäÄß\'\. _-]{3,}$/'
	);
	$rules['email'] = array (
		'required' => true,
		'regex' => '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/'
	);
	$rules['tel'] = array (
		'required' => false,
		'regex' => '/^[0-9 \/\+-]*$/'
	);
	$rules['message'] = array (
		'required' => true,
		'regex' => '/^[[:print:][:space:]]{2,}$/'
	);
	$rules['newsletter'] = array (
		'required' => false,
		'regex' => '/^[a-z0-1]*$/'
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
			return false;
		}
	}
	
	return true;

}

function sendMail() {

	$to      = 	'RUPPERTdesign <info@ruppertdesign.de>, post@florianhirsch.de';
	$subject = 	'Kontaktanfrage auf RUPPERTdesign.de';
	$headers =	'From: RUPPERTdesign <info@ruppertdesign.de>' . "\n" .
				'Reply-To: info@ruppertdesign.de' . "\n" .
				'Content-Type: text/plain; charset="iso-8859-1"' . "\n" .
				'Content-Transfer-Encoding: 8bit';

	$message = 	'Name: ' . $_POST['name'] . "\n" .
				'eMail: ' . $_POST['email'] . "\n" .
				'Telefon: ' . $_POST['tel'] . "\n" .
				'Newsletter: ' . (isset($_POST['newsletter']) ? 'Ja' : 'Nein') . "\n\n" .
				'Nachricht: ' . $_POST['message'] . "\n\n" .
				'-- Bitte direkt an ' . $_POST['email'] . ' schreiben --';
	
	return mail($to, $subject, $message, $headers); 
	
}

function error($status) {
	response($status, 'fehler');
}

function ok() {
	response(200, 'danke');
}

// will only send a HTTP Status for AJAX-Requests, otherwise a 303-redirect
function response($status, $redirectPage) {
	if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
		header('Content-Type: text/plain; charset=utf-8');
		http_response_code($status);
	} else {
		header('Location: http://www.ruppertdesign.de/' . $redirectPage . '/', true, 303);
	}
	die();
}

?>