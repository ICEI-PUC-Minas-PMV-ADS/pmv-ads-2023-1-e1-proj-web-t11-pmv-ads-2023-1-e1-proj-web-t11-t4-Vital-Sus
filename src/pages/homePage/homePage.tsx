import React from 'react';
import { MdHealthAndSafety } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import ButtonVT from '../../components/button/button';
import TemplatePage from '../../template/template-page/templatePage';
import { Stack, useMediaQuery } from '@mui/material';
import { maxScreen, retrieveDisplayTablet } from '../../styles/breakpoints';
import {
  Container,
  ContainerInfo,
  ContainerTriagem,
  Description,
  Image,
  Item,
  TypographyHome,
} from './styles';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const displayDesktop = useMediaQuery(retrieveDisplayTablet());

  const navigate = useNavigate();

  const textsHome = {
    sectionTriagem: {
      title: 'Se sentindo mal?',
      description1:
        'É possível que você esteja passando por algum tipo de problema de saúde que ainda não tenha sido diagnosticado ou tratado adequadamente. Fazer uma triagem pode ajudar a identificar o problema e evitar que ele se agrave. Além disso, caso seja necessário, a triagem pode encaminhar você para o atendimento médico necessário.',
      description2:
        'Não subestime a importância de cuidar da sua saúde. Fazer uma triagem pode ser o primeiro passo para garantir que você esteja recebendo o tratamento adequado e proteger sua saúde a longo prazo.',
      labelButton: 'Iniciar Triagem',
    },
    sectionInfo: {
      title: 'Benefícios de uma triagem online',
      description: {
        prevention: 'Prevenção e controle de doenças',
        confort: 'Maior conforto e eficiência',
        time: 'Redução do tempo de espera',
      },
    },
  };
  const desktopHomePage = () => {
    return (
      <>
        <ContainerTriagem>
          <Stack
            direction="row"
            spacing={5}
            alignItems={'center'}
            justifyContent={'center'}
            style={{
              maxWidth: `${maxScreen}px`,
              margin: '0 auto',
              padding: '2rem 0',
            }}
          >
            <Item>
              <TypographyHome variant="h3">
                {textsHome.sectionTriagem.title}
              </TypographyHome>
              <Description>{textsHome.sectionTriagem.description1}</Description>
              <Description style={{ fontWeight: 'bold' }}>
                {textsHome.sectionTriagem.description2}
              </Description>
              <ButtonVT
                label={textsHome.sectionTriagem.labelButton}
                model="primary"
                onClick={() => navigate('/cadastro')}
              ></ButtonVT>
            </Item>
            <Item>
              <Image src="img/homePage-img.png" alt="Imagem" />
            </Item>
          </Stack>
        </ContainerTriagem>
        <ContainerInfo>
          <TypographyHome variant="h3" textAlign={'center'} padding={'2rem 0'}>
            {textsHome.sectionInfo.title}
          </TypographyHome>
          <Stack
            direction="row"
            spacing={5}
            alignItems={'center'}
            justifyContent={'space-around'}
            style={{
              maxWidth: `${maxScreen}px`,
              margin: '0 auto',
              padding: '2rem 0',
            }}
          >
            <Item>
              <MdHealthAndSafety className="icon" />
              <Description>
                {textsHome.sectionInfo.description.prevention}
              </Description>
            </Item>
            <Item>
              <FaHandHoldingHeart className="icon" />
              <Description>
                {textsHome.sectionInfo.description.confort}
              </Description>
            </Item>
            <Item>
              <AiFillClockCircle className="icon" />
              <Description>
                {textsHome.sectionInfo.description.time}
              </Description>
            </Item>
          </Stack>
        </ContainerInfo>
      </>
    );
  };

  const mobileHomePage = () => {
    return (
      <>
        <ContainerTriagem>
          <Stack
            direction="column"
            spacing={5}
            alignItems={'center'}
            justifyContent={'center'}
            style={{ margin: '0 auto', padding: '2rem 0' }}
          >
            <Item>
              <TypographyHome variant="h3">
                {textsHome.sectionTriagem.title}
              </TypographyHome>
              <Description>{textsHome.sectionTriagem.description1}</Description>
              <Description style={{ fontWeight: 'bold' }}>
                {textsHome.sectionTriagem.description2}
              </Description>
              <ButtonVT
                label={textsHome.sectionTriagem.labelButton}
                model="primary"
                onClick={() => navigate('/cadastro')}
              ></ButtonVT>
            </Item>
          </Stack>
        </ContainerTriagem>
        <ContainerInfo>
          <TypographyHome
            variant="h3"
            textAlign={'center'}
            padding={'2rem 1rem'}
          >
            {textsHome.sectionInfo.title}
          </TypographyHome>
          <Stack
            direction="column"
            spacing={5}
            alignItems={'center'}
            justifyContent={'space-around'}
            style={{
              maxWidth: `${maxScreen}px`,
              margin: '0 auto',
              padding: '2rem 0',
            }}
          >
            <Item>
              <MdHealthAndSafety className="icon" />
              <Description>
                {textsHome.sectionInfo.description.prevention}
              </Description>
            </Item>
            <Item>
              <FaHandHoldingHeart className="icon" />
              <Description>
                {textsHome.sectionInfo.description.confort}
              </Description>
            </Item>
            <Item>
              <AiFillClockCircle className="icon" />
              <Description>
                {textsHome.sectionInfo.description.time}
              </Description>
            </Item>
          </Stack>
        </ContainerInfo>
      </>
    );
  };

  return (
    <TemplatePage showButton={true} labelButton={'Entrar/Criar conta'}>
      <Container>
        {displayDesktop ? desktopHomePage() : mobileHomePage()}
      </Container>
    </TemplatePage>
  );
};

export default HomePage;
