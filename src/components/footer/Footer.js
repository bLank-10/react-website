import {
  Border,
  FooterA,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyleFooter";

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>IEEE</HeaderFooterP>
        <FooterP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </FooterP>
      </StyledFooterColumn>
      <StyledFooterRow margin>
        <StyledFooterRow>
          <StyledFooterRow linkContainer>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>map</HeaderFooterP>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Information</HeaderFooterP>
              <FooterA href="#">How it works</FooterA>
              <FooterA href="#">Download app</FooterA>
              <FooterA href="#">Developer portal</FooterA>
            </StyledFooterColumn>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>About</HeaderFooterP>
              <FooterA href="#">News and press</FooterA>
              <FooterA href="#">Personal data and collection</FooterA>
              <FooterA href="#">FAQ</FooterA>
            </StyledFooterColumn>
          </StyledFooterRow>
        </StyledFooterRow>
      </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2022 IEEE, All rights reserved.
        </FooterP>
        <StyledFooterRow bottomDiv>
          <FooterP bottom>Terms of Service</FooterP>
          <FooterP bottom>Privacy Policy</FooterP>
        </StyledFooterRow>
      </StyledFooterRow>
    </StyledFooterSection>
  );
};

export default Footer;