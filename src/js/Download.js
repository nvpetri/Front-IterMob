import React, { useState } from 'react';
import styles from '../css/Download.module.css';  // Importando o CSS como módulo
import logo from '../img/IterLogo.png';
import play from '../img/playstroy.png';
import apple from '../img/apple.png';
import app from '../img/app.png';

function Download() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.downloadContainer}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#download">Download</a></li>
            <li className={styles.logo}><img src={logo} alt="Logo" /></li>
            <li><a href="#fac">FAC</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className={styles.downloadPrincipal}>
        <div className={styles.downloadText}>
          <h1>Conheça o IterMob, o app que revoluciona seu deslocamento pela cidade. Com o IterMob, você acessa rotas, horários e tipos de transporte diretamente na palma da sua mão.</h1>
          <div className={styles.appStoreLinks}>
            <img src={play} alt="Google Play" />
            <img src={apple} alt="App Store" />
          </div>
        </div>
        <div className={styles.downloadImage}>
          <img src={app} alt="Aplicativo IterMob" />
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Políticas e termos</span>
        <span>Copyright 2024 © IterMob</span>
        <span>Sobre nós</span>
      </footer>
    </div>
  );
}

export default Download;
