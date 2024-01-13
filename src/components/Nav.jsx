import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  fontFamily: 'Lemon, serif',
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link style={styles} to="/" className="navbar-brand fw-bold fs-2">Burmese Food</Link>
      </div>
    </nav>
  )
}

export default Nav