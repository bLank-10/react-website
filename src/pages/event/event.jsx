
import "./event.css"
import Typewriter from 'typewriter-effect';


function Event() {
  
  return (
    <div class="EventSection">
      <div className="App">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('EVENTS').pauseFor(1000).deleteAll().start();
          }}
        />
      </div>

    <h2 >Technical Events</h2>

    <div class="grid-container">
    <div class="grid-item">
    <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e1">
          <div class="image-container">
              <img src={require('./images/STEM.jpeg')} alt="img"/>
            </div>
      <div className="card-name">
        <h3>STEM Education Workshop</h3>
      </div>
          </a>
        </button>
      </div>
      </div>
    </div>


   <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e2" >
          <div class="image-container">
              <img src={require('./images/Resume Building.jpeg')} alt="img"/>
            </div>
      <div className="card-name">
        <h3>Resume Building Seminar</h3>
      </div>
          </a>
        </button>
      </div>
      </div>
   </div>


   <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e3">
          <div class="image-container">
              <img src={require('./images/Republic Day.jpeg')} alt="img"/>
            </div>
      <div className="card-name">
        <h3>Republic Day Quiz</h3>
      </div>
          </a>
        </button>
      </div>
      </div>  
   </div>
 
   <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e4">
          <div class="image-container">
              <img src={require('./images/Technical Quiz.jpeg')} alt="img"/>
            </div>

      <div className="card-name">
        <h3>Technical Quiz Competition</h3>
      </div>
          </a>
        </button>
      </div>
      </div>
   </div>


    </div>







    <h2>Social Events</h2>

   <div class="grid-container">
   <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e5" >
          <div class="image-container">
              <img src={require('./images/Musi - Matics.jpeg')} alt="img"/>
            </div>
      <div className="card-name">
        <h3>Musi-Matics</h3>
      </div>
          </a>
        </button>
      </div>
      </div>
   </div>



   <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e6">
          <div class="image-container">
              <img src={require('./images/Sync Sound.jpeg')} alt="img"/>
            </div>
      <div className="card-name">
        <h3>Sync Sound</h3>
      </div>
          </a>
        </button>
      </div>
      </div>
   </div>



   {/* <div class="grid-item">
   <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e7">
          <div class="image-container">
              <img src="https://avatars.githubusercontent.com/u/71311777?v=4" alt="img"/>
            </div>
      <div className="card-date">
        <p>Date of Event</p>
      </div>
      <div className="card-type">
        <p>Mode of Event</p>
      </div>
      <div className="card-name">
        <p>Event Name</p>
      </div>
          </a>
        </button>
      </div>
      </div>
   </div> */}

    </div>













      
    </div>
  )
}

export default Event;

