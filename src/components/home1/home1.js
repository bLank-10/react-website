import {
  StyledSection,
} from "./stylehome1";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "https://picsum.photos/200/300.jpg" },
  { url: "https://picsum.photos/200/301.jpg" },
  { url: "https://picsum.photos/200/302.jpg" },
  { url: "https://picsum.photos/200/303.jpg" },
  { url: "https://picsum.photos/200/304.jpg" },
  { url: "https://picsum.photos/200/305.jpg" },
  { url: "https://picsum.photos/200/306.jpg" },
];


const Home1 = () => (
  <StyledSection>
      <SimpleImageSlider
        width={1200}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
  </StyledSection>
);

export default Home1;