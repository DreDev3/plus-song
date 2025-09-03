import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import './Index.css'


export default function TopSuccess() {
  const API_KEY = "AIzaSyA6AaOjekwi6OtibbO_JoY3ZYlEW_EqbdM";

  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchTop5MostPopularMusic() {
      setLoading(true);

      const url = `https://www.googleapis.com/youtube/v3/videos?` +
        `part=snippet,statistics` +
        `&chart=mostPopular` +
        `&regionCode=BR` +
        `&videoCategoryId=10` +
        `&maxResults=6` +
        `&key=${API_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const sorted = data.items.sort(
            (a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)
          );
          setVideos(sorted);
        } else {
          setVideos([]);
        }
      } catch (error) {
        console.error("Erro ao carregar vídeos:", error);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTop5MostPopularMusic();
  }, []);
  return (
    <main className='top-container'>
      <h2>Top 5 Músicas Populares no YouTube Brasil</h2>
      <div id='topResults'>

        {loading && <FontAwesomeIcon
          icon={faSpinner}
          spin
          size="2x"
          style={{ color: "#31135f" }}
        />}

        {!loading && videos.length === 0 && <p>Nenhum vídeo encontrado.</p>}

        <div className="video-list">
          {videos.map((video) => {
            const title = video.snippet.title;
            const videoId = video.id;
            const thumb = video.snippet.thumbnails.medium.url;
            const views = parseInt(video.statistics.viewCount).toLocaleString("pt-BR");

            return (
              <div key={videoId} className="video-card">
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={thumb} alt={title} />
                  <div className="video-info">
                    <h3>

                      {title}

                    </h3>
                    <p className="views">Visualizações: {views}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
