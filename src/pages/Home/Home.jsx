import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className='home'>
        <Navbar />
            <div className="div-btns">
              <TitleCards />
            </div>
      </div>
      <div>
        <TitleCards title={"Recommended"} category={"now_playing"}/>
        <TitleCards title={"top_rated"} category={"top_rated"} />
        <TitleCards title={"upcoming"} category={"upcoming"}/>
        <TitleCards title={"Popular"} category={"popular"}/>
      </div>
      <Footer/>
    </div>  
  )
}

export default Home