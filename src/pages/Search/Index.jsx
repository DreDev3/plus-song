import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "./Index.css";
import { useStatusColor } from "../../components/PageStatusColor/Index";
import TopPage from '../../components/TopPage/Index'

export default function Search() {
  const API_KEY = "AIzaSyA6AaOjekwi6OtibbO_JoY3ZYlEW_EqbdM";

  const [artistName, setArtistName] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingBanner, setLoadingBanner] = useState(false);
  const [artistInfo, setArtistInfo] = useState(null);
  const [results, setResults] = useState([]);
  const [banner, setBanner] = useState([]);
  const [videoId, setVideoId] = useState(null);
  const { isOn } = useStatusColor();

  // Buscar vídeos por artista
  async function fetchTopVideos(name) {

    if (!name.trim()) {
      alert("Digite o nome do cantor ou banda!");
      return;
    }

    setLoading(true);
    setArtistInfo(null);
    setResults([]);

    try {
      const query = `${name} musica`;
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
          query
        )}&maxResults=1&key=${API_KEY}`
      );
      const channelData = await channelRes.json();

      if (!channelData.items.length) {
        alert("Canal não encontrado.");
        return;
      }

      const channel = channelData.items[0];
      setArtistInfo({
        title: channel.snippet.title,
        thumb: channel.snippet.thumbnails.high.url,
      });

      // Buscar vídeos mais vistos do canal
      const videosRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel.id.channelId}&maxResults=9&order=viewCount&type=video&videoCategoryId=10&type=video&key=${API_KEY}`
      );
      const videosData = await videosRes.json();
      setResults(videosData.items || []);
    } catch (error) {
      alert("Erro ao buscar dados.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Banner inicial
  useEffect(() => {
    let intervalId;

    async function initBanner() {
      try {
        setLoadingBanner(true);
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=top%20hits&maxResults=50&key=${API_KEY}`
        );
        const searchData = await searchRes.json();
        const videos = searchData.items || [];

        if (!videos.length) return;

        // sorteia logo na primeira vez
        shuffleBanner(videos);

        // a cada 5s sorteia de novo
        intervalId = setInterval(() => shuffleBanner(videos), 5000);
        setLoadingBanner(false);
      } catch (error) {
        console.error("Erro ao carregar banner inicial", error);
      }
    }

    function shuffleBanner(videos) {
      const shuffled = [...videos].sort(() => 0.5 - Math.random());
      let amount;
      if (window.innerWidth <= 456) {
        amount = 1;
      } else if (window.innerWidth <= 900) {
        amount = 2;
      } else {
        amount = 4;
      }
      setBanner(shuffled.slice(0, amount));
    }

    initBanner();

    // limpa o intervalo ao desmontar
    return () => setInterval(() => clearInterval(intervalId), 5000);
  }, []);

  return (
    <>
      <main className="container">
        <section className="search-section">
          <h2>Buscar por artista ou banda</h2>
          <div className="input-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Digite o nome de um artista ou banda"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') fetchTopVideos(artistName) }}
            />
            <button className="clear-btn" onClick={() => setArtistName("")}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="button">
            {isOn ?
              <button
                onClick={() => fetchTopVideos(artistName)}
                style={{ border: '1px solid #0097e6' }}
              >Buscar
              </button> :
              <button
                onClick={() => fetchTopVideos(artistName)}
              >Buscar
              </button>}
          </div>

          {loading && (
            isOn ?
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2x"
                style={{ color: "#040608" }}
              />
              : <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2x"
                style={{ color: "#283b4b" }}
              />
          )}

          {artistInfo && (
            <div className="artist-info">
              <img src={artistInfo.thumb} alt={artistInfo.title} />
              <h2>{artistInfo.title}</h2>
            </div>
          )}

          <div id="results">
            {results.map((video) => (
              <div className="song-card" key={video.id.videoId}>
                <a
                  onClick={() => setVideoId(video.id.videoId)}
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <div className="song-details">
                    <h3>
                      {video.snippet.title.length > 35
                        ? video.snippet.title.substring(0, 35) + "..."
                        : video.snippet.title}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section >

        {/* Banner */}
        < section className="banner" >
          {loadingBanner && (
            isOn ?
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2x"
                style={{ color: "#d3d4d2", margin: 'auto' }}
              />
              : <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2x"
                style={{ color: "#283b4b", margin: 'auto' }}
              />
          )
          }
          {
            banner.map((video) => (
              <div className="song-card-banner" key={video.id.videoId}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <div className="song-details">
                  <h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {video.snippet.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))
          }
        </section >
      </main >
      <TopPage />
      {/* Modal vídeo */}
      {
        videoId && (
          <div className="video-modal" onClick={() => setVideoId(null)}>
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
        )
      }
    </>
  );
}
