import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Programming</li>
          <li>Linux</li>
          <li>Culture</li>
          <li>Blog</li>
          <li>Portfolio</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='search'/>
        <p>Search</p>
        <img src={bell} alt="" className='bell'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <div className="dropdown">
            <p>Sign in!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar