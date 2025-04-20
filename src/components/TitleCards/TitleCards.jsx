import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
  
  const TitleCards = ({title, category}) => {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTMwNWZiMWVhNmYzMmMwOTE1M2RlMmZlY2QwNDc4YiIsIm5iZiI6MTc0NTA4NDA4OC42NTc5OTk4LCJzdWIiOiI2ODAzZGViOGQzMTdiZTVlNWM5OTczZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6jlYOtyIMw7gmFKtyfjX37RHoqZlhcBx53lM9cOQUEU'
      }
    };

    const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Trending"}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}  
      </div>
    </div>
  )
}

export default TitleCards
