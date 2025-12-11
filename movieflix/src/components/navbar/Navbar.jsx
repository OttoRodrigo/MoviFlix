import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/flix-logo.png'; 
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Funcionalidade será implementada depois
    console.log('Buscando:', searchQuery);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {auth.isAutenthicated && (
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="MovieFlix" />
          </Link>

          {/* Menu de Navegação */}
          <div className="navbar-menu">
            <Link to="/" className="navbar-link">🏠 Início</Link>
            <Link to="/movies" className="navbar-link">🎬 Filmes</Link>
            <Link to="/mylist" className="navbar-link">💖 Minha Lista</Link>
          </div>

          {/* Lado direito - Busca e Perfil */}
          <div className="navbar-right">
            {/* Busca */}
            <div className="search-container">
              <button 
                className="search-button" 
                onClick={handleSearchClick}
                aria-label="Buscar"
              >
                🔍
              </button>
              
              {isSearchVisible && (
                <form className="search-form" onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Títulos, pessoas, gêneros..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              )}
            </div>

            {/* Notificações */}
            <button className="navbar-icon" aria-label="Notificações">
              🔔
            </button>

            {/* Perfil */}
            <div className="profile-menu">
              <button className="profile-button">
                <div className="profile-avatar">
                  👤
                </div>
                <span className="dropdown-icon">▼</span>
              </button>
              
              {/* Dropdown do Perfil (opcional) */}
              <div className="profile-dropdown">
                <Link to="/profile" className="dropdown-item">👤 Meu Perfil</Link>
                <Link to="/settings" className="dropdown-item">⚙️ Configurações</Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout" onClick={handleLogout}>🚪 Sair</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;