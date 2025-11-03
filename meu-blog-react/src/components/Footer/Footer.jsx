import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Gustavo Brendon. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;