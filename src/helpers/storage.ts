import { StrObjectAny } from 'interfaces'

export const setUserSession = (username: string, isLogin: boolean) => {
  let favoritesLocalStorageData = localStorage.getItem('favorites')
  if (favoritesLocalStorageData) {
    let favoritesData = JSON.parse(favoritesLocalStorageData)
    if (Object.keys(favoritesData).includes(username)) {
      if (isLogin) {
        localStorage.setItem('session', JSON.stringify(true))
        localStorage.setItem('user', JSON.stringify(username))
        return { status: 'success', message: `Bem vindo, ${username}` }
      } else {
        return { status: 'error', message: `Usuário já cadastrado` }
      }
    }
  }
  if (isLogin) {
    return { status: 'warnning', message: 'Usuário não cadastrado' }
  } else {
    localStorage.setItem('session', JSON.stringify(true))
    localStorage.setItem('user', JSON.stringify(username))
    localStorage.setItem('favorites', `{"${username}": []}`)
    return { status: 'success', message: `Bem vindo, ${username}` }
  }
}

export const verifyOnFavorites = (original_title: string, poster_path: string) => {
  let userStorage = localStorage.getItem('user')
  let sessionStorage = localStorage.getItem('session')
  if (userStorage && sessionStorage && JSON.parse(sessionStorage)) {
    let userName = JSON.parse(userStorage)
    let favoritesStorage = localStorage.getItem('favorites')
    let dataFavorites = (favoritesStorage && JSON.parse(favoritesStorage)) || {}
    let userFavorites
    let item = {
      original_title,
      poster_path
    }
    if (Object.keys(dataFavorites).includes(userName)) {
      userFavorites = dataFavorites[userName]
      if (
        userFavorites.find(
          (favorite: StrObjectAny) => favorite.original_title === item.original_title
        )
      ) {
        return 'assets/images/BsHeartFill-red.svg'
      } else {
        return 'assets/images/BsHeartFill-black.svg'
      }
    } else {
      return 'assets/images/BsHeartFill-black.svg'
    }
  } else {
    processStorageLogout()
  }
}

export const loadFavorites = () => {
  let favoritesStorage = localStorage.getItem('favorites')
  let dataFavorites = (favoritesStorage && JSON.parse(favoritesStorage)) || {}
  return dataFavorites
}

export const processStorageLogout = () => {
  localStorage.setItem('session', JSON.stringify(false))
  localStorage.removeItem('user')
  window.location.replace('/user')
}

export const updateFavorites = (id: string) => {
  let userStorage = localStorage.getItem('user')
  let sessionStorage = localStorage.getItem('session')
  if (userStorage && sessionStorage && JSON.parse(sessionStorage)) {
    let idInfos = id.split('|')
    let userName = JSON.parse(userStorage)
    let dataFavorites = loadFavorites()
    let userFavorites
    if (Object.keys(dataFavorites).includes(userName)) {
      userFavorites = dataFavorites[userName]
    } else {
      userFavorites = []
    }
    let item = {
      original_title: idInfos[0],
      poster_path: idInfos[1].split('-')[0]
    }
    const heart = document.getElementById(id)
    let newUserFavorites = []
    if (heart && heart.getAttribute('src') === 'assets/images/BsHeartFill-black.svg') {
      heart.setAttribute('src', 'assets/images/BsHeartFill-red.svg')
      userFavorites.unshift(item)
      newUserFavorites = userFavorites
    } else if (heart) {
      newUserFavorites = userFavorites.filter(
        (favorite: StrObjectAny) => favorite.original_title !== item.original_title
      )
      heart.setAttribute('src', 'assets/images/BsHeartFill-black.svg')
    }
    dataFavorites[userName] = newUserFavorites
    localStorage.setItem('favorites', JSON.stringify(dataFavorites))
    return newUserFavorites
  } else {
    processStorageLogout()
  }
}
