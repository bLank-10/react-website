import React, { useEffect } from 'react';
import './home3.css';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import aos from 'aos';

function Home3() {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="Styledhome3">
      <div className="App">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('UPCOMING EVENTS').pauseFor(1000).deleteAll().start();
          }}
        />
      </div>

      <div className="wrapper eventMain" data-aos="fade-up">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://i.postimg.cc/Y0mN3y6R/ie.jpg" alt="" width="340" height={400} />
            </div>
          </div>
        </div>
        <div className="text-box">
          <h3>Event 1 Name</h3>
          <p>
          Join IEEE FCRIT SB for an online PELS Day Event on June 24, 2023, at 1:30 pm with keynote speaker Mr. Arnab Roy. Gain insights into ethical issues and their impact on personal and professional life.Learn how to apply this knowledge to achieve greater success. Register now to reserve your spot and learn from an industry expert!
          </p>
        </div>
      </div>

      <div className="wrapper eventMain" data-aos="fade-up">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" alt="" width="350" />
            </div>
          </div>
        </div>
        <div className="text-box">
          <h3>Event 2 Name</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim neque a omnis veniam ducimus possimus cumque earum inventore incidunt fugit doloribus quibusdam delectus quos quasi temporibus culpa, et, ab consequuntur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur maxime ratione atque facere iure recusandae veniam et, eveniet impedit ipsa cumque, esse in omnis expedita vitae tempore? Eveniet, mollitia doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis dicta nam sed ea? Est doloremque aliquid necessitatibus? Consectetur odit unde harum odio! Fugit nam quam consectetur cupiditate, aliquam soluta!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home3;
