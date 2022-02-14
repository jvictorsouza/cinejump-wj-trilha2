import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Styles, StylesContainer, StylesContainerHeader } from './styles'

const Layout: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('session')) navigate('/user')
  }, [navigate])

  const logoutAndReload = () => {
    localStorage.removeItem('session')
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <Styles>
      <StylesContainerHeader>
        <Header
          primaryColor="#E83F5B"
          secondaryColor="#FFFFFF"
          buttonsTitles={['Filmes', 'Séries']}
          imageLogo="assets/images/Logo-white.svg"
          logoutFunction={logoutAndReload}
        />
      </StylesContainerHeader>
      <StylesContainer>
        <Outlet />
      </StylesContainer>
      <Footer />
    </Styles>
  )
}

export default Layout
