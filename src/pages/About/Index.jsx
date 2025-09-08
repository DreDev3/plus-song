import { Link } from 'react-router-dom'

import './Index.css'
import { useState } from 'react'
export default function About() {
  const [profileId, setProfileId] = useState(null);
  const profileDescription = {
    edson: 'Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 5º período, e a música está presente em praticamente todos os momentos da minha vida. Gosto de programar ouvindo minhas playlists favoritas, seja no trabalho ou quando estou desenvolvendo projetos pessoais. A música também me acompanha nas tarefas do dia a dia, como quando estou limpando a casa ou apenas relaxando. Para mim, ela é uma fonte de inspiração, energia e foco, tornando cada atividade mais leve e criativa.',
    fabio: 'Meu nome é Fabio, sou apaixonado por programação e vejo nessa área uma forma de transformar ideias em realidade. Além de desenvolvedor, sou pai, e essa experiência me inspira diariamente a buscar evolução, tanto pessoal quanto profissional. A música também faz parte do meu processo criativo: gosto de ouvir estilos diversos que me ajudam a manter o foco, a energia e a inspiração enquanto programo.',
    lupe: 'Sou estudante de Análise e Desenvolvimento de Sistemas e apaixonada por tecnologia. Nos meus momentos de lazer, gosto de ouvir músicas, que também me acompanham quando estou concentrada no desenvolvimento de trabalhos e projetos. Acredito que a música é uma forma de inspiração e motivação, que torna cada desafio mais criativo e produtivo.'
  }

  return (
    <>
      <main className='contact-container'>
        <section class="description">
          <h2>Sobre Nós</h2>
          <p>
            Somos uma plataforma que filtra músicas do YouTube, tornando mais fácil encontrar os maiores sucessos.
            Nosso propósito é ajudar os usuários a descobrir tanto novas canções quanto as mais populares do momento.
          </p>
        </section>

        <section class="profile">
          <div class="picture">
            <img src={`${import.meta.env.BASE_URL}André.png`} alt="André" />
            <p>Edson André dos Santos</p>
            <a
              onClick={() => setProfileId(profileDescription.edson)}
              target='_blank'
              rel='noopener noreferrer'
            >Biografia</a>
          </div>
          <div class="picture">
            <img src={`${import.meta.env.BASE_URL}Fabio.png`} alt="Fabio" />
            <p>Fabio Aparecido Pereira</p>
            <a
              onClick={() => setProfileId(profileDescription.fabio)}
              target='_blank'
              rel='noopener noreferrer'
            >Biografia</a>
          </div>
          <div class="picture">
            <img src={`${import.meta.env.BASE_URL}Lupe.png`} alt="Lupe" />
            <p>Guadalupe Delaila Peters</p>
            <a
              onClick={() => setProfileId(profileDescription.lupe)}
              target='_blank'
              rel='noopener noreferrer'
            >Biografia</a>
          </div>
        </section>

        {/* Modal Perfil */}
        {profileId && (
          <div className="profile-modal" onClick={() => setProfileId(null)}>
            <div className="profile-content">
              <a className="close" onClick={() => setProfileId(null)}>
                &times;
              </a>

              {/* Conteúdo do perfil */}
              <h2>{profileId}</h2>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
