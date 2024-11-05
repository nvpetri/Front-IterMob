import React from 'react';
import './Escolhas.css';
import logo from './IterLogo.png'; 
import usuariosImg from './usuarios.png'; 
import onibusImg from './onibus.png'; 
import facImg from './fac.png'; 

function Escolhas() {
    return (
        <div className="main-container">
            <header className="header">
                <img src={logo} alt="Logo" className="logo" /> {}
            </header>
            <div className="container">
                <div className="button-group">
                    <div className="botao">
                        <img src={usuariosImg} alt="Usuários" className="icone" />
                        <span>Administração - Usuários</span>
                    </div>
                    <div className="botao">
                        <img src={onibusImg} alt="Ônibus" className="icone" />
                        <span>Administração - Ônibus</span>
                    </div>
                </div>
                <div className="botao fac-button">
                    <img src={facImg} alt="FAC" className="icone" />
                    <span>Administração - FAC</span>
                </div>
            </div>
            <footer className="copyright">Copyright 2024 © IterMob</footer> {}
        </div>
    );
}

export default Escolhas;