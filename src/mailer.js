const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const isBlank = (formValues, field) =>
  formValues[field] == null ||
  formValues[field].value == null ||
  val.trim() === ''

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
  ]
    .filter((row) => row != null)
    .join('\n')
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'configurator',
      message,
    }),
  })
}

export default { sendOrderMail }
