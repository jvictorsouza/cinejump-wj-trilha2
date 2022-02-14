import styled from '@emotion/styled'
import { css } from '@mui/styled-engine'

export const RowDivStyled = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 1200px;
`

export const ImageLogo = styled('img')`
  margin: 0 auto;
`

export const BaseStyled = styled('div')`
  ${({ justifyContent }: { justifyContent: 'space-around' | 'space-evenly' }) =>
    css`
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: ${justifyContent};
      width: 100%;
      height: 100%;
    `}
`

export const CenterVerticalContentStyled = styled('div')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 64px;
  align-items: center;
  text-align: center;
  margin: 0 40px;
`

export const Title = styled('div')`
  ${({ color, fontWeight }: { color: string; fontWeight: number }) =>
    css`
      font-size: 64px;
      color: ${color};
      font-weight: ${fontWeight};
    `}
`

export const SubTitle = styled('div')`
  font-size: 30px;
  font-weight: 300;
  color: white;
`

export const BottomButton = styled('button')`
  width: 360px;
  height: 72px;
  border: 3px solid #ffffff;
  border-radius: 45px;
  background-color: #e83f5b;
  font-size: 24px;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
  :hover {
    cursor: pointer;
    background-color: #9c283c;
  }
`
