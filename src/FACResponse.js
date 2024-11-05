import React, { useState } from 'react';
import './FACResponse.css';
import logo from './IterLogo.png'
import PerfilVirginia from './PerfilVirginia.png'


function FACResponse() {
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Resposta enviada:', response);
    setResponse('');
  };

  return (
    <div className="fac-response-container">
      <header>
        <a href="/"><i className="back-arrow">&#8592;</i></a>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="feedback-card">
        <div className="user-info">
        <img src={PerfilVirginia} alt="Perfil de Virgínia Fonseca" className="user-photo"/>
          <div>
            <p className="user-name">Virginia Fonseca</p>
            <p className="user-code">T246</p>
          </div>
        </div>
        <p className="feedback-text">Falta de limpeza no ônibus e a janela estava emperrada.</p>
      </div>

      <form className="response-form" onSubmit={handleSubmit}>
        <label htmlFor="response">RESPONDER</label>
        <textarea
          id="response"
          placeholder="Escreva aqui seu comentário..."
          value={response}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit" className="send-button">ENVIAR</button>
      </form>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default FACResponse;