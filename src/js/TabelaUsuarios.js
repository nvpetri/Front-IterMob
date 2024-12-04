import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TabelaUsuarios.css';
import logo from './IterLogo.png'

function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5; 

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await fetch('https://itermob-back.onrender.com/v1/itermob/usuarios');
      const data = await response.json();
      setUsuarios(data.usuarios || []); 
    };

    fetchUsuarios();
  }, []);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const usuariosPaginados = usuarios.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(usuarios.length / itensPorPagina);

  return (
    <div className="usuario-management-container">
      <header>
      <img src={logo} alt="Logo" className="logo" />
      </header>

      <table className="usuario-table">
        <thead>
          <tr>
            <th colSpan="6" style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              Usuários
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {usuariosPaginados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>
                <Link to={`/user/${usuario.id}`} className="usuario-link">
                  {usuario.nome} {usuario.sobrenome}
                </Link>
              </td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
             
              <td>
                <button>Ver Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginação */}
      <div className="pagination">
        <button
          onClick={() => setPaginaAtual(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default TabelaUsuarios;
