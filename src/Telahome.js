import React, { useState, useEffect } from 'react';
import './Telahome.css';  // Importando o arquivo de estilos
import logo from './IterLogo.png';  // Logo
import Certinho from './certinhoHome.png';  // Imagem de status (Operação normal)

function Telahome() {
  // Estado para armazenar a localização
  const [location, setLocation] = useState({ lat: null, lng: null });

  // Função para carregar o Google Maps
  const loadGoogleMaps = (callback) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYHwAE907WBa_MbMh8TD5uZI_ampJmtkc&callback=${callback}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  // Função para obter a localização atual
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error);
        }
      );
    } else {
      console.error("Geolocalização não suportada neste navegador.");
    }
  }, []);

  // Carregar o Google Maps assim que a localização for obtida
  useEffect(() => {
    if (location.lat && location.lng) {
      loadGoogleMaps('initMap');
    }
  }, [location]);

  // Função para inicializar o mapa
  window.initMap = () => {
    if (location.lat && location.lng) {
      // Cria o mapa
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 14,
      });

      // Adiciona o marcador para a localização atual
      new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: 'Sua Localização',
      });

      // Pontos adicionais para adicionar ao mapa
      const points = [
        { lat: -23.527774, lng: -46.836318, title: "Av. Carmine Gragnano, 731" },
        { lat: -23.522597, lng: -46.836445, title: "Terminal Rodoferroviário Vereador Geraldo Corrêa" },
        { lat: -23.531053, lng: -46.832746, title: "Rua Fernão Dias Paes Leme, 257" }
      ]
      
      

      // Adiciona outros pontos ao mapa
      points.forEach((point) => {
        new window.google.maps.Marker({
          position: { lat: point.lat, lng: point.lng },
          map,
          title: point.title,
        });
      });
    }
  };

  // Lista de ônibus com rotas e tempos de espera
  const buses = [
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
  ];

  return (
    <div className="telahome-container">
      {/* Cabeçalho */}
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

      {/* Conteúdo principal */}
      <main className="content">
        <div className="map-container">
          {/* O mapa será carregado aqui */}
          <div id="map" style={{ width: '500px', height: '400px' }}></div>

          {/* Status da operação */}
          <div className="status">
            <img src={Certinho} alt="Status Icon" className="status-icon" />
            <span>Operação normal</span>
          </div>
        </div>

        {/* Lista de ônibus */}
        <div className="bus-list">
          {buses.map((bus, index) => (
            <div className="bus-item" key={index}>
              <span>{bus.route}</span>
              <span>{bus.time}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <span>Políticas e termos</span>
          <span><strong>Copyright 2024 © IterMob</strong></span>
          <span>Sobre nós</span>
        </div>
      </footer>
    </div>
  );
}

export default Telahome;
