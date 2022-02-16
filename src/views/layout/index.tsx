import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Styles } from './styles'

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
      <Header
        primaryColor="#E83F5B"
        secondaryColor="#FFFFFF"
        buttonsTitles={['Filmes', 'Séries']}
        imageLogo="assets/images/Logo-white.svg"
        logoutFunction={logoutAndReload}
      />
      <Outlet />
      <Footer
        primaryColor="#E83F5B"
        secondaryColor="#FFFFFF"
        linkTitles={[
          'Desenvolvido por João Chagas',
          'Proposta do projeto',
          'Protótipo no Figma',
          'Apresentação ao comitê',
          'Documentação'
        ]}
        linkPaths={[
          'https://www.linkedin.com/in/jvictorsouza/',
          'https://webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+2',
          'https://www.figma.com/file/um4dcEJCOlEvB6kCe9KCOD/Cinejump?node-id=7185%3A17',
          'https://docs.google.com/presentation/d/1iKBjjW9TpO_-vyyNWrqT4LzeDZLyTc7xiOxgFo0BONA/edit?usp=sharing',
          '_blank',
          'https://webjump.atlassian.net/wiki/spaces/AW/pages/2195030481/Projeto+Final+-+Trilha+1'
        ]}
        imageLogo="assets/images/Logo-white.svg"
      />
    </Styles>
  )
}

export default Layout
