import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/ODDb.png';

function Footer() {
  return (
    <FooterBase>
      
        <img src={Logo} alt="ODDb" className="Logo" />
      
      <p>
        Criado por <a href="https://octanic.dev">Octanic</a> durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
