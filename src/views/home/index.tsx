import React, { useState, useEffect } from 'react'
import {
  getPopularMovies,
  getPlayingMovies,
  getRecomendationsMovies,
  getTopMovies
} from 'apis/tmdb'
import {
  ContentStyled,
  LayoutStyled,
  LayoutHighlightsStyled,
  ContentHighlightsStyled,
  MainHighlightStyled,
  SecondaryHighlightStyled,
  LayoutRowStyled,
  ContentRowStyled,
  ImageCardStyled,
  HeartFavoritesStyled,
  TrailerCardStyled,
  PlayVideoStyled
} from './styles'
import { StrObjectAny } from 'interfaces'
import { Assets } from 'helpers/assets'
import { searchTrailer } from 'apis/youtube'
import {
  loadFavorites,
  processStorageLogout,
  updateFavorites,
  verifyOnFavorites
} from 'helpers/storage'

const Home: React.FC = (...props) => {
  const [popularsMovies, setPopularsMovies] = useState<Array<StrObjectAny>>([])
  const [playingMovies, setPlayingMovies] = useState<Array<StrObjectAny>>([])
  const [topMovies, setTopMovies] = useState<Array<StrObjectAny>>([])
  const [recomendationsMovies, setRecomendationsMovies] = useState<Array<StrObjectAny>>(
    []
  )
  const [favoritesMovies, setFavoritesMovies] = useState<Array<StrObjectAny>>([])

  useEffect(() => {
    let userStorage = localStorage.getItem('user')
    if (userStorage) {
      getPopularMovies().then((data: StrObjectAny) => {
        if (data) {
          setPopularsMovies(data.results)
          getRecomendationsMovies(data.results[0].id).then((data: StrObjectAny) => {
            if (data) setRecomendationsMovies(data.results)
          })
        }
      })
      getPlayingMovies().then((data: StrObjectAny) => {
        if (data) setPlayingMovies(data.results)
      })
      getTopMovies().then((data: StrObjectAny) => {
        if (data) setTopMovies(data.results)
      })
      let favoritesData = loadFavorites()

      let user = JSON.parse(userStorage)
      setFavoritesMovies(
        Object.keys(favoritesData).includes(user) ? favoritesData[user] : []
      )
    } else {
      processStorageLogout()
    }
  }, [])

  const renderHighlights = () => {
    const verifyOverviewSize = (overview: string) => {
      if (overview.length <= 265) {
        return overview
      } else {
        return `${overview.slice(0, 260)}...`
      }
    }
    const renderMainHighlight = (movie: StrObjectAny) => {
      return (
        <MainHighlightStyled>
          <img
            alt="MainHighlight"
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w780${movie.backdrop_path}`}
          />
          <div id="main-highlights-banner-info">
            <span>{movie.title}</span>
            <label>{verifyOverviewSize(movie.overview)}</label>
          </div>
        </MainHighlightStyled>
      )
    }

    const renderSecondaryHighlight = (movie: StrObjectAny) => {
      return (
        <div title={`${movie.overview}`}>
          <img
            alt="SecondaryHighlight"
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w300${movie.backdrop_path}`}
          />
          <div id="secondary-highlights-banners-info">
            <span>{movie.title}</span>
          </div>
        </div>
      )
    }
    return (
      <LayoutHighlightsStyled>
        {recomendationsMovies.length >= 3 ? (
          <ContentHighlightsStyled>
            {renderMainHighlight(recomendationsMovies[0])}
            <SecondaryHighlightStyled>
              {renderSecondaryHighlight(recomendationsMovies[1])}
              {renderSecondaryHighlight(recomendationsMovies[2])}
            </SecondaryHighlightStyled>
          </ContentHighlightsStyled>
        ) : null}
      </LayoutHighlightsStyled>
    )
  }

  const renderMoviesRow = (
    data: Array<StrObjectAny>,
    title: string,
    rowId: string,
    addingInfoLabel?: string
  ) => {
    const handleHeartFavorite = (movie: StrObjectAny) => {
      let favorites: Array<StrObjectAny> = updateFavorites(
        `${movie.original_title}|${movie.poster_path}-heart`
      )
      setFavoritesMovies(favorites)
    }

    return (
      <div id="pre-layout-home-row">
        <LayoutRowStyled>
          <ContentRowStyled>
            <span>{title}</span>
            <div>
              {data.map((movie: StrObjectAny, index: number) => {
                return (
                  <ImageCardStyled
                    key={`${rowId}-image-card-${index}`}
                    title={
                      (addingInfoLabel &&
                        `${movie.original_title}: ${movie[addingInfoLabel]}`) ||
                      `${movie.original_title}`
                    }
                    urlImage={`${process.env.REACT_APP_IMAGE_BASE_URL}/w185${movie.poster_path}`}
                  >
                    <HeartFavoritesStyled
                      key={`${rowId}-heart-image-card-${index}`}
                      id={`${movie.original_title}|${movie.poster_path}-heart`}
                      src={verifyOnFavorites(movie.original_title, movie.poster_path)}
                      onClick={() => handleHeartFavorite(movie)}
                    />
                  </ImageCardStyled>
                )
              })}
            </div>
          </ContentRowStyled>
        </LayoutRowStyled>
      </div>
    )
  }

  const renderTrailersRow = (
    data: StrObjectAny,
    title: string,
    addingInfoLabel?: string
  ) => {
    return (
      <div id="pre-layout-home-row">
        <LayoutRowStyled>
          <ContentRowStyled>
            <span>{title}</span>
            <div>
              {data.map((movie: StrObjectAny, index: number) => {
                return (
                  <TrailerCardStyled
                    key={`trailer-image-card-${index}`}
                    title={
                      (addingInfoLabel &&
                        `${movie.original_title}: ${movie[addingInfoLabel]}`) ||
                      `${movie.original_title}`
                    }
                    urlImage={`${process.env.REACT_APP_IMAGE_BASE_URL}/w500${movie.backdrop_path}`}
                  >
                    <PlayVideoStyled
                      key={`trailer-play-image-card-${index}`}
                      id={`${movie.original_title}|${movie.poster_path}-heart-poppulars`}
                      src={Assets('assets/images/FiPlay.svg')}
                      onClick={() => searchTrailer(`${movie.original_title}`)}
                    />
                  </TrailerCardStyled>
                )
              })}
            </div>
          </ContentRowStyled>
        </LayoutRowStyled>
      </div>
    )
  }

  return (
    <LayoutStyled>
      <ContentStyled>
        {renderHighlights()}
        {renderMoviesRow(popularsMovies, 'Populares', 'populars')}
        {renderMoviesRow(playingMovies, 'Em Exibição', 'playing')}
        {renderTrailersRow(popularsMovies, 'Trailers')}
        {renderMoviesRow(topMovies, 'Top Filmes', 'top', 'vote_average')}
        {favoritesMovies && favoritesMovies.length > 0
          ? renderMoviesRow(favoritesMovies, 'Favoritos', 'favorites')
          : null}
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Home
