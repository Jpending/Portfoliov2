import React from 'react';
import './App.css';

function App() {

  const headerStyle = {
    "background-image": "url('https://image.freepik.com/free-photo/beautiful-sea-ocean-water-wave-surface_74190-6827.jpg')"
  }
  return (
    <div className="App grid grid-cols-1 gap-2">
      <header className="bg-fixed sm:bg-local md:bg-scroll lg:bg-local xl:bg-fixed  h-24 " style={headerStyle} id="navbar">
        <nav className="flex items-center justify-between flex-wrap  p-6  bg-gradient-to-r from-blue-400 to-transparent via-pink-300"  >
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">John D Pendergast</span>
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div id="menu" className="text-sm lg:flex-grow">
              <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">About</a>
              <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Services</a>
              <a href="#portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Portfolio</a>
              <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="grid grid-cols-1 gap-2">
        {/* <!-- about me section --> */}
        <section id="about" className="grid grid-flow-col grid-cols-1 grid-rows-5 gap-2" >
          <div >
            <div class="item">
              <h2 class="subtitle"> A little bit about me...</h2>
              <p class="hardtosee">If you couldn't tell by now, my name is <em>John D Pendergast</em>.<br />
                I am a software engineer living in Sayreville, NJ with my partner and our amazing dog, Ninja. I have an
                extensive work history in residential and commercial construction, as well as renovation project management. I
                believe this gives my code the advantage of having aspects of being built like a home; that is, from the
            foundations to the finishing touches.</p>
            </div>

            <hr />
            {/* <!-- why i like development --> */}
            <div class="item">
              <h2 class="subtitle">Why web development?</h2>
              <p class="hardtosee"> Well, I've always been interested in the internet since we had our first dial-up connection. Everything about
              the
              internet endlessly fascinates me; from the free sharing of information and entertainment, to video games with
              friends,
              or
              the bottomless YouTube holes that can eat up an entire day's productivity! However the collaborative nature of the
              internet is
              what really excites me, I love talking with others, and working together to create something big or small. I
              believe
          that even a small group of dedicated individuals can accomplish almost anything online!</p>
            </div>
          </div>
          <hr />
          {/* <!-- non work interests --> */}
          <h2 class="subtitle">Interests Outside of Development</h2>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-0">

            <div class="item">
              <p>Cooking, mainly BBQ.</p>
              <img src={require("./images/smoker.jpg")} alt="A smoker for making BBQ" width="400" />
            </div>
            <div class="item">
              <p>Video games, usually World of Warcraft.</p>
              <img src={require('./images/wow.jpg')} alt="World of Warcraft Logo" width="400" />
            </div>
            <div class="item">
              <p>My insanely photogenic dog, Ninja.</p>
              <img src={require("./images/ninja.jpg")} alt="The World's greatestdog." width="400" />
            </div>
          </div>

        </section>
        <br />
        <hr />
        <section id="services">
          <h2>SERVICES I OFFER</h2>
          <div class="group">

            <div class="item">
              <p>React.js</p>
            </div>
            <div class="item">
              <p>Node.js</p>
            </div>
            <div class="item">
              <p>PostgreSQL</p>
            </div>
            <div class="item">
              <p>Tailwind.css</p>
            </div>
          </div>
        </section>

        <br />
        <hr />
        <section id="portfolio">
          <h2>Project Title</h2>
          <div class="group project">

            <div class="item">
              <p>Project Description</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem risus, auctor ut est at, posuere semper
                ipsum.Ut quis augue id nisl auctor tempor sit amet id dui. Vivamus at auctor libero, non interdum libero.
                Donec
            pulvinar viverra nisl lacinia tempus.</p>
            </div>
            <hr />
            <div class="item">
              <p>What it does</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem risus, auctor ut est at, posuere semper
                ipsum.Ut quis augue id nisl auctor tempor sit amet id dui. Vivamus at auctor libero, non interdum libero.
                Donec
            pulvinar viverra nisl lacinia tempus.</p>
            </div>
            <hr />
            <div class="item">
              <p>Who it's for</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem risus, auctor ut est at, posuere semper
                ipsum.Ut quis augue id nisl auctor tempor sit amet id dui. Vivamus at auctor libero, non interdum libero.
                Donec
            pulvinar viverra nisl lacinia tempus.</p>
            </div>
            <hr />
            <div class="item">
              <p>Why I Built it</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem risus, auctor ut est at, posuere semper
                ipsum.Ut quis augue id nisl auctor tempor sit amet id dui. Vivamus at auctor libero, non interdum libero.
                Donec
            pulvinar viverra nisl lacinia tempus.</p>
            </div>
            <hr />
            <div class="item">
              <p>Skills Used</p>
              <p>
                So far I have used;</p>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>PostgreSQL</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <hr />
          <div class="group">
            <div class="item">
              <a href="https://github.com/Jpending/JURPS" target="_blank" rel="noopener noreferrer" class="projlink">JURPS:
          </a>
              <p>An app where users can go to in order to create custom characters in custom races, classes, time periods, or what have you.
              <br />
              Once on the site you can log in using the credentials dunder and mifflin.
              <br />
              From there feel free to poke around, and make something, delete something or edit something.
              <br />
              Registration for users is also working, so you can try that if you like.</p>
            </div>
            <hr />
            <div class="item">
              <a href="https://github.com/Jpending/Lucky-Pick" target="_blank" rel="noopener noreferrer" class="projlink">Lucky Pick
          </a>
              <p>This app allows users to save their "lucky" numbers and generate random numbers to be used in lottery games:
              <br />
              Currently only NJ games have been implemented.
              <br />
              Users can:
              <br />
              create an account in order to  not yet implemented
              <br />
              generate numbers,implemented
              <br />
              save their games played, not yet implemented
              <br />
              lucky numbers, implemented without ability to save, users may only use their numbers while the window is open
<br />
              see game rules/how to play, implemented

    and see recent winning numbers. not yet implemented</p>
            </div>
          </div>
        </section>
      </main>

      <section id="contact">
        <h2>Send me a message:</h2>
        <div class="group">

          <form action="https://formspree.io/mlepwvky" method="POST">

            <label>Y'alls Name</label>
            <input type="text" name="name" class="item" />
            <label>Y'alls email:</label>

            <input type="text" name="_replyto" class="item" />
            <div class="footer">
              <div>
                <label>Y'alls message:</label></div>
              <textarea class="item" name="message"></textarea>
            </div>



            {/* <!-- your other form fields go here --> */}

            <button class="item" type="submit">Send</button>
          </form>
        </div>

        <hr />

        <footer>

          <div class="footer">


            <a href="https://www.linkedin.com/in/john-pendergast-b21b03a1/" target="_blank" rel="noopener noreferrer" ><img
              src={require("./images/linkedin-logo.png")} alt="LinkedIn's boring I-N logo." class="logo" width="40" />
            </a>



            <a href="https://twitter.com/JohndPendergast" target="_blank" rel="noopener noreferrer" ><img src={require("./images/twitter.png")}
              alt="Twitter bird icon" class="logo" width="40" />
            </a>



            <a href="https://github.com/Jpending" target="_blank" rel="noopener noreferrer" ><img src={require("./images/github-logo.png")}
              alt="github's awesome demon logo" class="logo" width="40" /> </a>



          </div>

          <div class="item"> <a href="mailto:jpending.com">Or Send Me an Email by Clicking Here</a></div>
        </footer>
      </section>
    </div >


  );
}

export default App;
