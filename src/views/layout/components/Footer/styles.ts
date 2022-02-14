import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'

export const LayoutStyled = styled('div')`
  ${({ backgroundColor }: { backgroundColor: string }) =>
    css`
      background-color: ${backgroundColor};
      width: 100%;
      min-width: 550px;
      position: fixed;
      top: 0;
      z-index: 2;
    `}
`

export const ContentStyled = styled('div')`
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ListLinksStyled = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  #LinkSpn {
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;

    :hover {
      cursor: pointer;
      font-weight: 400;
    }
  }
`

export const ImageLogo = styled('img')`
  cursor: pointer;
`
