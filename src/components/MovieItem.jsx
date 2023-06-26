import PropTypes from 'prop-types'

const MovieItem = ({ title }) => {
  return (
    <li className="movies__item" key={title}>
      {title}
    </li>
  )
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default MovieItem
