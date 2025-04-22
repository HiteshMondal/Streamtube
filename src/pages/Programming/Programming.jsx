import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Programming.css'; 

const Programming = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              part: 'snippet',
              maxResults: 12,
              q: 'programming',
              type: 'video',
              key: apiKey,
            },
          }
        );
        setVideos(res.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="programming-page">
      <h2>Programming Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
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

export default Programming;
