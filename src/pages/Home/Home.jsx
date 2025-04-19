import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import play from '../../assets/play.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards'


const Home = () => {
  return (
    <div>
      <div className='home'>
        <Navbar />
            <p>A Quick Brown Fox Jumps Over The Lazy Dog</p>
            <div className="div-btns">
              <TitleCards />
            </div>
      </div>
      <div>
        <TitleCards />
        <TitleCards />
        <TitleCards />
        <TitleCards />
      </div>
    </div>  
  )
}

export default Home