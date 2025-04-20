import React, { useEffect, useRef, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTMwNWZiMWVhNmYzMmMwOTE1M2RlMmZlY2QwNDc4YiIsIm5iZiI6MTc0NTA4NDA4OC42NTc5OTk4LCJzdWIiOiI2ODAzZGViOGQzMTdiZTVlNWM5OTczZGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6jlYOtyIMw7gmFKtyfjX37RHoqZlhcBx53lM9cOQUEU'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onclick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
        <p>{apiData.published_at.slice(0,10)}</p>
      </div>
    </div>
  )
}

export default Player