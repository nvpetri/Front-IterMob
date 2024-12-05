import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../css/Telahome.module.css'; // Importando CSS Module
import logo from '../img/IterLogo.png';
import Certinho from '../img/certinhoHome.png';

function Telahome() {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [mapLoaded, setMapLoaded] = useState(false);

  // Carregar o script do Google Maps
  const loadGoogleMaps = () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYHwAE907WBa_MbMh8TD5uZI_ampJmtkc&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = () => {
      if (location.lat && location.lng) {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: location.lat, lng: location.lng },
          zoom: 14,
        });
  
        new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map,
          title: 'Sua Localização',
        });
  
        const points = [
          { lat: -23.527774, lng: -46.836318, title: 'Av. Carmine Gragnano, 731' },
          { lat: -23.522597, lng: -46.836445, title: 'Terminal Rodoferroviário' },
          { lat: -23.531053, lng: -46.832746, title: 'Rua Fernão Dias Paes Leme, 257' },
        ];
  
        points.forEach((point) => {
          new window.google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map,
            title: point.title,
          });
        });
      }
    };
  
    document.head.appendChild(script);
  };
  

  // Obter localização do usuário
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
          console.error('Erro ao obter localização:', error);
        }
      );
    } else {
      console.error('Geolocalização não suportada neste navegador.');
    }
  }, []);

  // Carregar o Google Maps apenas quando a localização estiver disponível
  useEffect(() => {
    if (location.lat && location.lng && !mapLoaded) {
      loadGoogleMaps();
    }
  }, [location, mapLoaded]);

  // Função de inicialização do mapa
  window.initMap = () => {
    if (location.lat && location.lng) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: location.lat, lng: location.lng },
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: 'Sua Localização',
      });

      const points = [
        { lat: -23.527774, lng: -46.836318, title: 'Av. Carmine Gragnano, 731' },
        { lat: -23.522597, lng: -46.836445, title: 'Terminal Rodoferroviário Vereador Geraldo Corrêa' },
        { lat: -23.531053, lng: -46.832746, title: 'Rua Fernão Dias Paes Leme, 257' },
      ];

      points.forEach((point) => {
        new window.google.maps.Marker({
          position: { lat: point.lat, lng: point.lng },
          map,
          title: point.title,
        });
      });
    } else {
      console.error('Erro ao carregar o mapa: localização não disponível.');
    }
  };

  const buses = [
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
    { route: '25 - Jd. Popular', time: '5 min' },
  ];

  return (
    <div className={styles.telahomeContainer}>
      <header className={styles.header}>
        <nav>
          <ul>
          <li><Link to="/" className={styles.navLink}>Início</Link></li>
          <li><Link to="/download" className={styles.navLink}>Download</Link></li>
          <li className={styles.logo}><img src={logo} alt="Logo" /></li>
          <li><Link to="/faccenter" className={styles.navLink}>FAC</Link></li>
          <li><Link to="/login" className={styles.navLink}>Login</Link></li>
            
          </ul>
        </nav>
      </header>

      <main className={styles.content}>
        <div className={styles.mapContainer}>
          <div id="map" className={styles.map}></div>
          <div className={styles.status}>
            <img src={Certinho} alt="Status Icon" className={styles.statusIcon} />
            <span>Operação normal</span>
          </div>
        </div>

        <div className={styles.busList}>
          {buses.map((bus, index) => (
            <div className={styles.busItem} key={index}>
              <span>{bus.route}</span>
              <span>{bus.time}</span>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span>Políticas e termos</span>
          <span><strong>Copyright 2024 © IterMob</strong></span>
          <span>Sobre nós</span>
        </div>
      </footer>
    </div>
  );
}

export default Telahome;
