import React, { useState } from 'react'
import './FACResponse.css'
import logo from './IterLogo.png'
import PerfilVirginia from './PerfilVirginia.png'

function FACResponse() {
  const [response, setResponse] = useState('')

  const handleInputChange = (e) => {
    setResponse(e.target.value)
  }

  const handleSubmit = (e) => {
<<<<<<< HEAD
    e.preventDefault();
    console.log('Resposta enviada:', response);
    setResponse('');
  };
=======
    e.preventDefault()
    console.log('Resposta enviada:', response)
    setResponse('')
  }
>>>>>>> ecb7fc335ffb1ade0536b3e4a55fc7992758cea2

  return (
    <div className="fac-response-container">
      <header>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <div className="feedback-container">
        <div className="feedback-card">
          <div className="user-info">
<<<<<<< HEAD
            <img src={PerfilVirginia} alt="Perfil de Virgínia Fonseca" className="user-photo"/>
=======
            <img src={PerfilVirginia} alt="Perfil de Virgínia Fonseca" className="user-photo" />
>>>>>>> ecb7fc335ffb1ade0536b3e4a55fc7992758cea2
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
      </div>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  )
}

<<<<<<< HEAD
export default FACResponse;
=======
export default FACResponse

>>>>>>> ecb7fc335ffb1ade0536b3e4a55fc7992758cea2
