import { FooterStyled } from '../../Atoms/FooterStyled';
import { Text } from '../../Atoms/Text';

const Footer = () => {
  return (
    <FooterStyled>
      <Text
        $fontFamily="'Philosopher', Helvetica, sans-serif"
        $fontSize="22px"
        $fontWeight="700"
        $fontSizeMobileL="18px"
      >
        Estudio Jurídico 2023
      </Text>
    </FooterStyled>
  );
};

export default Footer;
