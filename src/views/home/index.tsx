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
  ContainerRowStyled,
  LayoutRowStyled,
  ContentRowStyled,
  ImageCardStyled,
  HeartFavoritesStyled
} from './styles'
import { StrObjectAny } from 'interfaces'
import { Assets } from 'helpers/assets'

const Home: React.FC = (...props) => {
  const [popularsMovies, setPopularsMovies] = useState<Array<StrObjectAny>>([])
  const [playingMovies, setPlayingMovies] = useState<Array<StrObjectAny>>([])
  const [topMovies, setTopMovies] = useState<Array<StrObjectAny>>([])
  const [recomendationsMovies, setRecomendationsMovies] = useState<Array<StrObjectAny>>(
    []
  )

  useEffect(() => {
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

  const renderRow = (
    data: Array<StrObjectAny>,
    title: string,
    addingInfoLabel?: string
  ) => {
    return (
      <div id="pre-layout-home-row">
        <LayoutRowStyled>
          <ContentRowStyled>
            <span>{title}</span>
            <div>
              {data.map((movie: StrObjectAny) => {
                return (
                  <ImageCardStyled
                    title={
                      (addingInfoLabel &&
                        `${movie.original_title}: ${movie[addingInfoLabel]}`) ||
                      `${movie.original_title}`
                    }
                    urlImage={`${process.env.REACT_APP_IMAGE_BASE_URL}/w185${movie.poster_path}`}
                  >
                    <HeartFavoritesStyled
                      id={`${movie.original_title}|${movie.poster_path}-heart-poppulars`}
                      src={Assets('assets/images/BsHeartFill-black.svg')}
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

  return (
    <LayoutStyled>
      <ContentStyled>
        {renderHighlights()}
        {renderRow(popularsMovies, 'Populares')}
        {renderRow(playingMovies, 'Em Exibição')}
        {renderRow(topMovies, 'Top Filmes', 'vote_average')}
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Home
