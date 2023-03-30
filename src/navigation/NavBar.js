import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
          <div className='imagen_navbar'>
            <img src='https://www.pngplay.com/wp-content/uploads/12/Rick-And-Morty-Wallpaper-Transparent-PNG.png' className='imagen_navbar'></img>
          </div>
          <div className='link_nav'>
            <li id='navbar-elements'>
              <Link to='/'>Home</Link>
            </li>
            <li id='navbar-elements'>
              <Link to='/characters'>Characters</Link>
            </li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar