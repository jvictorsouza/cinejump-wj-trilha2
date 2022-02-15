import styled from '@emotion/styled'

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 30px;
  width: 100%;
  min-height: calc(100vh - 195px);
`

export const ContentStyled = styled.div`
  width: 100%;
`

export const ContainerRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 0 auto;
`

export const RowStyled = styled.div`
  div {
    background-color: #80bcb8;
    color: white;
    span {
      color: white;
    }
  }
  :hover {
    background-color: #80bcb8;
    color: white;
  }
`

export const LayoutHighlightsStyled = styled.div`
  width: 100%;
  background-color: #e83f5b;
`

export const ContentHighlightsStyled = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5px;
`

export const SecondaryHighlightStyled = styled.div`
  width: 29%;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 10px 10px 0px 0px;
    position: relative;
    top: 102px;
    max-width: 100%;
  }

  #secondary-highlights-banners-info {
    span {
      display: flex;
      align-items: flex-end;
      position: relative;
      top: 100px;
      max-width: 100%;
      height: 30px;
      background-color: #0000004d;
      border: 5px 5px 0 5px solid #0000004d;
      padding: 5px 5px 0 5px;
      color: #ffffff;
      font-size: 19px;
      font-weight: 400;
      line-height: 24px;
      margin-top: 10px 15px 0px 15px;
      border-radius: 0px 0px 10px 10px;
      z-index: 1;
    }
  }
`

export const MainHighlightStyled = styled.div`
  width: 69%;
  height: 100%;

  img {
    border-radius: 10px;
    position: relative;
    top: 102px;
    max-width: 100%;
  }

  #main-highlights-banner-info {
    width: 100%;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    span {
      background-color: #0000004d;
      padding: 0px 5px;
      color: #ffffff;
      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      height: 20px;
      max-width: 100%;
      z-index: 1;
    }
    label {
      position: relative;
      background-color: #0000004d;
      border-radius: 5px;
      padding: 0px 5px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      height: 82px;
      max-width: 100%;
      z-index: 1;
    }
  }
`
