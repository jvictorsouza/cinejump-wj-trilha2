import { Assets } from 'helpers/assets'
import { errorMessagesValidation } from 'helpers/string'
import { setUserSession } from 'helpers/storage'
import { RenderAToast } from 'helpers/toast'
import React, { useState } from 'react'
import PrimaryContent from './components/primaryContent'
import SecondaryContent from './components/secondaryContent'
import {
  RowDivStyled,
  BaseStyled,
  ImageLogo,
  CenterVerticalContentStyled,
  Title,
  SubTitle,
  BottomButton
} from './styles'
import useForm, { Form } from 'hooks/useForm'
import TextInput from 'components/TextInput'

type PageFunctionalityType = 'login' | 'register'

interface LoginFormProps {
  name: string
  email: string
  password: string
}

const User: React.FC = () => {
  const [pageFunctionality, setPageFunctionality] =
    useState<PageFunctionalityType>('login')

  const isLoginActive = () => pageFunctionality === 'login'

  const handleChangePageFunctionality = () => {
    setErrors({})
    setFields({})
    setPageFunctionality(isLoginActive() ? 'register' : 'login')
  }

  const renderSecondarySubContent = (
    title: string,
    subtitle: string,
    textButton: string,
    onClickButton: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    return (
      <CenterVerticalContentStyled>
        <Title color="white" fontWeight={500}>
          {title}
        </Title>
        <SubTitle>{subtitle}</SubTitle>
        <BottomButton onClick={onClickButton}>{textButton}</BottomButton>
      </CenterVerticalContentStyled>
    )
  }

  const secondaryChildrenByFunctionality = () => {
    return (
      <BaseStyled justifyContent="space-evenly">
        {isLoginActive()
          ? renderSecondarySubContent(
              'Olá, visitante!',
              'Cadastre-se e conheça as vantagens do Cinejump.',
              'CRIAR CONTA',
              handleChangePageFunctionality
            )
          : renderSecondarySubContent(
              'Bem-vindo, Jumper!',
              'Para se manter conectado, faça login com suas credenciais.',
              'LOGIN',
              handleChangePageFunctionality
            )}
      </BaseStyled>
    )
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (validate()) {
      const { email } = fields
      const username = email.split('@')[0]
      const { status, message } = setUserSession(username, isLoginActive())
      RenderAToast(status, message)
    }
  }

  const validationIsValid = (data: string) => Object.values(data).every((x) => x === '')

  const validate = (fieldValues = fields) => {
    const temp: any = { ...errors }
    if (!isLoginActive() && 'name' in fieldValues) {
      temp.name = errorMessagesValidation(fieldValues.name, 4)
    }
    if ('email' in fieldValues) {
      temp.email = errorMessagesValidation(fieldValues.email, 14, true)
    }
    if ('password' in fieldValues) {
      temp.password = errorMessagesValidation(fieldValues.password, 1)
    }

    setErrors({ ...temp })
    return fieldValues === fields && validationIsValid(temp)
  }

  const initialFields: LoginFormProps = {
    name: '',
    email: '',
    password: ''
  }

  const { fields, setFields, errors, setErrors, handleInputChange } = useForm({
    initialFields,
    validateOnChange: false,
    validate
  })

  const renderPrimarySubContent = (title: string, textButton: string) => {
    return (
      <CenterVerticalContentStyled>
        <Title color="#E83F5B" fontWeight={400}>
          {title}
        </Title>
        <Form onSubmit={handleSubmit} autoComplete>
          {!isLoginActive() ? (
            <TextInput
              name="name"
              value={fields.name}
              onChange={handleInputChange}
              height={72}
              width={530}
              addorment
              InputProps={{
                placeholder: 'Nome',
                inputProps: { maxLength: 100 }
              }}
              error={errors.name}
            />
          ) : null}
          <TextInput
            name="email"
            value={fields.email}
            onChange={handleInputChange}
            height={72}
            width={530}
            addorment
            InputProps={{
              placeholder: 'E-mail',
              inputProps: { maxLength: 100 }
            }}
            error={errors.email}
          />
          <TextInput
            name="password"
            value={fields.password}
            onChange={handleInputChange}
            height={72}
            width={530}
            addorment
            InputProps={{
              placeholder: 'Senha',
              type: 'password',
              inputProps: { maxLength: 100 }
            }}
            error={errors.password}
          />

          <BottomButton type="submit">{textButton}</BottomButton>
        </Form>
      </CenterVerticalContentStyled>
    )
  }

  const primaryChildrenByFunctionality = () => {
    return (
      <BaseStyled justifyContent="space-around">
        <ImageLogo src={Assets('assets/images/Logo-red.svg')} />
        {isLoginActive()
          ? renderPrimarySubContent('Login', 'ENTRAR')
          : renderPrimarySubContent('Criar conta', 'CADASTRAR')}
      </BaseStyled>
    )
  }

  return (
    <RowDivStyled>
      {isLoginActive() ? (
        <>
          <PrimaryContent children={primaryChildrenByFunctionality()} />
          <SecondaryContent children={secondaryChildrenByFunctionality()} />
        </>
      ) : (
        <>
          <SecondaryContent children={secondaryChildrenByFunctionality()} />
          <PrimaryContent children={primaryChildrenByFunctionality()} />
        </>
      )}
    </RowDivStyled>
  )
}

export default User
