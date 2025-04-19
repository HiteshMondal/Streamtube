import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={github} alt="" />
        <img src={youtube} alt="" />
        <img src={facebook} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <ul>
        <li>Description</li>
        <li>Media</li>
        <li>Preferences</li>
        <li>Terms of Use</li>
        <li>Contact Me</li>
        <li>About</li>
      </ul>
      <p className='copyright-text'>@ 2025 Streamtube</p>
    </div>
  )
}

export default Footer