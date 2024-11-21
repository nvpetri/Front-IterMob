import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Escolhas from './Escolhas';  
import TabelaUsuarios from './TabelaUsuarios'; 
import UserDetails from './UserDetails';  
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