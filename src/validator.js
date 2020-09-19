const validate = ({ min, max, minlength, maxlength, validity }) => {
  if (validity.valid) {
    return null
  }
  if (validity.valueMissing) {
    return 'Bitte füllen Sie das Feld aus'
  }
  if (validity.badInput || validity.patternMismatch) {
    return 'Bitte geben Sie nur gültige Zeichen ein'
  }
  if (validity.rangeOverflow) {
    return `Der Maximalwert beträgt ${max}`
  }
  if (validity.rangeUnderflow) {
    return `Der Minimalwert beträgt ${min}`
  }
  if (validity.tooShort) {
    return `Bitte geben sie mindestens ${minlength} Zeichen ein`
  }
  if (validity.tooLong) {
    return `Bitte geben sie höchstens ${maxlength} Zeichen ein`
  }
  return null
}

export default {
  validate,
}
