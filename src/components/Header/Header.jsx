import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import HeaderStyled from '../ui/HeaderStyled';
import { Trademark, Wrapper } from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <Trademark>
          <img src="/src/assets/header/logo.png" alt="Logo" />
          <h2>Estudio Jurídico</h2>
        </Trademark>
        <Navbar />
      </Wrapper>
      <Hero />
    </HeaderStyled>
  );
};

export default Header;
