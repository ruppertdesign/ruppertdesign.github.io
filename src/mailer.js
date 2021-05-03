import { calcPrice, calcTotal, isBlank } from './helpers'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const sendOrderMail = async (formValues) => {
  const message = [
    `Holzart: ${formValues.holzart.title}`,
    `Größe: ${formValues.groesse.title}`,
    `Band: ${formValues.band.title}`,
    `Schriftart: ${formValues.schrift.title}`,
    `Seite 1: ${formValues.side1.value}`,
    isBlank(formValues, 'side2') ? null : `Seite 2: ${formValues.side2.value}`,
    isBlank(formValues, 'side3') ? null : `Seite 3: ${formValues.side3.value}`,
    isBlank(formValues, 'side4') ? null : `Seite 4: ${formValues.side4.value}`,
    isBlank(formValues, 'nachricht')
      ? null
      : `Nachricht: ${formValues.nachricht.value}`,
    `E-Mail Adresse: ${formValues.email.value}`,
    `Lieferadresse:`,
    formValues.name.value,
    formValues.street.value,
    `${formValues.postalCode.value} ${formValues.location.value}`,
    `Stückzahl: ${formValues.quantity.value}`,
    `Preis: ${calcPrice(formValues)}`,
    `Lieferung: ${formValues.shipment.value}`,
    `Gesamtpreis: ${calcTotal(formValues)}`,
  ]
    .filter((row) => row != null)
    .join('\n')
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'configurator',
      message,
    }),
  })
  if (response.status != 200) {
    throw Error(`[${response.status}]: ${response.statusText}`)
  }
}

export default { sendOrderMail }
