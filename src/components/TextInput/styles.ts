import styled from '@emotion/styled'
import { FormControl, TextField, Theme } from '@mui/material'
import { css } from '@mui/styled-engine'

export const TextFieldStyled = styled(TextField)`
  ${({ addorment, height }: { addorment: number | undefined; height: number }) =>
    css`
      .MuiInputLabel-root {
        display: none;
      }

      .MuiOutlinedInput-root {
        height: ${height}px;
        font-size: 24px;
        color: #7c7a7a;
        font-weight: 400;
        background-color: #efefef;
        border-radius: 10px;
      }

      .MuiOutlinedInput-root {
        &.Mui-focused fieldset {
          outline: #e83f5b;
          border: 2px solid #e83f5b;
          border-radius: 10px;
        }
      }

      .MuiInputBase-input {
        height: fit-content;

        ${addorment &&
        css`
          padding-right: 0;
        `}
      }

      fieldset {
        font-size: 0;
        border: 5px grey;
        margin-top: 5px;

        legend {
          display: none;
        }
      }

      label[data-shrink='false'] + .MuiInputBase-formControl input.MuiInputBase-input {
        ::placeholder {
          opacity: 1 !important;
          color: red;
          font-size: 15px;
        }
      }
    `}
`

export const FormControlStyled = styled(FormControl)`
  ${({ theme, width }: { theme?: Theme; width?: number }) =>
    theme &&
    css`
      ${width &&
      css`
        width: ${width}px;
      `}
    `}
`
