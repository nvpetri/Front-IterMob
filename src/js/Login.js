import React, { useState } from 'react';
import styles from '../css/Login.module.css';  // Importando CSS como módulo
import logo from '../img/IterLogo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validação de exemplo
    if (email === '' || senha === '') {
      setError('Por favor, preencha todos os campos');
      return;
    }
    setError('');
    console.log(`Login com email: ${email}, senha: ${senha}`);
  };

  const handleRecoverAccess = () => {
    alert('Redirecionando para página de recuperação de acesso');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo da Iter" className={styles.logo} />
      </div>

      <div className={styles.loginContainer}>
        <h2>ACESSO ADMINISTRADOR</h2>
        {error && <p className={styles.errorText}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Digite seu email e/ou chave de acesso"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email ou chave de acesso"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              aria-label="Senha"
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <p className={styles.recoverText}>
          Esqueceu seu email ou senha?{' '}
          <span className={styles.recoverLink} onClick={handleRecoverAccess}>
            Clique aqui para recuperar seu acesso.
          </span>
        </p>
      </div>

      <footer className={styles.footer}>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default Login;
