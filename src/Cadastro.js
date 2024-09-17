import React, { useState } from 'react';
import './Cadastro.css';
import logo from './IterLogo.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas devem conter os mesmos caracteres!');
      return;
    }

    const novoUsuario = {
      nome,
      sobrenome,
      telefone,
      cpf,
      email,
      senha,
    };

    console.log('Dados enviados:', novoUsuario);
    alert(`Usuário cadastrado com sucesso:\nNome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: ${telefone}\nCPF: ${cpf}\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="cadastro-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="cpf"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="sobrenome"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="telefone"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
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
