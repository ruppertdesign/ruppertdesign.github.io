const validate = ({ name, type, value, required, maxLength, validity }) => {
  console.info(name, type, validity)
  const val = value == null ? '' : value.trim()
  if (required && val.length === 0) {
    return 'Bitte füllen Sie das Feld aus'
  }
  if (maxLength > 0 && val.length > maxLength) {
    return `Bitte geben Sie maximal ${maxLength} Zeichen ein`
  }
  return null
}

export default {
  validate,
}
