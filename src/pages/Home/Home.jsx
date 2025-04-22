import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
      const mapped = response.data.results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        thumbnail: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      }));
      setVideos(mapped);
      setHomeData(mapped);
    };
    fetchData();
  }, []);

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
        <TitleCards title={"Top Rated"} category={"top_rated"} />
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Popular"} category={"popular"}/>
      </div>
      
      <Footer/>
    </div>  
  )
}

export default Home