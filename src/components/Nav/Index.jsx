import { Link } from 'react-router-dom'

import { useStatusColor } from '../PageStatusColor/Index';
import Toggle from '../Toggle/Index'
import './Index.css'
export default function Nav() {
  const { isOn } = useStatusColor();
  return (
    <header>
      <div className="logo">
        <Link to='/plus-song'>
          {isOn ? <img src={`${import.meta.env.BASE_URL}Logo-(com-contraste).png`} alt="Logo Plus Song" /> :
            <img src={`${import.meta.env.BASE_URL}Logo-Plus-Song.png`} alt="Logo Plus Song" />}
        </Link>
      </div>
      <nav>
        <Link to="/plus-song">Home</Link>
        <Link to="/search">Buscar músicas</Link>
        <Link to="/top-success">Top Sucessos</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/about">Sobre Nós</Link>
      </nav>
      <Toggle />
    </header>
  )
}
