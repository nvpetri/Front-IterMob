import React from 'react'
import './FacCenter.css'
import logo from './IterLogo.png'
import seta from './seta.png'
import PerfilRaica from './PerfilRaica.png'
import PerfilVirginia from './PerfilVirginia.png'
import PerfilCarol from './PerfilCarol.png'
import PerfilBianca from './PerfilBianca.png'
import PerfilPetri from './PerfilPetri.png'
import PerfilNeyl from './PerfilNey.png'

function FacCenter() {
  return (
    <div className="fac-container">
      <header>
  <div className="header-left">
  <a href="#voltar">
      <img src={seta} alt="Seta para voltar" className="seta-icon" />
      Central do FAC
    </a>
  </div>
  <div className="header-center">
    <img src={logo} alt="Logo" className="logo" />
  </div>
</header>

     
      <section className="fac-sections">
        <div className="fac-card">
          <h2>Reclamações</h2>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilRaica} alt="Perfil de Raica Martinez" className="profile-pic" />
              <h3>Raica Martinez</h3>
              <h4>A11</h4>
            </div>
            <p>Linha muito demorada, poderiam ter mais ônibus para rodar.</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilVirginia} alt="Perfil de Virgínia Fonseca" className="profile-pic" />
              <h3>Virgínia Fonseca</h3>
              <h4>T246</h4>
            </div>
            <p>Falta de limpeza nos ônibus e janelas estavam emperradas.</p>
            <button>RESPONDER</button>
          </div>
        </div>

        <div className="fac-card">
          <h2>Feedbacks</h2>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilCarol} alt="Perfil de Carolina Neponucena" className="profile-pic" />
              <h3>Carolina Neponucena</h3>
            </div>
            <p>A musculatura que mantém a espera entre o clima e horários precisa ser melhorada!</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilBianca} alt="Perfil de Bianca Soares" className="profile-pic" />
              <h3>Bianca Soares</h3>
            </div>
            <p>App é fácil de acesso e isso facilita a mobilidade</p>
            <button>RESPONDER</button>
          </div>
        </div>
      <div className="fac-card">
          <h2>Itens Perdidos</h2>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilPetri} alt="Perfil de Nicolas Petri" className="profile-pic" />
              <h3>Nicolas Petri</h3>
              <h4>25</h4>
            </div>
            <p>Esqueci de retirar minha lancheira em uma viagem no 25 - provavelmente está entre os bancos da frente.</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
          <div className="profile-container">
              <img src={PerfilNeyl} alt="Perfil de Neyma" className="profile-pic" />
              <h3>Neymar Jr.</h3>
              <h4>035</h4>
            </div>
            <p>Esqueci minha mochila dentro do ônibus UBS - Vinha no horário de tarde umas 16h.</p>
            <button>RESPONDER</button>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default FacCenter;