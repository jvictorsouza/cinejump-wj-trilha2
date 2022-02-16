import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

const defaultParams = {
  api_key: process.env.REACT_APP_API_KEY,
  language: 'pt-BR',
  region: 'BR'
}

const getPopularMovies = async () => {
  const returnApi = await api
    .get(`/movie/popular`, { params: { ...defaultParams, page: '1' } })
    .then((response) => response)
    .then((data) => JSON.parse(data.request.response))
    .catch((error) => console.log(error))
  return returnApi
}

const getPlayingMovies = async () => {
  const returnApi = await api
    .get(`/movie/now_playing`, { params: { ...defaultParams, page: '1' } })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

const getRecomendationsMovies = async (movie_id: number | string) => {
  const returnApi = await api
    .get(`/movie/${movie_id}/recommendations`, {
      params: { ...defaultParams, page: '1' }
    })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

const getTopMovies = async () => {
  const returnApi = await api
    .get(`/movie/top_rated`, { params: { ...defaultParams, page: '1' } })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

export { getPopularMovies, getPlayingMovies, getRecomendationsMovies, getTopMovies }
