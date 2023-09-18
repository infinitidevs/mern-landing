import HeaderStyled from '../../Atoms/HeaderStyled';
import Hero from '../../Molecules/Hero/Hero';
import Trademark from '../../Molecules/Trademark/Trademark';
import Navbar from '../../Organisms/Navbar/Navbar';
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
