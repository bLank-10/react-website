
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  FormSection,
  StyledTextArea,
  StyledSubmitButton
} from "./stylecontact";


const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert("Form may or may not have been submitted :)");

    e.target.reset();
  }

  return (
    <FormSection>
      <h1>Contact Us</h1>
      <section>
        <StyledForm onSubmit={handleFormSubmit}>
          <StyledLabel>
            Name:
            <StyledInput type="text "name="name" required />
          </StyledLabel>

          <StyledLabel>
            E-mail:
            <StyledInput type="email" name="email" required />
          </StyledLabel>

          <StyledLabel>
            Message:
            <StyledTextArea name="message" required />
          </StyledLabel>

          <StyledSubmitButton type="submit" value="Send" />
        </StyledForm>
      </section>
    </FormSection>
  );
}

export default Contact;