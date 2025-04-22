import React from 'react'
import './Footer.css'
import github from '../../assets/github.jpg'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate(); // ✅ Call it here

  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://github.com/HiteshMondal" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.youtube.com/@HiteshMondal-t9c" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61572958832708" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-mondal-1ba04a317" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>

      <ul>
        <li className="footer-link" onClick={() => navigate('/terms')}>Terms of Use</li>
        <li><a href="mailto:mehiteshmondal@gmail.com">Contact Me</a></li>
        <li>
          <a
            href="https://github.com/HiteshMondal/Streamtube/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
      </ul>

      <p className='copyright-text'>© 2025 Streamtube</p>
    </div>
  )
}

export default Footer;
