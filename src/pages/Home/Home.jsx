import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import rgb from '../../assets/rgb.jpg'
import play from '../../assets/play.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
          <p>A Quick Brown Fox Jumps Over The Lazy Dog</p>
          <div className="div-btns">
            <button className='btn'><img src={play} alt=""/>Play</button>
            <button className='dark-btn'><img src={info} alt=""/>More Info</button>
            <TitleCards />
          </div>
    </div>
  )
}

export default Home