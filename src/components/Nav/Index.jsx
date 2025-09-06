import { NavLink } from 'react-router-dom';

import Toggle from '../Toggle/Index';
import './Index.css';
export default function Nav() {
  return (
    <header>
      <div className="logo">
        <NavLink to='/plus-song'>
          <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo Plus Song" />
        </NavLink>
      </div>
      <nav>
        <NavLink to="/plus-song">Home</NavLink>
        <NavLink to="/search">Buscar músicas</NavLink>
        <NavLink to="/top-success">Top Sucessos</NavLink>
        <NavLink to="/contact">Contatos</NavLink>
        <NavLink to="/about">Sobre Nós</NavLink>
      </nav>
      <Toggle />
    </header>
  )
}
