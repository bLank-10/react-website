import PageHeader from "../../components/PageHeader/PageHeader";
import { StyledSection } from "./styleNotFound";

const NotFound = () => (
  <>
    <PageHeader title="Not found"/>
    
    <StyledSection>
      <article>
        <p>Sorry, we were unable to find what you were looking for.</p>
      </article>
    </StyledSection>
  </>
);

export default NotFound;