import React, { useState } from 'react'
import './Login.css'
import logo from './IterLogo.png'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Login com email: ${email}, senha: ${senha}`)
  }

  const handleRecoverAccess = () => {
    alert('Redirecionando para página de recuperação de acesso')
  }

  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={logo} alt="Logo da Iter" className="logo" />
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Digite seu email e/ou chave de acesso"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <p className="recover-text">
          Esqueceu seu email ou senha?{' '}
          <span className="recover-link" onClick={handleRecoverAccess}>
            Clique aqui para recuperar seu acesso.
          </span>
        </p>
      </div>

      <footer className="footer">
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  )
}

export default Login

