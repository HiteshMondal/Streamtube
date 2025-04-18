import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.jpg'
import caret from '../../assets/caret.png'



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
        <img src={search} alt="" className='icons'/>
        <p>Children</p>
        <img src={bell} alt="" className='icons'/>
        <div className="navbar-profile">
        <img src={profile} alt="" className='profile'/>
        <img src={caret} alt="" className='profile'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar