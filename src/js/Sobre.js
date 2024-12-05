import React from 'react';
import styles from '../css/Sobre.module.css';  // Usando CSS como módulo
import fusohorario from '../img/fuso-horario.png';
import horario from '../img/relogio.png';
import feedback from '../img/feedback.png';
import design from '../img/design.png';
import equipe from '../img/equipe.png';
import logo from '../img/IterLogo.png';

function ServiceItem({ imgSrc, altText, title, description }) {
  return (
    <div className={styles.serviceItem}>
      <img src={imgSrc} alt={altText} className={styles.serviceImage} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function SobreNos() {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#download">Download</a></li>
            <li className={styles.logo}><img src={logo} alt="Logo IterMob" /></li>
            <li><a href="#fac">FAC</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <h1>Sobre nós</h1>
            <p>
              Bem-vindo ao IterMob! Fundado em 2024, a IterMob nasceu com a missão de transformar sua experiência de mobilidade urbana,
              tornando o deslocamento pela cidade mais fácil e eficiente. Compreendemos os desafios do transporte público e estamos aqui
              para simplificar sua jornada.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img src={design} alt="Aplicativo IterMob" />
          </div>
        </div>

        <div className={styles.services}>
          <ServiceItem
            imgSrc={fusohorario}
            altText="Rotas e Horários"
            title="Rotas e Horários"
            description="Planeje suas viagens com precisão usando IterMob, que fornece detalhes sobre rotas e horários para um caminho mais rápido e conveniente."
          />
          <ServiceItem
            imgSrc={horario}
            altText="Informações em Tempo Real"
            title="Informações em Tempo Real"
            description="Acompanhe a localização dos ônibus em tempo real e saiba quanto tempo falta para o próximo chegar, evitando esperas desnecessárias."
          />
          <ServiceItem
            imgSrc={feedback}
            altText="Feedback"
            title="Feedback"
            description="Envie e acompanhe suas reclamações sobre o transporte público facilmente. Sua opinião é essencial para melhorar nossos serviços."
          />
        </div>
      </section>

      <div className={styles.paragraphs}>
        <h2>Nosso propósito</h2>
        <p className={styles.paragraphProposito}>
          No IterMob, buscamos fazer com que a mobilidade urbana seja uma experiência mais eficiente e conectada para todos. Nossa plataforma foi desenvolvida para oferecer informações precisas e em tempo real, ajudando você a se deslocar com mais confiança e comodidade.
        </p>

        <h2>Equipe</h2>
        <p className={styles.paragraphEquipe}>
          No IterMob, acreditamos que nosso maior ativo é o talento e a dedicação de nossa equipe. Formada por profissionais experientes e apaixonados pelo que fazem, nossa equipe é o coração de tudo o que realizamos. Cada membro traz uma combinação única de habilidades, conhecimentos e perspectivas, permitindo-nos oferecer soluções inovadoras e personalizadas para nossos clientes.
        </p>
      </div>
      
      <div className={styles.teamImage}>
        <img src={equipe} alt="Equipe IterMob" />
      </div>

      <footer className={styles.footer}>
        <span>Políticas e termos</span>
        <span>Copyright 2024 © IterMob</span>
        <span>Sobre nós</span>
      </footer>
    </div>
  );
}

export default SobreNos;
