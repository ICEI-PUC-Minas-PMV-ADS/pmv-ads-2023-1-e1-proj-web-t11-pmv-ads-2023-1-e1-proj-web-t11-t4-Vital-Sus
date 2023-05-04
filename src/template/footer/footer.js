import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './footer.css';
import ButtonVT from '../../components/button/button';
import TextFieldVT from '../../components/textField/textField';
import { Grid, Stack } from '@mui/material';

const Footer = () => {
  return (
    <footer className="footer">
      <Grid container className="footer_grid">
        <Grid item xs={12} sm={4}>
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
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>CONTATO</h3>
          <p>Email: contato@empresa.com</p>
          <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
          <p>Telefone: (11) 5555-5555</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h3>INSCREVA-SE</h3>
          <p>
            Digite seu email para receber notificações sobre nossas
            atualizações.
          </p>
          <form className="footer_form">
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
              <TextFieldVT label="Email" model="secundary"></TextFieldVT>
              <ButtonVT
                type="submit"
                model={'primary'}
                label={'Inscreva-se'}
                className="footer_button"
              ></ButtonVT>
            </Stack>
          </form>
        </Grid>
      </Grid>
      <div className="footer_credits">
        <hr />
        <p>&copy; 2023 Vital SUS. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
