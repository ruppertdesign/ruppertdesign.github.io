const moneyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

export const isBlank = (formValues, field) =>
  formValues[field] == null ||
  formValues[field].value == null ||
  formValues[field].value.trim() === ''

export const countSides = (formValues) =>
  [1, 2, 3, 4].map((idx) => !isBlank(formValues, `side${idx}`)).filter(Boolean)
    .length

export const formatMoney = (amount) => moneyFormatter.format(amount)

const calculateUnit = (formValues) => {
  const basePrice =
    formValues.groesse.value === '65'
      ? 9.9
      : formValues.groesse.value === '85'
      ? 11.9
      : null
  const extraSides = (countSides(formValues) - 1) * 2
  return basePrice == null ? null : basePrice + extraSides
}

const calculate = (formValues) => {
  const price = calculateUnit(formValues)
  return price == null ? null : formValues.quantity.value * price
}

export const calcUnitPrice = (formValues) => {
  const price = calculateUnit(formValues)
  return price == null ? null : formatMoney(price)
}

export const calcPrice = (formValues) => {
  const price = calculate(formValues)
  return price == null ? null : formatMoney(price)
}

export const calcTotal = (formValues) => {
  const price = calculate(formValues)
  const shipment = formValues.shipment.value === 'express' ? 5 : 3
  return formatMoney(price + shipment)
}
