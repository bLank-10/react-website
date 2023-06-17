import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import aos from 'aos';
import './home2.css';

function Home2() {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="Styledhome2">
      <div className="App">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('ABOUT US').pauseFor(1000).deleteAll().start();
          }}
        />
      </div>

      <div className="content" data-aos="fade-up">
        <p>
          IEEE FCRIT stands for the Institute of Electrical and Electronics Engineers (IEEE) Fr. Conceicao Rodrigues
          Institute of Technology (FCRIT). It is an engineering college located in Navi Mumbai, India, and is affiliated
          with the University of Mumbai. The IEEE FCRIT student branch is a chapter of IEEE, which is the world's largest
          technical professional organization dedicated to advancing technology for the benefit of humanity. The student
          branch is run by the students of the college, and it aims to provide a platform for students to enhance their
          technical skills and knowledge.
        </p>

        <p>
          IEEE FCRIT student branch is a chapter of IEEE, which is the world's largest technical professional organization
          dedicated to advancing technology for the benefit of humanity. The student branch is run by the students of the
          college, and it aims to provide a platform for students to enhance their technical skills and knowledge. The IEEE
          FCRIT student branch organizes various technical and non-technical events throughout the year, including
          workshops, seminars, webinars, and competitions. These events provide opportunities for students to learn new
          skills, interact with experts in their field, and showcase their talents.
        </p>

        <p>
          Overall, IEEE FCRIT is a renowned institution for engineering education in India, and its student branch provides
          a valuable platform for students to develop their skills and pursue their interests in the field of engineering.
          IEEE FCRIT has made significant contributions to the field of science and technology and has provided valuable
          opportunities for students to develop their skills and make a positive impact on society.
        </p>
      </div>
    </div>
  );
}

export default Home2;
