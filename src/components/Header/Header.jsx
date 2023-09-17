import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import Trademark from '../Trademark/Trademark';
import HeaderStyled from '../ui/HeaderStyled';
import { Wrapper } from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Wrapper>
        <Trademark />
        <Navbar />
      </Wrapper>
      <Hero />
    </HeaderStyled>
  );
};

export default Header;
