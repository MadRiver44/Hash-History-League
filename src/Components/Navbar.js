import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container navbar">
      <Link to="/">HOME</Link>
      <nav className="nav-links">
        <Link to="/players">PLAYERS</Link>
        <Link to="/TEAMS">TEAMS</Link>
      </nav>
    </div>
  )
}

export default Navbar
