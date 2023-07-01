import styled from "styled-components";

export const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  bottom: 0;
  background-color: #333;
  padding-top: 0.5em;


  padding-inline: 0.5em;

  @media (min-width: 48em) {
    padding-inline: 2em;
  }
  @media (min-width: 80em) {
    padding-inline: calc((100% - 80em) / 2 + 2.5em);
  }


`;

export const StyledFooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6em;
  @media (max-width: 811px) {
    gap: 1.5625em;
    flex-direction: column;
  }
  ${(props) => {
    if (props.margin)
      return `
    margin: 3.3125em 0;
    `;
  }}
  ${(props) => {
    if (props.bottomDiv)
      return `
    margin: 0;
     @media (max-width: 811px) {
    gap: 1.066875em;
  }`;
  }}
  ${(props) => {
    if (props.bottomContainer)
      return `
    padding: 2.375em 0;
    @media (max-width: 811px) {
        flex-direction: column-reverse;
    }
    `;
  }}
  ${(props) => {
    if (props.linkContainer)
      return `
    justify-content: flex-end;
    width: 100%;
    white-space: nowrap;`;
  }}
`;

export const Border = styled.div`
  height: 1px;
  background-color: #a7a7a7;
`;

export const HeaderFooterP = styled.h5`
  font-weight: 800;
  font-size: 1.3rem;
  margin: 1.15em 0;
  ${(props) => {
    if (props.smallHeader)
      return `
    font-size: 1.4rem;
    font-weight: 600;
    margin: 1.4em 0;`;
  }};
`;

export const FooterP = styled.p`
  color: #cccccc;
  margin: 0;
  ${(props) => {
    if (props.bottom)
      return `
    color: #A7A7A7;
    font-size: 0.875rem;`;
  }}
`;


export const Map = styled.div`
  // height: 888;
  width: 100%;
`;