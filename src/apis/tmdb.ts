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
    .get(`/movie/now_playing`, { params: { page: '1' } })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

const getRecomendationsMovies = async (movie_id: number | string) => {
  const returnApi = await api
    .get(`/movie/${movie_id}/recommendations`, { params: { page: '1' } })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

const getTopMovies = async () => {
  const returnApi = await api
    .get(`/movie/top_rated`, { params: { page: '1' } })
    .then((response) => response.data)
    .catch((error) => console.log(error))
  return returnApi
}

// const getTrailerInfo = async (title: string) => {
//   var search = require("youtube-search");
//   let headers = {
//     maxResults: 1,
//     key: `${process.env.API_GOOGLE_YOUTUBE_V3}`,
//   };
//   await search(
//     `${title} Official Trailer (HD)`,
//     headers,
//     function (error, results) {
//       if (error) {
//         let errorCode = error.message.split(" ").slice(-1)[0];
//         if (process.env.API_GOOGLE_YOUTUBE_V3 === "") {
//           alert("Youtube API - Token vazio");
//         } else if (errorCode === "403") {
//           alert("Youtube API - Cota de requisição excedida");
//         } else if (errorCode === "400") {
//           alert("Youtube API - Token inválido");
//         }
//       } else {
//         window.open(`${results[0].link}`, "_blank");
//       }
//     }
//   );
// };

export {
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies
  // getTrailerInfo,
}
