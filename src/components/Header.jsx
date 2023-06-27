import React from 'react'
import Search from './Search'

const Header = ({ isUserLogged, toggleUserLogged, handleSearchQueryChange }) => {
  const handleButtonClick = () => {
    toggleUserLogged()
  }

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
      <button onClick={handleButtonClick} className="register-login btn">
        {isUserLogged ? 'Logout' : 'Login'}
      </button>
    </header>
  )
}

export default Header
