import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { TemplateContainer, TemplateContent } from './styles';

export interface TemplatePageProps {
  children?: React.ReactElement;
  showButton?: boolean;
  labelButton: string;
  showMyAccount?: boolean;
  onClick?: () => void;
}

function TemplatePage({
  children,
  showButton,
  labelButton,
  showMyAccount,
  onClick,
}: TemplatePageProps) {
  return (
    <TemplateContainer>
      <Header
        showButton={showButton}
        labelButton={labelButton}
        showMyAccount={showMyAccount}
        onClick={onClick}
      ></Header>
      <main>{children}</main>
      <Footer />
    </TemplateContainer>
  );
}

export default TemplatePage;
