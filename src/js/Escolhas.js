import React from 'react';
import { Link } from 'react-router-dom';  
import styles from '../css/Escolhas.module.css';  // Importando o CSS como módulo
import logo from '../img/IterLogo.png';
import usuariosImg from '../img/usuarios.png'; 
import onibusImg from '../img/onibus.png'; 
import facImg from '../img/fac.png'; 

function Escolhas() {
    return (
        <div className={styles.mainContainer}>
            <header className={styles.header}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </header>
            <div className={styles.container}>
                <div className={styles.buttonGroup}>
                    {/* Link para a página de usuários */}
                    <Link to="/usuarios" className={styles.botao} id='usuario'>
                        <img src={usuariosImg} alt="Usuários" className={styles.icone} />
                        <span>USUÁRIOS</span>
                    </Link>
                    <div className={styles.botao}>
                        <img src={onibusImg} alt="Ônibus" className={styles.icone} />
                        <span>ÔNIBUS</span>
                    </div>
                </div>
                <div className={styles.botao}>
                    <img src={facImg} alt="FAC" className={styles.icone} />
                    <span>FAC</span>
                </div>
            </div>
            <footer className={styles.copyright}>Copyright 2024 © IterMob</footer>
        </div>
    );
}

export default Escolhas;
