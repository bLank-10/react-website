
import "./event.css"


function Event() {
  return (
    <div class="EventSection">
    <h1 align='center'>Event</h1>
    {/* <p>Click to know more.</p> */}

    <h2>Technical Events</h2>

    <div class="grid-container">
    <div class="grid-item">
    <div class="card-container">
      <div className="card-btn">
        <button>
          <a href="#/e1">
          <div class="image-container">
              <img src={require('./images/STEM.jpeg')} alt="img"/>
              {/* <img src="https://avatars.githubusercontent.com/u/71311777?v=4" alt="img"/> */}
            </div>
      <div className="card-name">
        <p>STEM Education Workshop</p>
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
        <p>Resume Building Seminar</p>
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
        <p>Republic Day Quiz</p>
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
        <p>Technical Quiz Competition</p>
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
        <p>Musi-Matics</p>
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
        <p>Sync Sound</p>
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

