import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Goodwill from './components/Goodwill/Goodwill';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import OurServices from './components/OurServices/OurServices';
import Team from './components/Team/Team';
import { MainStyled } from './components/ui/MainStyled';

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
        <Location />
        <Form />
      </MainStyled>
      <Footer />
    </>
  );
};

export default App;
