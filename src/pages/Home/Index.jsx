import { useState } from 'react';

import './Index.css'

export default function Home() {
  const [videoId, setVideoId] = useState(null);

  const getYoutubeId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };

  const handleOpenModal = (e, url) => {
    e.preventDefault(); // impede abrir no YouTube
    const id = getYoutubeId(url);
    setVideoId(id);
  };
  return (
    <>
      <h2>Bem-vindo(a) ao Plus Song!</h2>

      <main>
        <section class="wellcome">
          <span>PLUS SONG é o espaço certo para quem respira música!</span>
          <br /> Aqui você pode buscar seus artistas, descobrir
          novidades e ver quais são as músicas mais bombadas
          no YouTube.
          Criamos o site pensando em você, que não vive sem um
          bom som e adora estar conectado ao que todo mundo
          está ouvindo. <br />
          <span>Acesse o menu acima e bora curtir!</span>

        </section>
        <div class="partion"></div>
        <section class="sugestions">
          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}André.png`} alt="André" /></h3>
            <div class="list">
              <h4>Sugestões do <br />André</h4>
              <ol>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=d7cVLE4SaN0&list=RDd7cVLE4SaN0&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=d7cVLE4SaN0"
                      )
                    }
                    title="Bryson Tiller - Don't (Explicit Version)"
                  >
                    Música 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=NqXnR4a3Tcw&list=RDNqXnR4a3Tcw&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=NqXnR4a3Tcw"
                      )
                    }
                    title="2ZDinizz - Beatriz (prod. Leborato)"
                  >
                    Música 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=aTHzPhaiw6Q&list=RDaTHzPhaiw6Q&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=aTHzPhaiw6Q"
                      )
                    }
                    title="Vanessa Da Mata - Amado"
                  >
                    Música 3
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=s6dIjPBECXw&list=RDs6dIjPBECXw&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=s6dIjPBECXw"
                      )
                    }
                    title="Tasha & Tracie - Amina (prod. Retroboy)"
                  >
                    Música 4
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=90FKLUceJmg&list=RD90FKLUceJmg&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=90FKLUceJmg"
                      )
                    }
                    title="Duquesa - Fuso (Clipe Oficial)"
                  >
                    Música 5
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}Fabio.png`} alt="Fabio" /></h3>
            <div class="list">
              <h4>Sugestões do <br />Fabio</h4>
              <ol>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=Cbtgk20s6wA&list=RDCbtgk20s6wA&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=Cbtgk20s6wA"
                      )
                    }
                    title="Eminem - Lose Yourself"
                  >
                    Música 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=UDApZhXTpH8&list=RDCbtgk20s6wA&index=9"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=UDApZhXTpH8"
                      )
                    }
                    title="50 Cent - P.I.M.P. (Snoop Dogg Remix) ft. Snoop Dogg, G-Unit"
                  >
                    Música 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=fPO76Jlnz6c&list=RDfPO76Jlnz6c&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=fPO76Jlnz6c"
                      )
                    }
                    title="Coolio - Gangsta's Paradise (feat. L.V.)"
                  >
                    Música 3
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=WLhMxtuZr70&list=RDWLhMxtuZr70&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=WLhMxtuZr70"
                      )
                    }
                    title="Danilo e Davi - Apaga Apaga Apaga (Toma Essa Verdade)"
                  >
                    Música 4
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=fd3PJfv7SaY&list=RDfd3PJfv7SaY&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=fd3PJfv7SaY"
                      )
                    }
                    title="Grupo Menos é Mais e Matheus Fernandes - Lapada Dela"
                  >
                    Música 5
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}Lupe.png`} alt="Lupe" /></h3>
            <div class="list">
              <h4>Sugestões da <br />Guadalupe</h4>
              <ol>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=n5wxZ_OBUXk&list=RDn5wxZ_OBUXk&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=n5wxZ_OBUXk"
                      )
                    }
                    title="Grupo Menos é Mais - Coração Partido"
                  >
                    Música 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=JGjaXgNu0KU&list=RDJGjaXgNu0KU&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=JGjaXgNu0KU"
                      )
                    }
                    title="Hungria - Cara Metade"
                  >
                    Música 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=nrVMGnG_Cq8&list=RDnrVMGnG_Cq8&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=nrVMGnG_Cq8"
                      )
                    }
                    title="Henrique & Juliano - Compensa Me Amar"
                  >
                    Música 3
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=QDAHMMMtFBI&list=RDQDAHMMMtFBI&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=QDAHMMMtFBI"
                      )
                    }
                    title="Falamansa - Xote da Alegria"
                  >
                    Música 4
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=GZ3zL7kT6_c&list=RDGZ3zL7kT6_c&start_radio=1"
                    onClick={(e) =>
                      handleOpenModal(
                        e,
                        "https://www.youtube.com/watch?v=GZ3zL7kT6_c"
                      )
                    }
                    title="Teddy Swims - Lose Control"
                  >
                    Música 5
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </section>
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
  )
}
