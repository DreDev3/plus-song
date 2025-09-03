import { Link } from 'react-router-dom'

import './Index.css'
import { useStatusColor } from '../../components/PageStatusColor/Index'
export default function Contact() {
  const { isOn } = useStatusColor();
  return (
    <>
      <h2>Fale Conosco</h2>
      <p class="intro">
        Fale com a gente de qualquer lugar, pelo site ou telefone.
        <br />Conte o que achou dos nossos serviços!
      </p>

      <section class="cards" aria-label="Canais de contato">
        <div className="social">
          <Link
            to={'https://wa.me/+5541992750166'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {isOn ? <img src={`${import.meta.env.BASE_URL}icone-contato-(com-contraste).png`} alt='Telefone' /> :
              <img src={`${import.meta.env.BASE_URL}icone-contato.png`} alt='Telefone' />}
          </Link>
        </div>
        <div className="social">
          <Link
            to={'https://mail.google.com/mail/u/0/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {isOn ? <img src={`${import.meta.env.BASE_URL}icone-email-(com-contraste).png`} alt='Telefone' /> :
              <img src={`${import.meta.env.BASE_URL}icone-email.png`} alt='E-mail' />}
          </Link>
        </div>
        <div className="social">
          <Link
            to={'https://www.instagram.com/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {isOn ? <img src={`${import.meta.env.BASE_URL}icone-instagram(com-contraste).png`} alt='Telefone' /> :
              <img src={`${import.meta.env.BASE_URL}icone-instagram.png`} alt='Instagram' />}
          </Link>
        </div>
        <div className="social">
          <Link
            to={'https://www.facebook.com/?locale=pt_BR'}
            target='_blank'
            rel='noopener noreferrer'
          >
            {isOn ? <img src={`${import.meta.env.BASE_URL}icone-facebook-(com-contraste).png`} alt='Telefone' /> :
              <img src={`${import.meta.env.BASE_URL}icone-facebook.png`} alt='Facebook' />}
          </Link>
        </div>
      </section>
    </>
  )
}
