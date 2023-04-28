import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <img src="img/logo-white.png" alt="Logo" className="footer__logo" />
        <div className="footer__social-icons">
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer__column">
        <h3>CONTATO</h3>
        <p>Email: contato@empresa.com</p>
        <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
        <p>Telefone: (11) 5555-5555</p>
      </div>
      <div className="footer__column">
        <h3>INSCREVA-SE</h3>
        <p>
          Digite seu email para receber notificações sobre nossas atualizações.
        </p>
        <form className="footer__form">
          <input type="email" placeholder="Insira seu email" />
          <button type="submit">Inscreva-se</button>
        </form>
      </div>
      <div className="footer_credits">
        <hr />
        <p>&copy; 2023 Vital SUS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
