import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { TemplateContainer, TemplateContent } from './styles';

export interface TemplatePageProps {
  children?: React.ReactElement;
  showButton?: boolean;
  labelButton: string;
  showMyAccount?: boolean;
}

function TemplatePage({
  children,
  showButton,
  labelButton,
  showMyAccount,
}: TemplatePageProps) {
  return (
    <TemplateContainer>
      <Header
        showButton={showButton}
        labelButton={labelButton}
        showMyAccount={showMyAccount}
      ></Header>
      <main>
        <TemplateContent>{children}</TemplateContent>
      </main>
      <Footer />
    </TemplateContainer>
  );
}

export default TemplatePage;
