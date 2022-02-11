import { errorMessages } from '../constants/constants'

const trim = (text: string) => text.trim()

const trimTextOnlySpaces = (text: string) => {
  let newValue = text
  if (!text.replace(/\s/g, '').length) {
    newValue = trim(text)
  }
  return newValue
}

const errorMessagesValidation = (
  value: string,
  minumumValue?: number,
  isEmail: boolean = false
) => {
  const requiredFiledValidation = value.length <= 0 ? errorMessages.emptyField : ''
  let minumumValueValidation =
    value.length <= 0
      ? errorMessages.emptyField
      : value.length >= (minumumValue || 4)
      ? ''
      : errorMessages.invalidField
  minumumValueValidation =
    !isEmail || value.length <= 0
      ? minumumValueValidation
      : value.split('@').length < 2 || value.split('.').length < 3
      ? errorMessages.invalidField
      : ''

  return minumumValue ? minumumValueValidation : requiredFiledValidation
}

export { trim, trimTextOnlySpaces, errorMessagesValidation }
