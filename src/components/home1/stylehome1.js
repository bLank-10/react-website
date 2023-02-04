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

export const SimpleImageSlider = styled.div`
  text-align: center;
  position: center
  
  @media (min-width: 48em) {
    grid-column: 1 / 8;
    text-align: start;
  }
`;
