import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/TabelaUsuarios.module.css';
import logo from '../img/IterLogo.png';

function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro
  const itensPorPagina = 5;

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://itermob-back.onrender.com/v1/itermob/usuarios');
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados.');
        }
        const data = await response.json();
        setUsuarios(data.usuarios || []);
      } catch (error) {
        setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  const indiceInicial = (paginaAtual - 1) * itensPorPagina;
  const indiceFinal = indiceInicial + itensPorPagina;
  const usuariosPaginados = usuarios.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(usuarios.length / itensPorPagina);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="usuario-management-container">
      <header>
        <img src={logo} alt="Logo IterMob" className="logo" />
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
              <td>{usuario.endereco}</td>
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
          className="pagination-button"
        >
          Anterior
        </button>
        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={paginaAtual === totalPaginas}
          className="pagination-button"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default TabelaUsuarios;
