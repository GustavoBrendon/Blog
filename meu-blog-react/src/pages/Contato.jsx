import React from 'react';
import './Contato.css'; 

function Contato() {
  return (
    <div className="page-container contato-page">
      <h1>Fale Comigo</h1>
      <p>
        Adoraria ouvir de si! Seja para feedback, perguntas ou apenas para dizer "olá", 
        sinta-se à vontade para me contactar através dos canais abaixo.
      </p>

      <div className="contact-methods">
        <a 
          href="mailto:guhgomesyt@gmail.com" 
          className="contact-card email"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <strong>Email</strong>
          <span>guhgomesyt@gmail.com</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/gustavo-brendon-dev/" 
          className="contact-card linkedin"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <strong>LinkedIn</strong>
          <span>/in/gustavo-brendon-dev</span>
        </a>
        
        <a 
          href="https://github.com/GustavoBrendon" 
          className="contact-card github"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
          <span>/GustavoBrendon</span>
        </a>

      </div>
    </div>
  );
}

export default Contato;