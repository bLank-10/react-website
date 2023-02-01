import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  display: grid;
  align-content: center;
  align-items: center;
  justify-items: center;
  padding-block: 10em;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const StyledContentContainer = styled.div`
  text-align: center;
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;

export const StyledHeading = styled.h2``;

export const StyledParagraph = styled.p``;

