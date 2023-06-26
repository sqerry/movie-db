import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ movies, searchQuery }) => {
  const [sortOption, setSortOption] = useState('')
  const [sortedMovies, setSortedMovies] = useState([])

  useEffect(() => {
    let sortedMovies = [...movies]

    if (sortOption === 'asc') {
      sortedMovies.sort((a, b) => a.episode_number - b.episode_number)
    } else if (sortOption === 'desc') {
      sortedMovies.sort((a, b) => b.episode_number - a.episode_number)
    } else if (sortOption === 'recommended') {
      const favoritesOrder = [3, 5, 6, 2, 1] // Update the episode numbers in your preferred order

      sortedMovies.sort((a, b) => {
        const aIndex = favoritesOrder.indexOf(parseInt(a.episode_number))
        const bIndex = favoritesOrder.indexOf(parseInt(b.episode_number))

        if (aIndex === -1) return 1
        if (bIndex === -1) return -1

        return aIndex - bIndex
      })
    }

    setSortedMovies(sortedMovies)
  }, [movies, sortOption])

  const filteredMovies = sortedMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.main_characters.some((character) => character.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <>
      <ul className="movies__list container">
        {searchQuery && filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredMovies.map(({ title, description, episode_number, poster }) => (
            <MovieItem
              key={title}
              title={title}
              description={description}
              episodeNumber={episode_number}
              posterImage={poster}
            />
          ))
        )}
      </ul>
      <div className="actions">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort by</option>
          <option value="recommended">Recommended</option>
          <option value="asc">Episode Number (Ascending)</option>
          <option value="desc">Episode Number (Descending)</option>
        </select>
      </div>
    </>
  )
}

export default MovieList
