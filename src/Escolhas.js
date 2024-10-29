import React from 'react';
import './Escolhas.css';
import logo from './IterLogo.png'; // Substitua pelo caminho da sua imagem de logo
import usuariosImg from './usuarios.png'; // Imagem para o botão "Usuários"
import onibusImg from './onibus.png'; // Imagem para o botão "Ônibus"
import facImg from './fac.png'; // Imagem para o botão "FAC"

function Escolhas() {
    return (
        <div className="main-container">
            <header className="header">
                <img src={logo} alt="Logo" className="logo" /> {/* Logo no topo */}
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
            <footer className="copyright">Copyright 2024 © IterMob</footer> {/* Copyright */}
        </div>
    );
}

export default Escolhas;