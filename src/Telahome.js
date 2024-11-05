import React from 'react'
import './Telahome.css'
import logo from './IterLogo.png'
import Certinho from './certinhoHome.png'

function Telahome() {
  const buses = [
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
  ]

  return (
    <div className="telahome-container">
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

      <main className="content">
        <div className="map-container">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0542254840596!2d-46.83631752354108!3d-23.527774359769025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf015170028907%3A0x9293468b2a4b8f5d!2sCarapicu%C3%ADba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1638289632686!5m2!1spt-BR!2sbr"
            width="500"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="status">
            <img src= {Certinho} alt="Status Icon" className="status-icon"/>
            Operação normal
          </div>
        </div>

        <div className="bus-list">
          {buses.map((bus, index) => (
            <div className="bus-item" key={index}>
              <span>{bus.route}</span>
              <span>{bus.time}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span>Políticas e termos</span>
          <span><strong>Copyright 2024 © IterMob</strong></span>
          <span>Sobre nós</span>
        </div>
      </footer>
    </div>
  )
}

export default Telahome

