import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Culture.css';

const Culture = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            q: 'world cultures traditions countries',
            type: 'video',
            maxResults: 50,
            key: apiKey
          }
        });
        setVideos(res.data.items);
      } catch (error) {
        console.error('Error fetching culture videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="culture-container">
      <h2>Culture Videos</h2>
      <div className="culture-videos">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="culture-video-card"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="culture-thumbnail"
            />
            <h3 className="culture-title">{video.snippet.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Culture;
