import React from 'react';
import Gustavo from '../assets/Gustavo.png'
import './Sobre.css'; 

function Sobre() {
  return (
    <div className="page-container sobre-page">
      <h1>Sobre Mim</h1>
      
      <div className="sobre-content">
        <img src={Gustavo} alt="Foto do Gustavo" className='profile-pic'/>
        
        <div className="bio-text">
          <p>
            Olá! Eu sou Gustavo Brendon, o criador deste blog. 
          </p>
          <p>
            A minha jornada no mundo do desenvolvimento começou em 2022 e, desde então, 
            tenho-me dedicado a aprender e a crescer na área. Este blog é um reflexo 
            dessa jornada, onde documento os desafios que enfrento e as soluções que encontro.
          </p>
          <p>
            Aqui você encontrará artigos sobre Tecnologia, Desenvolvimento
            e Programação. O meu objetivo é criar conteúdo útil e prático 
            que possa ajudar outros que estão no mesmo caminho.
          </p>
          <p>
            Obrigado pela visita!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;