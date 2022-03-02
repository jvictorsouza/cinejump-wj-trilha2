import React from 'react'
import { InputProps as MUIInputProps, InputAdornment } from '@mui/material'
import { TextFieldStyled, FormControlStyled } from './styles'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'

export interface InputProps {
  name?: string
  id?: string
  value: string | number
  type?: 'text' | 'number' | 'password' | 'email'
  InputProps?: MUIInputProps
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  addorment?: boolean
  error?: string | null
  width?: number
  height?: number
}

const Input: React.FC<InputProps> = ({
  name = undefined,
  id,
  value,
  type = 'text',
  InputProps,
  onBlur = () => {},
  onClick = () => {},
  onChange,
  addorment = false,
  error = null,
  width,
  height = 41
}) => {
  const hasError = () => {
    return error !== '' && error !== null
  }

  const hasAddorment = () => {
    return addorment || hasError()
  }

  const renderIcon = () =>
    hasAddorment() ? (
      <InputAdornment position="start">
        {name === 'name' ? (
          <FiUser color="#C0C0C0" />
        ) : name === 'email' ? (
          <FiMail color="#C0C0C0" />
        ) : (
          <FiLock color="#C0C0C0" />
        )}
      </InputAdornment>
    ) : null
  return (
    <>
      <FormControlStyled fullWidth {...(width && { width })}>
        <TextFieldStyled
          error={hasError()}
          variant="outlined"
          name={name}
          height={height}
          onBlur={onBlur}
          onClick={onClick}
          id={id ? id : name}
          value={value}
          type={type}
          onChange={onChange}
          addorment={hasAddorment() ? 1 : undefined}
          InputLabelProps={{ shrink: false }}
          InputProps={{
            ...InputProps,
            ...{
              startAdornment:
                InputProps?.startAdornment === undefined
                  ? renderIcon()
                  : InputProps?.startAdornment
            }
          }}
          {...(error && { error: true, helperText: error })}
        />
      </FormControlStyled>
    </>
  )
}

export default Input
