import styled from "styled-components";


export const StyledSection = styled.section`
  background-color: rgb(15, 19, 31);;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-block: 4em;


  padding-inline: 1em;

  @media (min-width: 48em) {
    padding-inline: 2em;
  }
  @media (min-width: 80em) {
    padding-inline: calc((100% - 80em) / 2 + 2.5em);
  }


  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(3, minmax(10em, 100%));
    gap: 4em;
    align-items: start;
    justify-content: space-between;
  }
`;

export const StyledHeading = styled.h2`
  text-align: center;

  @media (min-width: 48em) {
    font-size: 2rem;
    grid-column: 1 / 4;
  }
`;



