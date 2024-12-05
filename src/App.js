import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import Home from './js/Telahome';
import Escolhas from './js/Escolhas';
import TabelaUsuarios from './js/TabelaUsuarios';
import UserDetails from './js/UserDetails';
import Cadastro from './js/Cadastro';
import Download from './js/Download';
import FacCenter from './js/FacCenter';
import Login from './js/Login';
import Sobre from './js/Sobre';
import TabelaOnibus from './js/TabelaOnibus';
import './css/App.module.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Escolhas />} />
          <Route path="/escolhas" element={<Escolhas />} />
          <Route path="/usuarios" element={<TabelaUsuarios />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/download" element={<Download />} />
          <Route path="/faccenter" element={<FacCenter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tabela-onibus" element={<TabelaOnibus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
