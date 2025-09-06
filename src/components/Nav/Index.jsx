import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Toggle from '../Toggle/Index';
import './Index.css';
export default function Nav() {
  const [isShort, setIsShort] = useState();
  return (
    <header>
      <div className="logo">
        <NavLink to='/plus-song'>
          <img src={`${import.meta.env.BASE_URL}Logo.png`} alt="Logo Plus Song" />
        </NavLink>
      </div>
      <a
        className="hamburguer"
        onClick={() => setIsShort(!isShort)}
        aria-label="Menu"
      >
        <FontAwesomeIcon icon={isShort ? faTimes : faBars} />
      </a>
      <nav className={isShort ? "open" : ""} >
        <NavLink to="/plus-song" onClick={() => setIsShort(false)}>Home</NavLink>
        <NavLink to="/search" onClick={() => setIsShort(false)}>Buscar músicas</NavLink>
        <NavLink to="/top-success" onClick={() => setIsShort(false)}>Top Sucessos</NavLink>
        <NavLink to="/contact" onClick={() => setIsShort(false)}>Contatos</NavLink>
        <NavLink to="/about" onClick={() => setIsShort(false)}>Sobre Nós</NavLink>
      </nav>
      <Toggle />
    </header>
  )
}
