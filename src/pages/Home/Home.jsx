import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import rgb from '../../assets/rgb.jpg'
import star from '../../assets/star.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="rgb">
        <img src={rgb} alt="" classname='rgb' />
        <div className="star">
          <img src={star} alt="" className='star'/>
          <p>A Quick Brown Fox Jumps Over The Lazy Dog</p>
          <div className="div-btns">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home