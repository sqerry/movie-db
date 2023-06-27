import Header from './components/Header.jsx'
import MovieList from './components/MovieList.jsx'
import { useEffect, useState } from 'react'
import './styles/main.scss'

export default function App() {
  const [isUserLogged, setIsUserLogged] = useState(false)
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const toggleUserLogged = () => {
    // artificial delay
    setTimeout(() => {
      setIsUserLogged(!isUserLogged)
    }, 500)
  }

  const performSearch = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Ghamry0x1/Star-Wars-Movie-App/master/movies.json'
        )
        const { movies } = await response.json()
        setMovies(movies)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <>
      <Header
        isUserLogged={isUserLogged}
        toggleUserLogged={toggleUserLogged}
        handleSearchQueryChange={performSearch}
      />
      <MovieList movies={movies} searchQuery={searchQuery} />
    </>
  )
}
