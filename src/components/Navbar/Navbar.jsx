import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'
import profile from '../../assets/profile.png'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ onCategoryChange}) => {
  const navigate = useNavigate();

  const handleClick = (cat) => {
    if (cat.label === "Home") {
      navigate('/');
      window.location.reload(); 
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
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate("/programming")}>Programming</li>
          <li onClick={() => navigate('/linux')}>Linux</li>
          <li onClick={() => navigate('/culture')}>Culture</li>
          <li onClick={() => navigate('/vlogs')} >Vlogs</li>
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
