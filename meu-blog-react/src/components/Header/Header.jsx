import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        
        <div className="logo-container">
          <Link to="/" className="logo-link">Meu Blog</Link>
        </div>

        <nav className="main-nav">
          <Link to="/">Início</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;