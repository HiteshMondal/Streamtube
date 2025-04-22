import React, { useEffect, useState } from 'react';
import './Linux.css';
import axios from 'axios';

const Linux = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: 'snippet',
              q: 'Linux tutorials',
              key: apiKey,
              maxResults: 50,
              type: 'video'
            }
        });
        setVideos(res.data.items);
      } catch (error) {
        console.error("Error fetching Linux videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="linux-page">
      <h2>Linux Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <a
            className="video-card"
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <p>{video.snippet.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Linux;
