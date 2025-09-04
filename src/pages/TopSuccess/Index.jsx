import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import './Index.css'


export default function TopSuccess() {
  const API_KEY = "AIzaSyA6AaOjekwi6OtibbO_JoY3ZYlEW_EqbdM";

  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState(null);

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
    <>
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
              const id = video.id;
              const thumb = video.snippet.thumbnails.medium.url;
              const views = parseInt(video.statistics.viewCount).toLocaleString("pt-BR");

              return (
                <div key={id} className="video-card">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setVideoId(id);
                    }}
                    title={title}
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
            <a id="btnVerMais" class="btn" href="https://www.youtube.com/feed/music?gl=BR" target="_blank">
              Mostrar mais
            </a>
          </div>
        </div>
      </main>
      {videoId && (
        <div className="video-modal">
          <div className="video-content">
            <a className="close" onClick={() => setVideoId(null)}>
              &times;
            </a>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
