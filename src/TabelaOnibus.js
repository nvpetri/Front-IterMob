import React from 'react';
import './TabelaOnibus.css';  
import logo from './IterLogo.png';  

function TabelaOnibus() {
  const buses = [
    { id: 1, name: 'Jd. Angélica', company: 'Del Rey', prefix: 'ABC-1234', status: 'Em operação' },
    { id: 2, name: 'Vila Dirce', company: 'Del Rey', prefix: 'DEF-5678', status: 'Em manutenção' },
  ];

  return (
    <div className="bus-management-container">
      <img src={logo} alt="Logo" className="logo" />     

      <div className="bus-management-card">
        <h2>GEREÊNCIA DE ÔNIBUS</h2>
        
        <table className="bus-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Empresa</th>
              <th>Prefixo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {buses.map(bus => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.name}</td>
                <td>{bus.company}</td>
                <td>{bus.prefix}</td>
                <td>{bus.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default TabelaOnibus;

