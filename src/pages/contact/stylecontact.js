import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2em;
  margin-block-end: 10em;
  max-width: 70ch;

  @media (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;

    > *:nth-child(3) {
      grid-column: 1 / 3;
    }
  }
`

export const FormSection = styled.section`
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

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: .5em;
  width: 100%;
`

const formElementCSS = css`
  border: none;
  border-radius: .25em;
  padding: 1em;
  width: 100%;
  max-width: 100%;
  color: black;
`

export const StyledInput = styled.input`
  ${formElementCSS}
`

export const StyledTextArea = styled.textarea`
  ${formElementCSS}
  min-height: 20ch;
`

export const StyledSubmitButton = styled.input`
  background-color: blue;
  color: white;
  border: none;
  border-radius: .25em;
  font-size: 1rem;
  padding: .75em 2em;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`