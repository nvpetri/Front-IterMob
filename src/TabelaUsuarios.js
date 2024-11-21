import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importando Link para navegação
import './TabelaUsuarios.css';

function TabelaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Exemplo de requisição para buscar os usuários
    const fetchUsuarios = async () => {
      const response = await fetch('https://itermob-back.onrender.com/v1/itermob/usuarios');
      const data = await response.json();
      setUsuarios(data.usuarios);  // Supondo que os dados estão na chave 'usuarios'
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="usuario-management-container">
      <header>
        <h1>Usuários</h1>
      </header>

      <table className="usuario-table">
        <thead>
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
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>
                {/* Link para a página de UserDetails */}
                <Link to={`/user/${usuario.id}`} style={{ textDecoration: 'underline', color: 'black' }}>
                  {usuario.nome} {usuario.sobrenome}
                </Link>
              </td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
              <td>{usuario.endereco || 'Não disponível'}</td>
              <td><button>Ver Detalhes</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaUsuarios;
