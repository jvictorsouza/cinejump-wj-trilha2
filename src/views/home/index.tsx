import React, { useState, useEffect } from 'react'
import { getPopularMovies } from 'apis/tmdb'
import {
  ContentStyled,
  LayoutStyled,
  LayoutHighlightsStyled,
  ContentHighlightsStyled,
  MainHighlightStyled,
  SecondaryHighlightStyled
} from './styles'
import { StrObjectAny } from 'interfaces'

const Home: React.FC = (...props) => {
  const [popularsMovies, setPopularsMovies] = useState<Array<StrObjectAny>>([])

  useEffect(() => {
    const returnApi = getPopularMovies()
    returnApi.then((data: StrObjectAny) => {
      if (data) {
        setPopularsMovies(data.results.slice(0, 3))
      }
    })
  }, [])

  const renderHighlights = () => {
    const renderMainHighlight = (movie: StrObjectAny) => {
      return (
        <MainHighlightStyled>
          <img
            alt="MainHighlight"
            src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w780${movie.backdrop_path}`}
          />
          <div id="main-highlights-banner-info">
            <span>{movie.title}</span>
            <label>{movie.overview}</label>
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
        {popularsMovies.length >= 3 ? (
          <ContentHighlightsStyled>
            {renderMainHighlight(popularsMovies[0])}
            <SecondaryHighlightStyled>
              {renderSecondaryHighlight(popularsMovies[1])}
              {renderSecondaryHighlight(popularsMovies[2])}
            </SecondaryHighlightStyled>
          </ContentHighlightsStyled>
        ) : null}
      </LayoutHighlightsStyled>
    )
  }

  return (
    <LayoutStyled>
      <ContentStyled>{renderHighlights()}</ContentStyled>
    </LayoutStyled>
  )
}

export default Home
