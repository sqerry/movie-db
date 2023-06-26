import Search from './Search.jsx'

const Header = ({ isUserLogged, toggleUserLogged, handleSearchQueryChange }) => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <h1>
          MOV<span>.</span>
        </h1>
      </a>
      <div className="search-bar">
        <Search performSearch={handleSearchQueryChange} />
      </div>
      <button onClick={toggleUserLogged} className="register-login btn">
        {isUserLogged ? 'Logout' : 'Login'}
      </button>
    </header>
  )
}

export default Header
