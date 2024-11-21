import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import './TabelaUsuarios.css'  
import logo from './IterLogo.png'  

function TabelaUsuario() {
  const [usuarios, setUsuarios] = useState([])
  const [erro, setErro] = useState(null)
  const [paginaAtual, setPaginaAtual] = useState(1) 
  const [usuariosPorPagina] = useState(10) 
  const navigate = useNavigate() 

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://itermob-back.onrender.com/v1/itermob/usuarios')
        if (response.ok) {
          const data = await response.json()
          setUsuarios(data.usuarios || [])
        } else {
          setErro('Erro ao buscar usuários')
        }
      } catch (error) {
        setErro('Erro de rede')
      }
    }

    fetchUsuarios()
  }, [])

  const indiceUltimoUsuario = paginaAtual * usuariosPorPagina
  const indicePrimeiroUsuario = indiceUltimoUsuario - usuariosPorPagina
  const usuariosParaExibir = usuarios.slice(indicePrimeiroUsuario, indiceUltimoUsuario)

  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina)
  }

  const totalPaginas = Math.ceil(usuarios.length / usuariosPorPagina)


  const handleUsuarioClick = (id) => {
    navigate(`/user-details/${id}`)
  }

  return (
    <div className="usuario-management-container">
      <img src={logo} alt="Logo" className="logo" />

      <div className="usuario-management-card">
        <h2>GERÊNCIA DE USUÁRIOS</h2>

        <table className="usuario-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Foto de Perfil</th>
            </tr>
          </thead>
          <tbody>
            {erro ? (
              <tr>
                <td colSpan="6">{erro}</td>
              </tr>
            ) : (
              usuariosParaExibir.length > 0 ? (
                usuariosParaExibir.map(usuario => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td 
                      className="usuario-nome" 
                      onClick={() => handleUsuarioClick(usuario.id)} // Adicionar clique no nome
                      style={{ cursor: 'pointer', color: 'blue' }}
                    >
                      {usuario.nome} {usuario.sobrenome}
                    </td>
                    <td>{usuario.email}</td>
                    <td>{usuario.endereco || 'Não disponível'}</td>
                    <td>{usuario.telefone}</td>
                    <td>
                      {usuario.foto_perfil ? (
                        <img src={usuario.foto_perfil} alt={`${usuario.nome} ${usuario.sobrenome}`} className="foto-perfil" />
                      ) : (
                        'Sem foto'
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Nenhum usuário encontrado.</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div className="pagination">
          <button 
            onClick={() => mudarPagina(paginaAtual - 1)} 
            disabled={paginaAtual === 1}>
            Anterior
          </button>
          <span>Página {paginaAtual} de {totalPaginas}</span>
          <button 
            onClick={() => mudarPagina(paginaAtual + 1)} 
            disabled={paginaAtual === totalPaginas}>
            Próxima
          </button>
        </div>
      </div>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  )
}

export default TabelaUsuario

