import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para capturar o ID da URL
import './UserDetails.css';
import logo from './IterLogo.png';

function UserDetails() {
  const { id } = useParams(); // Captura o ID da URL
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`https://itermob-back.onrender.com/v1/itermob/usuario/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUsuario(data.usuario); // Acessando a estrutura de 'usuario' na resposta
        } else {
          setErro('Erro ao carregar dados do usuário.');
        }
      } catch (error) {
        setErro('Erro de rede.');
      }
    };

    fetchUsuario();
  }, [id]);

  if (erro) {
    return <div>{erro}</div>;
  }

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="user-details-container">
      <img src={logo} alt="Logo" className="logo" />

      <div className="user-details-card">
        <div className="user-icon">
          <img src={usuario.foto_perfil || "https://via.placeholder.com/60"} alt="User Icon" className="user-image" />
        </div>
        <div className="user-info">
          <p><strong>Nome:</strong> {usuario.nome} {usuario.sobrenome}</p>
          <p><strong>E-mail:</strong> {usuario.email}</p>
          <p><strong>Endereço:</strong> {usuario.endereco || 'Não disponível'}</p>
          <p><strong>Telefone:</strong> {usuario.telefone}</p>
        </div>
      </div>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default UserDetails;
