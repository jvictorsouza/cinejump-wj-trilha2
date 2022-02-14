import { Assets } from 'helpers/assets'
import React from 'react'
import { ContentStyled, LayoutStyled, ListLinksStyled, ImageLogo } from './styles'

interface FooterProps {
  primaryColor: string
  secondaryColor: string
  linkTitles: Array<string>
  linkPaths: Array<string>
  imageLogo: string
}

const Footer: React.FC<FooterProps> = ({
  primaryColor,
  secondaryColor,
  linkTitles,
  linkPaths,
  imageLogo
}) => {
  return (
    <LayoutStyled backgroundColor={primaryColor}>
      <ContentStyled>
        <ImageLogo
          src={Assets(imageLogo)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <ListLinksStyled>
          {linkTitles.map((title: string, index: number) => {
            return (
              <span id="LinkSpn" onClick={() => window.open(linkPaths[index], '_blank')}>
                {title}
              </span>
            )
          })}
        </ListLinksStyled>
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Footer
