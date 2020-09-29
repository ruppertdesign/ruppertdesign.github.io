const validate = (field) => {
  const { validity } = field
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
    return `Der Maximalwert beträgt ${field.getAttribute('max')}`
  }
  if (validity.rangeUnderflow) {
    return `Der Minimalwert beträgt ${field.getAttribute('min')}`
  }
  if (validity.tooShort) {
    return `Bitte geben sie mindestens ${field.getAttribute(
      'minlength'
    )} Zeichen ein`
  }
  if (validity.tooLong) {
    return `Bitte geben sie höchstens ${field.getAttribute(
      'maxlength'
    )} Zeichen ein`
  }
  return null
}

export default {
  validate,
}
