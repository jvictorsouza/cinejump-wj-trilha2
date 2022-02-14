import React, { ReactNode, useState } from 'react'
import { trimTextOnlySpaces } from '../helpers/string'

interface UseFormProps {
  initialFields: any
  validateOnChange?: boolean
  validate?: any
  negativeValues?: boolean
}
interface UseFormReturn {
  fields: any
  setFields: Function
  errors: any
  setErrors: any
  handleInputChange: any
}

const useForm = ({
  initialFields,
  validateOnChange = false,
  validate,
  negativeValues = true
}: UseFormProps): UseFormReturn => {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})

  const handleInputChange = (event: any, mask?: undefined | Function) => {
    const { name, value } = event.target
    let newValue = trimTextOnlySpaces(value)
    if (!negativeValues && parseInt(value) < 0) {
      newValue = '0'
    }
    setFields(
      typeof mask === 'function'
        ? { ...fields, [name]: mask(newValue) }
        : { ...fields, [name]: newValue }
    )
    if (validateOnChange) {
      validate({ [name]: newValue })
    }
  }

  return {
    fields,
    setFields,
    errors,
    setErrors,
    handleInputChange
  }
}

export default useForm

interface FormProps {
  children?: ReactNode
  autoComplete?: boolean
  onSubmit: React.ChangeEventHandler<HTMLFormElement> | undefined
}

export const Form: React.FC<FormProps> = ({ children, autoComplete, onSubmit }) => {
  return (
    <form
      autoComplete={autoComplete ? 'on' : 'off'}
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', rowGap: 'inherit' }}
    >
      {children}
    </form>
  )
}
