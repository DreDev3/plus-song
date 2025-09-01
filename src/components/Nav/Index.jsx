import { Link } from 'react-router-dom'

import Toggle from '../Toggle/Index'
import './Index.css'
export default function Nav() {
  return (
    <header>
      <div className="logo">
        <Link to='/'>
          <img src="./Logo-Plus-Song.png" alt="Logo Plus Song" />
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Buscar músicas</Link>
        <Link to="/top-success">Top Sucessos</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/about">Sobre Nós</Link>
      </nav>
      <Toggle />
    </header>
  )
}
