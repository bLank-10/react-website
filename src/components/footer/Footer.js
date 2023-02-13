import {
  Border,
  Map,
  FooterP,
  HeaderFooterP,
  StyledFooterColumn,
  StyledFooterRow,
  StyledFooterSection,
} from "./StyleFooter";

import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <StyledFooterSection>
      <StyledFooterColumn>
        <HeaderFooterP>IEEE FCRIT</HeaderFooterP>
        <FooterP>
        Become a member <br></br><br></br>
        Get notified with the latest updates in the technical world, articles, seminars and workshops.
        </FooterP>
        </StyledFooterColumn>
     
      <StyledFooterRow margin>
            <Map>
              <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.732104374876!2d72.98951024915728!3d19.075512687024826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cae0d8c5ab%3A0xbbf4481d662ca2d8!2sFr.%20Conceicao%20Rodrigues%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1675516563701!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </Map>
            <StyledFooterColumn>
              <HeaderFooterP smallHeader>Fr. C. Rodrigues Institute of Technology, Vashi</HeaderFooterP>
              <FooterP>Agnel Technical Education Complex,Sector 9-A,</FooterP>
              <FooterP>Vashi, Navi Mumbai,</FooterP>
              <FooterP>Maharashtra, India PIN - 400703</FooterP>
              <FooterP>Contact No:  (022) 27771000 , 27662949, 27660619 </FooterP>
            </StyledFooterColumn>
        </StyledFooterRow>
      <Border />
      <StyledFooterRow bottomContainer>
        <FooterP bottom>
          Copyright 2023 IEEE FCRIT, All rights reserved.
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