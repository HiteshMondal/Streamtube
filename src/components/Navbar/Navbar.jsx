import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ onCategoryChange}) => {
  const categories = [
    { label: 'Home', value: 'now_playing' },
    { label: 'Programming', value: '28' },
    { label: 'Linux', value: '99' },
    { label: 'Culture', value: '10752' },
    { label: 'Blog', value: '35' },
    { label: 'Portfolio', value: '18' }
  ];

  const navigate = useNavigate();

  const handleClick = (cat) => {
    if (cat.label === "Home") {
      navigate('/');
      window.location.reload(); // Refresh the entire app
    } else {
      onCategoryChange(cat);
    }
  };

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    })
  }, [])



  return (
    <div ref={navRef}className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li><a href="/">Home</a></li>
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
            <p onClick={() => {logout()}}>Sign in!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
