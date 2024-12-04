import React from 'react'
import './Sobre.css'
import fusohorario from './fuso-horario.png'
import horario from './relogio.png'
import feedback from './feedback.png'
import design from './design.png'
import equipe from './equipe.png'
import logo from './IterLogo.png'

function SobreNos() {
  return (
    <div className="about-container">
      <header className="header">
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#download">Download</a></li>
            <li className="logo"><img src={logo} alt="Logo" /></li>
            <li><a href="#fac">FAC</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="about-section">
        <div className="about-content">
          <div className="text-content">
            <h1>Sobre nós</h1>
            <p>
              Bem-vindo ao IterMob! Fundado em 2024, a IterMob nasceu com a missão de transformar sua experiência de mobilidade urbana,
              tornando o deslocamento pela cidade mais fácil e eficiente. Compreendemos os desafios do transporte público e estamos aqui
              para simplificar sua jornada.
            </p>
          </div>
          <div className="about-image">
            <img src={design} alt="Aplicativo IterMob" />
          </div>
        </div>

        <div className="services">
          <div className="service-item">
            <img src={fusohorario} alt="Rotas e Horários" />
            <h3>Rotas e Horários</h3>
            <p>Planeje suas viagens com precisão usando IterMob, que fornece detalhes sobre rotas e horários para um caminho mais rápido e conveniente.</p>
          </div>
          <div className="service-item">
            <img src={horario} alt="Informações em Tempo Real" />
            <h3>Informações em Tempo Real</h3>
            <p>Acompanhe a localização dos ônibus em tempo real e saiba quanto tempo falta para o próximo chegar, evitando esperas desnecessárias.</p>
          </div>
          <div className="service-item">
            <img src={feedback} alt="Feedback" />
            <h3>Feedback</h3>
            <p>Envie e acompanhe suas reclamações sobre o transporte público facilmente. Sua opinião é essencial para melhorar nossos serviços.</p>
          </div>
        </div>
      </section>

      <div className='paragrafos'>
        <h2>Nosso propósito</h2>
        <p className="paragrafo-proposito">
          No IterMob, buscamos fazer com que a mobilidade urbana seja uma experiência mais eficiente e conectada para todos. Nossa plataforma foi desenvolvida para oferecer informações precisas e em tempo real, ajudando você a se deslocar com mais confiança e comodidade.
        </p>

        <h2>Equipe</h2>
        <p className="paragrafo-equipe">
          No IterMob, acreditamos que nosso maior ativo é o talento e a dedicação de nossa equipe. Formada por profissionais experientes e apaixonados pelo que fazem, nossa equipe é o coração de tudo o que realizamos. Cada membro traz uma combinação única de habilidades, conhecimentos e perspectivas, permitindo-nos oferecer soluções inovadoras e personalizadas para nossos clientes.
        </p>
      </div>
      
      <div className="team-image">
        <img src={equipe} alt="Equipe IterMob" />
      </div>

      <footer>
        <span>Políticas e termos</span>
        <span>Copyright 2024 © IterMob</span>
        <span>Sobre nós</span>
      </footer>
    </div>
  )
}

export default SobreNos


