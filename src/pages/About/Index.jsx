import { Link } from 'react-router-dom'

import './Index.css'
export default function About() {
  return (
    <>
      <section class="description">
        <h2>Sobre Nós</h2>
        <p>
          Somos uma plataforma que filtra músicas do YouTube, tornando mais fácil encontrar os maiores sucessos.
        </p>
        <p>
          Nosso propósito é ajudar os usuários a descobrir tanto novas canções quanto as mais populares do momento.
        </p>
      </section>

      <section class="profile">
        <div class="picture">
          <img src={`${import.meta.env.BASE_URL}André.png`} alt="André" />
          <p>Edson André dos Santos</p>
          <Link
            to={'https://www.instagram.com/edsonandre/'}
            target='_blank'
            rel='noopener noreferrer'
          >Bio</Link>
        </div>
        <div class="picture">
          <img src={`${import.meta.env.BASE_URL}Fabio.png`} alt="Fabio" />
          <p>Fabio Aparecido Pereira</p>
          <Link
            to={''}
            target='_blank'
            rel='noopener noreferrer'
          >Bio</Link>
        </div>
        <div class="picture">
          <img src={`${import.meta.env.BASE_URL}Lupe.png`} alt="Lupe" />
          <p>Guadalupe Delaila Peters</p>
          <Link
            to={'https://www.instagram.com/oqlupe/'}
            target='_blank'
            rel='noopener noreferrer'
          >Bio</Link>
        </div>
      </section>
    </>
  )
}
