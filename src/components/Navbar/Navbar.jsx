import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import profile from '../../assets/profile.png'
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

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
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    } else {
      alert("Please enter a search term");
    }
    navigate(`/search?query=${searchTerm}`);
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
        </ul>
      </div>
      <div className="navbar-right">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for videos"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <img src={searchIcon} alt="Search" className="search-icon" />
      </button>
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
