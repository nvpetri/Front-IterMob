import React from 'react';
import styles from '../css/FacCenter.module.css';  // Importando o CSS como módulo
import logo from '../img/IterLogo.png';
import seta from '../img/seta.png';
import PerfilRaica from '../img/PerfilRaica.png';
import PerfilVirginia from '../img/PerfilVirginia.png';
import PerfilCarol from '../img/PerfilCarol.png';
import PerfilBianca from '../img/PerfilBianca.png';
import PerfilPetri from '../img/PerfilPetri.png';
import PerfilNeyl from '../img/PerfilNey.png';

function FacCenter() {
  return (
    <div className={styles.facContainer}>
      <header>
        <div className={styles.headerLeft}>
          <a href="#voltar">
            <img src={seta} alt="Seta para voltar" className={styles.setaIcon} />
            Central do FAC
          </a>
        </div>
        <div className={styles.headerCenter}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </header>

      <section className={styles.facSections}>
        <div className={styles.facCard}>
          <h2>Reclamações</h2>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilRaica} alt="Perfil de Raica Martinez" className={styles.profilePic} />
              <h3>Raica Martinez</h3>
              <h4>A11</h4>
            </div>
            <p>Linha muito demorada, poderiam ter mais ônibus para rodar.</p>
            <button>RESPONDER</button>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilVirginia} alt="Perfil de Virgínia Fonseca" className={styles.profilePic} />
              <h3>Virgínia Fonseca</h3>
              <h4>T246</h4>
            </div>
            <p>Falta de limpeza nos ônibus e janelas estavam emperradas.</p>
            <button>RESPONDER</button>
          </div>
        </div>

        <div className={styles.facCard}>
          <h2>Feedbacks</h2>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilCarol} alt="Perfil de Carolina Neponucena" className={styles.profilePic} />
              <h3>Carolina Neponucena</h3>
            </div>
            <p>A musculatura que mantém a espera entre o clima e horários precisa ser melhorada!</p>
            <button>RESPONDER</button>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilBianca} alt="Perfil de Bianca Soares" className={styles.profilePic} />
              <h3>Bianca Soares</h3>
            </div>
            <p>App é fácil de acesso e isso facilita a mobilidade</p>
            <button>RESPONDER</button>
          </div>
        </div>

        <div className={styles.facCard}>
          <h2>Itens Perdidos</h2>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilPetri} alt="Perfil de Nicolas Petri" className={styles.profilePic} />
              <h3>Nicolas Petri</h3>
              <h4>25</h4>
            </div>
            <p>Esqueci de retirar minha lancheira em uma viagem no 25 - provavelmente está entre os bancos da frente.</p>
            <button>RESPONDER</button>
          </div>
          <div className={styles.cardItem}>
            <div className={styles.profileContainer}>
              <img src={PerfilNeyl} alt="Perfil de Neyma" className={styles.profilePic} />
              <h3>Neymar Jr.</h3>
              <h4>035</h4>
            </div>
            <p>Esqueci minha mochila dentro do ônibus UBS - Vinha no horário de tarde umas 16h.</p>
            <button>RESPONDER</button>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright 2024 © IterMob</p>
      </footer>
    </div>
  );
}

export default FacCenter;
