import React from 'react';
import styles from '../css/TabelaOnibus.module.css';  // Usando CSS como módulo
import logo from '../img/IterLogo.png';

// Componente reutilizável de Tabela
function Tabela({ data }) {
  return (
    <table className={styles.busTable}>
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
        {data.map(bus => (
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
  );
}

function TabelaOnibus() {
  const buses = [
    { id: 1, name: 'Jd. Angélica', company: 'Del Rey', prefix: 'ABC-1234', status: 'Em operação' },
    { id: 2, name: 'Vila Dirce', company: 'Del Rey', prefix: 'DEF-5678', status: 'Em manutenção' },
  ];

  return (
    <div className={styles.busManagementContainer}>
      <img src={logo} alt="Logo IterMob" className={styles.logo} />

      <div className={styles.busManagementCard}>
        <h2>GERÊNCIA DE ÔNIBUS</h2>
        
        <Tabela data={buses} />
      </div>

      <footer className={styles.footer}>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default TabelaOnibus;
