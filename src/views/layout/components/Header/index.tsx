import React from 'react'
import { RenderAToast } from 'helpers/toast'
import {
  BtnSpanStyled,
  BttnsCampStyled,
  ContentStyled,
  LayoutStyled,
  ImageLogo
} from './styles'
import { Assets } from 'helpers/assets'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'

interface HeaderProps {
  primaryColor: string
  secondaryColor: string
  buttonsTitles: Array<string>
  buttonsFunctions?: Array<Function>
  imageLogo: string
  searchFunction?: Function
  profileFunction?: Function
  logoutFunction: Function
}

const Header: React.FC<HeaderProps> = ({
  primaryColor,
  secondaryColor,
  buttonsTitles,
  buttonsFunctions = [],
  imageLogo,
  searchFunction,
  profileFunction,
  logoutFunction
}) => {
  const functionalityNotAdded = () => {
    RenderAToast('warnning', 'Funcionalidade não inserida')
  }

  const handleBttnSpan = (index: number) => {
    if (buttonsFunctions.length > index) {
      buttonsFunctions[index]()
    } else {
      functionalityNotAdded()
    }
  }

  return (
    <LayoutStyled backgroundColor={primaryColor}>
      <ContentStyled>
        <BttnsCampStyled>
          {buttonsTitles.map((title: string, index: number) => {
            return (
              <BtnSpanStyled
                key={`button-header-${index}`}
                onClick={() => handleBttnSpan(index)}
              >
                {title}
              </BtnSpanStyled>
            )
          })}
        </BttnsCampStyled>
        <ImageLogo
          src={Assets(imageLogo)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <BttnsCampStyled>
          <FiSearch
            id="SVGBttn"
            color={secondaryColor}
            size={22}
            onClick={(searchFunction && searchFunction()) || functionalityNotAdded}
          />
          <BiUserCircle
            id="SVGBttn"
            color={secondaryColor}
            size={24}
            onClick={(profileFunction && profileFunction()) || functionalityNotAdded}
          />
          <FiLogOut
            id="SVGBttn"
            color={secondaryColor}
            size={22}
            onClick={() => logoutFunction()}
          />
        </BttnsCampStyled>
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Header
