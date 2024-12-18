import React, { useState } from 'react';
import styles from '../css/Cadastro.module.css';  // Importando o CSS como módulo
import logo from '../img/IterLogo.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [usuarioId, setUsuarioId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas devem conter os mesmos caracteres!');
    }

    const novoUsuario = {
      nome,
      sobrenome,
      telefone,
      cpf,
      email,
      senha,
    };

    try {
      const response = await fetch('https://itermob-back.onrender.com/v1/itermob/usuario', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      const data = await response.json();

      if (response.ok) {
        setUsuarioId(data.id);
        alert(`Usuário cadastrado com sucesso:\nNome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: ${telefone}\nCPF: ${cpf}\nEmail: ${email}\nID: ${data.id}`);
        console.log('Resposta do servidor:', data);
      } else {
        console.log('Erro no cadastro:', data);
        alert('Erro no cadastro: ' + (data.message || 'Erro desconhecido'));
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar com o servidor. Verifique sua conexão.');
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>
      <div className={styles.cadastroContainer}>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="cpf"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="sobrenome"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="telefone"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Confirmar Senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
