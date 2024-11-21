import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabelaUsuario from './TabelaUsuarios'; // Renomeado para refletir o componente correto
import UserDetails from './UserDetails'; // Importar a tela de detalhes do usuário
import './App.css';

function App() {
  return (
    <Router>
      <div className="IterMob">
        <Routes>
          <Route path="/" element={<TabelaUsuario />} /> {/* Página inicial */}
          <Route path="/user-details/:id" element={<UserDetails />} /> {/* Tela de detalhes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
