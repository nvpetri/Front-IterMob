import React, { useState } from 'react';
import './Download.css';
import logo from './IterLogo.png';
import play from './playstroy.png';
import apple from './apple.png';
import app from './app.png';

function Download() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="download-container">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#download">Download</a></li>
            <li className="logo"><img src={logo} alt="Logo" /></li>
            <li><a href="#fac">FAC</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="download-principal">
        <div className="download-text">
          <h1>Conheça o IterMob, o app que revoluciona seu deslocamento pela cidade. Com o IterMob, você acessa rotas, horários e tipos de transporte diretamente na palma da sua mão.</h1>
          <div className="app-store-links">
            <img src={play} alt="Google Play" />
            <img src={apple} alt="App Store" />
          </div>
        </div>
        <div className="download-image">
          <img src={app} alt="Aplicativo IterMob" />
        </div>
      </section>

      <footer>
        <span>Políticas e termos</span>
        <span>Copyright 2024 © IterMob</span>
        <span>Sobre nós</span>
      </footer>
    </div>
  );
}

export default Download;
