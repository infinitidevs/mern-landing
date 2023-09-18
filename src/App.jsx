import { MainStyled } from './components/Atoms/MainStyled';
import About from './components/Templates/About/About';
import Contact from './components/Templates/Contact/Contact';
import Footer from './components/Templates/Footer/Footer';
import Form from './components/Templates/Form/Form';
import Goodwill from './components/Templates/Goodwill/Goodwill';
import Header from './components/Templates/Header/Header';
import OurServices from './components/Templates/OurServices/OurServices';
import Team from './components/Templates/Team/Team';

const App = () => {
  return (
    <>
      <Header />
      <MainStyled>
        <About />
        <Team />
        <OurServices />
        <Goodwill />
        <Contact />
        <Form />
      </MainStyled>
      <Footer />
    </>
  );
};

export default App;
