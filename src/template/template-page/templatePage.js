import Footer from '../footer/footer';
import Header from '../header/header';

function TemplatePage({ children, showButton, labelButton, showMyAccount }) {
  return (
    <>
      <Header
        showButton={showButton}
        labelButton={labelButton}
        showMyAccount={showMyAccount}
      ></Header>
      <main> {children} </main>
      <Footer />
    </>
  );
}

export default TemplatePage;
