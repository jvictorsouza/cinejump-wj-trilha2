import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'

export const LayoutStyled = styled('div')`
  ${({ backgroundColor }: { backgroundColor: string }) =>
    css`
      background-color: ${backgroundColor};
      width: 100%;
      min-width: 550px;
      bottom: 0;
    `}
`

export const ContentStyled = styled('div')`
  margin: 0 auto;
  max-width: 1000px;
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
