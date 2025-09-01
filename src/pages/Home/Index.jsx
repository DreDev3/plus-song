import { Link } from 'react-router-dom'

import './Index.css'
export default function Home() {
  return (
    <>
      <h2>Bem-vindo(a) ao Plus Song!</h2>

      <main>
        <section class="wellcome">
          <span>PLUS SONG é o espaço certo para quem respira música!</span>
          <br />Aqui você pode buscar seus artistas, descobrir
          <br />novidades e ver quais são as músicas mais bombadas
          <br />no YouTube.
          <br />Criamos o site pensando em você, que não vive sem um
          <br />bom som e adora estar conectado ao que todo mundo
          <br />está ouvindo.
          <br /><span>Acesse o menu acima e bora curtir!</span>

        </section>
        <div class="partion"></div>
        <section class="sugestions">
          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}André.png`} alt="André" /></h3>
            <div class="list">
              <h4>Sugestões do André</h4>
              <ol>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 1</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 2</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 3</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 4</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 5</a></li>
              </ol>
            </div>
          </div>

          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}Fabio.png`} alt="Fabio" /></h3>
            <div class="list">
              <h4>Sugestões do Fabio</h4>
              <ol>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 1</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 2</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 3</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 4</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 5</a></li>
              </ol>
            </div>
          </div>

          <div class="dev-box">
            <h3><img src={`${import.meta.env.BASE_URL}Lupe.png`} alt="Lupe" /></h3>
            <div class="list">
              <h4>Sugestões da Lupe</h4>
              <ol>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 1</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 2</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 3</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 4</a></li>
                <li><a href="https://www.youtube.com/watch?v=XXXXXXXX" target="_blank" rel="noopener">Música 5</a></li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
