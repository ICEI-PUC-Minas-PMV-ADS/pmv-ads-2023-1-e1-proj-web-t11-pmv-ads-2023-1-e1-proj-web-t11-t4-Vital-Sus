import './styles.css';
import { MdHealthAndSafety } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { AiFillClockCircle } from 'react-icons/ai';
import ButtonVT from '../../components/button/button';
import TemplatePage from '../../template/template-page/templatePage';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <TemplatePage showButton={true} labelButton={'Entrar/Criar conta'}>
        <div className="container">
          <section className="main-section">
            <div className="content">
              <h1>Se sentindo mal?</h1>
              <p>
                É possível que você esteja passando por algum tipo de problema
                de saúde que ainda não tenha sido diagnosticado ou tratado
                adequadamente. Fazer uma triagem pode ajudar a identificar o
                problema e evitar que ele se agrave. Além disso, caso seja
                necessário, a triagem pode encaminhar você para o atendimento
                médico necessário.
                <br />
                <br />
                Não subestime a importância de cuidar da sua saúde. Fazer uma
                triagem pode ser o primeiro passo para garantir que você esteja
                recebendo o tratamento adequado e proteger sua saúde a longo
                prazo.
              </p>
              <ButtonVT
                model={'primary'}
                label={'Iniciar Triagem'}
                onClick={() => {}}
              ></ButtonVT>
            </div>
            <div className="image">
              <img src="img/homePage-img.png" alt="Imagem" />
            </div>
          </section>
          <section className="secondary-section">
            <h2>Benefícios de uma triagem online</h2>
            <div className="icons">
              <div className="iconArea">
                <MdHealthAndSafety className="icon" />
                <p>Prevenção e controle de doenças</p>
              </div>
              <div className="iconArea">
                <FaHandHoldingHeart className="icon" />
                <p>Maior conforto e eficiência</p>
              </div>
              <div className="iconArea">
                <AiFillClockCircle className="icon" />
                <p>Redução do tempo de espera </p>
              </div>
            </div>
          </section>
        </div>
      </TemplatePage>
    </>
  );
};

export default HomePage;
