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
