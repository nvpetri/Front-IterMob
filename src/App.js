import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Escolhas from './Escolhas';  // Página com o botão 'usuario'
import TabelaUsuarios from './TabelaUsuarios';  // Página com tabela de usuários
import UserDetails from './UserDetails';  // Página de detalhes do usuário
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Escolhas />} />  {/* Página inicial com botão 'usuario' */}
          <Route path="/usuarios" element={<TabelaUsuarios />} />  {/* Página com tabela de usuários */}
          <Route path="/user/:id" element={<UserDetails />} />  {/* Página com detalhes do usuário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
