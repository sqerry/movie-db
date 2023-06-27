import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const MovieItem = ({ title, posterImage, heroImage, description, episodeNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = (event) => {
    const isModalClicked = modalRef.current && modalRef.current.contains(event.target)
    const isCloseButtonClicked = event.target.classList.contains('close')

    if (!isModalClicked || isCloseButtonClicked) {
      setIsModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleModalClose)
    return () => {
      document.removeEventListener('mousedown', handleModalClose)
    }
  }, [])

  return (
    <li className="movies__item" key={title} onClick={handleModalOpen}>
      <div className="movies__item--img">
        <img src={`src/assets/img/${posterImage}`} alt="movie poster" />
      </div>
      <h3 className="movies__item--title">{title}</h3>
      {isModalOpen && (
        <MovieItemModal
          ref={modalRef}
          title={title}
          poster={posterImage}
          hero={heroImage}
          description={description}
          episode={episodeNumber}
          modalClose={handleModalClose}
        />
      )}
    </li>
  )
}

const MovieItemModal = React.forwardRef(({ hero, poster, title, description, episode, modalClose }, ref) => {
  const backgroundImageStyle = {
    backgroundImage: `url(src/assets/img/${hero})`,
  }

  return (
    <>
      <div className="movie_card" ref={ref}>
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={`src/assets/img/${poster}`} alt="movie poster" />
            <h1>{title}</h1>
            <div className="minutes">Episode: {episode}</div>
          </div>
          <div className="movie_desc">
            <p className="text">{description}</p>
          </div>
        </div>
        <div className="blur_back" style={backgroundImageStyle}></div>
        <div className="close" onClick={modalClose}>
          X
        </div>
      </div>
      <div className="overlay"></div>
    </>
  )
})

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MovieItem
