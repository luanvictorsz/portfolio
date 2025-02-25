import { useState, useEffect } from 'react'; // Adicione isso no topo
import icon from "./images/Icon.png";
import './styles/Header.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu ao redimensionar a tela (opcional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <a href="/"><img src={icon} alt="icon" className="icon"/></a>
        
        <nav className="menu" id="menu">
          <a href="/">Home</a>
          <a href="/servicos">Serviços</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
        </button>

        <nav className={`menu-mobile ${isMenuOpen ? 'active' : ''}`} id="menu-mobile">
          <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="/contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
        </nav>
      </div>
    </div>
  );
}

export default App;