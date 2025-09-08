import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import './Index.css';
export default function TopPage() {
  const [visible, setVisible] = useState(false);

  // Mostra o botão só quando a página rolar um pouco
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // rolagem suave
    });
  };
  return (
    <>
      <div className={`top-page ${visible ? 'show' : ''}`} onClick={scrollToTop} >
        <FontAwesomeIcon icon={faCircleUp} size="3x" />
      </div>

    </>
  )
}