import React from 'react';
import './FacCenter.css';
import logo from './IterLogo.png'


function FacCenter() {
  return (
    <div className="fac-container">
      <header>
        <a href="#voltar"> Central do FAC</a>
        <img src={logo} alt="Logo" className="logo" />
      </header>
     
      <section className="fac-sections">
        <div className="fac-card">
          <h2>Reclamações</h2>
          <div className="card-item">
            <h3>Raica Martinez</h3>
            <p>Linha muito demorada, poderiam ter mais ônibus para rodar.</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
            <h3>Virgínia Fonseca</h3>
            <p>Falta de limpeza nos ônibus e janelas estavam emperradas.</p>
            <button>RESPONDER</button>
          </div>
        </div>

        <div className="fac-card">
          <h2>Feedbacks</h2>
          <div className="card-item">
            <h3>Carolina Nepomucena</h3>
            <p>A musculatura que mantém a espera entre o clima e horários precisa ser melhorada!</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
            <h3>Bianca Soares</h3>
            <p>App é fácil de acesso e isso facilita a mobilidade</p>
            <button>RESPONDER</button>
          </div>
        </div>
      <div className="fac-card">
          <h2>Itens Perdidos</h2>
          <div className="card-item">
            <h3>Nicolas Petri</h3>
            <p>Esqueci de retirar minha lancheira em uma viagem no 25 - provavelmente está entre os bancos da frente.</p>
            <button>RESPONDER</button>
          </div>
          <div className="card-item">
            <h3>Neymar Jr.</h3>
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