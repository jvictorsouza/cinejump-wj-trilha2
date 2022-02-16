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

export const BttnsCampStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 30px;
  margin: auto 0;

  #SVGBttn {
    cursor: pointer;
    :hover {
    }
  }
`

export const BtnSpanStyled = styled('span')`
  font-size: 20px;
  font-weight: 300;
  color: #ffffff;

  :hover {
    cursor: pointer;
    font-weight: 400;
  }
`

export const ImageLogo = styled('img')`
  cursor: pointer;
`
