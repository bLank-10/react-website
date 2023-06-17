
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  require('./images/1.jpeg'),
  require('./images/2.jpeg'),
  require('./images/7.jpeg'),
  require('./images/3.jpeg'),
  require('./images/8.jpg'),




];


function Home1() {
  return (

  <center>
        <SimpleImageSlider
        width={'80%'}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
  </center>
  )
}

export default Home1;