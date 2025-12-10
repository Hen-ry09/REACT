import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <Link to={'/'}><h2>Home</h2></Link>
    <Link to={'/About'}><h2>About</h2></Link>
    <Link to={'/Details'}><h2>Details</h2></Link>
    <Link to={'/Items'}><h2>Items</h2></Link>
    <Link to={'/Hero'}><h2>Hero</h2></Link>
    <Link to={'/Contact'}><h2>Contact</h2></Link>
    </div>
  )
}

export default NavBar