import React, { useState } from 'react'
import './Cadastro.css'
import logo from './IterLogo.png'

function Cadastro() {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
<<<<<<< HEAD

  const handleSubmit = async (e) => {
    e.preventDefault()

=======
  const [usuarioId, setUsuarioId] = useState(null) 
  const handleSubmit = async (e) => {
    e.preventDefault()

>>>>>>> 06618ce1565a05650336a6dde402e158aeb16f2a
    if (senha !== confirmarSenha) {
      alert('As senhas devem conter os mesmos caracteres!')
      return
    }

    const novoUsuario = {
      nome: nome,
      sobrenome: sobrenome,
      telefone: telefone,
      cpf: cpf,
      email: email,
      senha: senha,
    }

    try {
      const response = await fetch('https://itermob-back.onrender.com/v1/itermob/inserirUsuario', {
<<<<<<< HEAD
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
=======
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
>>>>>>> 06618ce1565a05650336a6dde402e158aeb16f2a
        },
        body: JSON.stringify(novoUsuario),
      })

      const data = await response.json()

      if (response.ok) {
<<<<<<< HEAD
        alert(`Usuário cadastrado com sucesso:\nNome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: ${telefone}\nCPF: ${cpf}\nEmail: ${email}`)
=======
        setUsuarioId(data.id) 
        alert(`Usuário cadastrado com sucesso:\nNome: ${nome}\nSobrenome: ${sobrenome}\nTelefone: ${telefone}\nCPF: ${cpf}\nEmail: ${email}\nID: ${data.id}`)
>>>>>>> 06618ce1565a05650336a6dde402e158aeb16f2a
        console.log('Resposta do servidor:', data)
      } else {
        console.log('Erro no cadastro:', data)
        alert('Erro no cadastro: ' + (data.message || 'Erro desconhecido'))
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
      alert('Erro ao conectar com o servidor. Verifique sua conexão.')
    }
  }

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
  )
}

export default Cadastro
