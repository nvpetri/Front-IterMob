import React from 'react';
import './UserDetails.css';
import logo from './IterLogo.png'
import Cartao1 from './cartao1.png'

function UserDetails() {
  return (
    <div className="user-details-container">
      <header>
        <a href="/"><i className="back-arrow">&#8592;</i></a>
        <img src={logo} alt="Logo" className="logo" />     
      </header>

      <div className="user-details-card">
        <div className="user-icon">&#128100;</div>
        <div className="user-info">
          <p><strong>Nome:</strong> Bianca Soares</p>
          <p><strong>E-mail:</strong> bia@gmail</p>
          <p><strong>Endereço:</strong> Estradas dos Pereiras</p>
          <p><strong>Telefone:</strong> 11 93717-7249</p>
          <p><strong>Cartões:</strong>
            <span className="card-info">
              <img src= {Cartao1} alt="Mastercard logo" className="card-logo" />
              <span>....4578</span>
              <select>
                <option value="4578">4578</option>
                <option value="1234">1234</option>
              </select>
            </span>
          </p>
        </div>
      </div>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default UserDetails;