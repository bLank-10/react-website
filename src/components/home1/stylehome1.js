import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: grid;
  align-content: center;
  justify-items: center;

  @media (min-width: 48em) {
    grid-template-columns: repeat(12, 1fr);
    min-height: 100vh;
  }
`;

export const StyledContentContainer = styled.div`
  text-align: center;
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 2rem;

  @media (min-width: 48em) {
    font-size: 3rem;
  }
`;

export const StyledParagraph = styled.p``;
