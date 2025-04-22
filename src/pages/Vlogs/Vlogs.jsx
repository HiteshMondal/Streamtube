import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Vlogs.css';
import Navbar from '../../components/Navbar/Navbar';

const Vlogs = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: 'vlogs',
        maxResults: 50,
        key: apiKey,
        type: 'video',
      }
    }).then(res => setVideos(res.data.items))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='vlogs'>
      <h1>Vlogs</h1>
      <div className="video-grid">
        {videos.map(video => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h3>{video.snippet.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Vlogs;
