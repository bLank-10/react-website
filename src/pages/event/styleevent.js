import styled from "styled-components";

export const EventP = styled.p`
  font-size: 1rem;
  margin-bottom: 1em;
  max-width: 75ch;
`;

export const EventSection = styled.section`
  margin-bottom: 40.4375em;


  padding-inline: 1em;

  @media (min-width: 48em) {
    padding-inline: 2em;
  }
  @media (min-width: 80em) {
    padding-inline: calc((100% - 80em) / 2 + 2.5em);
  }

  h1{
    margin: 0;
    padding: 100px 20px;
    font-size: 5rem
  }

`;
