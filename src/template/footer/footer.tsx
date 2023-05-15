import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  Container,
  ContainerBaseFooter,
  Content,
  Credits,
  HorizontalDivider,
  ImageLogo,
  LinkIcons,
  TypographFooter,
} from './styles';
import { retrieveDisplayDesktop } from '../../styles/breakpoints';
import { Grid, Link, Stack, useMediaQuery } from '@mui/material';
import TextFieldVT from '../../components/textField/textField';
import ButtonVT from '../../components/button/button';

const Footer = () => {
  const displayDesktop = useMediaQuery(retrieveDisplayDesktop());

  const textsFooter = {
    contato: {
      label: 'CONTATO',
      email: 'Email: contato@empresa.com',
      endereco: 'Endereço: Rua Exemplo, 123 - São Paulo/SP',
      tel: 'Telefone: (11) 5555-5555',
    },
    inscricao: {
      label: 'INSCREVA-SE',
      paragraph:
        'Digite seu email para receber notificações sobre nossas atualizações.',
    },
  };

  const HeaderFooter = () => {
    return (
      <>
        <ImageLogo src='img/logo-white.png' alt='Logo'></ImageLogo>
        <LinkIcons>
          <Link href='https://www.facebook.com'>
            <FaFacebook />
          </Link>
          <Link href='https://www.twitter.com'>
            <FaTwitter />
          </Link>
          <Link href='https://www.linkedin.com'>
            <FaLinkedin />
          </Link>
        </LinkIcons>
      </>
    );
  };

  const InfoFooter = () => {
    return (
      <>
        <Grid xs={4} sm={4} md={4}>
          <TypographFooter
            variant='h3'
            style={{ fontWeight: 700, paddingBottom: '0.5rem' }}
          >
            {textsFooter.contato.label}
          </TypographFooter>
          <TypographFooter paragraph>
            {textsFooter.contato.email}
          </TypographFooter>
          <TypographFooter paragraph>
            {textsFooter.contato.endereco}
          </TypographFooter>
          <TypographFooter paragraph>{textsFooter.contato.tel}</TypographFooter>
        </Grid>
        <Grid xs={4} sm={4} md={4}>
          <TypographFooter
            variant='h3'
            style={{ fontWeight: 700, paddingBottom: '0.5rem' }}
          >
            {textsFooter.inscricao.label}
          </TypographFooter>
          <TypographFooter paragraph>
            {textsFooter.inscricao.paragraph}
          </TypographFooter>
          <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
            <TextFieldVT label='Email' model='secundary'></TextFieldVT>
            <ButtonVT model={'primary'} label={'Inscreva-se'}></ButtonVT>
          </Stack>
        </Grid>
      </>
    );
  };

  const desktopFooter = () => {
    return (
      <div style={{ display: 'contents' }}>
        <Grid container style={{ justifyContent: 'space-between' }}>
          <Grid xs={4} sm={4} md={4}>
            <HeaderFooter />
          </Grid>
          <InfoFooter />
        </Grid>
      </div>
    );
  };

  const mobileFooter = () => {
    return (
      <ContainerBaseFooter>
        <HeaderFooter />
        <HorizontalDivider />
        <InfoFooter />
      </ContainerBaseFooter>
    );
  };

  return (
    <footer
      style={{
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
        <Content>{displayDesktop ? desktopFooter() : mobileFooter()}</Content>
        <HorizontalDivider />
        <Credits>&copy; 2023 Vital SUS. Todos os direitos reservados.</Credits>
      </Container>
    </footer>
  );
};

export default Footer;
