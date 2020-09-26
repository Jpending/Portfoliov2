import React from 'react';
import './App.css';

function App ()
{
  //https://image.freepik.com/free-photo/beautiful-sea-ocean-water-wave-surface_74190-6827.jpg
  //https://lh3.googleusercontent.com/proxy/3kDEdGHnD0Tdrvv3G3Un559SLtu5oFCJEmxgwPYDAd9yESuKyfpREJYl1vpAsh9kmtrtwKFm5KaycSfzYbVszI8dLIgnKar54eTVWDOBE0lrgTJLZ9UTf7OFA-qwYr8C_vqwsJ9lS2j4dfXrE2MNBwPw
  //className="bg-clip-border bg-center bg-cover bg-local  padding-bottom-10" style={ nameBGStyle }
  //bg-clip-text text-transparent bg-clip-border bg-center bg-cover bg-local  padding-bottom-10 font-extrabold  font-mono text-4xl tracking-widest" style={ nameBGStyle }
  //bg-clip-border bg-center bg-cover bg-local
  //
  //

  const headerStyle = {
    "background-image": "url('https://lh3.googleusercontent.com/proxy/3kDEdGHnD0Tdrvv3G3Un559SLtu5oFCJEmxgwPYDAd9yESuKyfpREJYl1vpAsh9kmtrtwKFm5KaycSfzYbVszI8dLIgnKar54eTVWDOBE0lrgTJLZ9UTf7OFA-qwYr8C_vqwsJ9lS2j4dfXrE2MNBwPw')"
  }
  const nameBGStyle = {
    "background-image": "url('https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/https://css-tricks.com/wp-content/uploads/2020/03/chevron-pattern.png')"
  }
  return (
    <div className="App font-mono whitespace-pre-line grid grid-cols-1 gap-2">
      <header id="navbar" className="cursor-pointer bg-clip-border bg-center bg-fixed">
        <nav className="bg-gradient-to-top from-gray-300 to-transparent">
          <div className="text-center">
            <span className="text-white pb-10 font-extrabold  font-mono text-4xl tracking-widest" >
              John D Pendergast</span>
          </div>
          <div id="menu" className="text-xl text-center font-bold flex flex-row md:flex-row-reverse lg:flex-row-reverse xl:flex-row">

            <div className="mx-4 sm:flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
              <a href="#about" className="text-white tracking-wide">
                About
                </a>
            </div>
            <div className="mx-4 sm:flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
              <a href="#services" className="text-white tracking-wide">
                Services
                </a>
            </div>
            <div className="mx-4 sm:flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
              <a href="#portfolio" className="text-white tracking-wide">
                Portfolio
                </a>
            </div>
            <div className="mx-4 sm:flex-1 rounded-t-lg  hover:bg-red-600 hover:bg-opacity-50">
              <a href="#contact" className="text-white tracking-wide ">
                Contact
                </a>
            </div>
          </div>

        </nav>
      </header>
      <main className="grid grid-cols-1 gap-2">
        {/* <!-- about me section --> */ }
        <section id="about" className="p-1 grid grid-flow-col grid-cols-1 grid-rows-5 gap-2" >
          <div >
            <div className="p-1">
              <h2 className="subtitle"> A little bit about me...</h2>
              <p className="p-1">If you couldn't tell by now, my name is <em>John D Pendergast</em>.<br />
                I am a software engineer living in Sayreville, NJ with my partner and our amazing dog, Ninja. I have an
                extensive work history in residential and commercial construction, as well as renovation project management. I
                believe this gives my code the advantage of having aspects of being built like a home; that is, from the
            foundations to the finishing touches.</p>
            </div>

            <hr />
            {/* <!-- why i like development --> */ }
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
          {/* <!-- non work interests --> */ }
          <h2 class="subtitle">Interests Outside of Development</h2>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-0">

            <div class="item">
              <p>Cooking, mainly BBQ.</p>
              <img src={ require( "./images/smoker.jpg" ) } alt="A smoker for making BBQ" width="400" />
            </div>
            <div class="item">
              <p>Video games, usually World of Warcraft.</p>
              <img src={ require( './images/wow.jpg' ) } alt="World of Warcraft Logo" width="400" />
            </div>
            <div class="item">
              <p>My insanely photogenic dog, Ninja.</p>
              <img src={ require( "./images/ninja.jpg" ) } alt="The World's greatestdog." width="400" />
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


        <section id="contact" className="w-screen align-items-center grid grid-rows-6 grid-cols-5 gap-4">

          {/* pr-12 sm:pl-1 md:mx-24 lg:px-40 xl:px-64 */ }
          <div className="text-start font-black tracking-widest text-3xl z-40  xs:font-thin md:tracking-wide row-start-1 row-span-1 col-start-2 col-span-2 pt-10">
            <h2 className="bg-opacity-50 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-200" >Send me a message:</h2>
          </div>
          <div className="filler1 row-start-1 row-span-5 col-start-1 col-span-1"></div>
          <form className="shadow w-full text-base row-start-2 row-span-4 col-start-2 col-span-3 " action="https://formspree.io/mlepwvky" method="POST">
            <div className="md:flex md:items-center mb-6">
              <div className="text-white h-0 w-0">
                <label className="" for="name">
                  Name:
                  </label>
              </div>
              <div className="md:w-2/3">
                <input type="text" name="name" placeholder="Enter your name here" required className="rounded w-full  py-2 px-4 outline-none hover:shadow " />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="text-white h-0 w-0">
                <label className="" for="_replyto">
                  Email:
              </label>
              </div>
              <div className="md:w-2/3">
                <input type="email" name="_replyto" required className="py-2 px-4 rounded w-full outline-none hover:shadow" placeholder="Enter your email here" />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="text-white h-0 w-0">
                <label className="" for="message">
                  Message:
                  </label>
              </div>
              <div class=" md:w-2/3">
                <textarea className="text-justify resize-none outline-none hover:shadow py-2 px-4 rounded w-full" name="message" placeholder="Type your message here...">
                </textarea>
              </div>
            </div>
            <div className="flex flex-row border" >
              {/* <div className="w-1/3"></div> */ }
              <div className="flex-1 flex-column border px-10">
                <button className="flex-grow mt-5  text-white font-bold py-2 w-full max-w-xs rounded-full transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150 bg-red-500 hover:bg-green-700" type="submit">
                  Send
              </button>
              </div>
            </div>
          </form>
          <div className="filler2 row-start-1 row-span-5 col-start-5 col-span-1 z-0"> </div>

        </section>
      </main>
      <hr />

      <footer className="cursor-pointer block text-center mt-1 ">

        <div className="bg-gray-200 rounded-t-lg pt-5">


          <a href="https://www.linkedin.com/in/john-pendergast-b21b03a1/" target="_blank" rel="noopener noreferrer" className="inline-block w-10 ml-5"><img
            src={ require( "./images/linkedin-logo.png" ) } alt="LinkedIn" className="object-scale-down rounded-full animate-pulse" />
          </a>



          <a href="https://twitter.com/JohndPendergast" target="_blank" rel="noopener noreferrer" className="inline-block w-10 mx-10 "><img src={ require( "./images/twitter.png" ) }
            alt="Twitter" className="object-scale-down rounded-full animate-pulse" />
          </a>



          <a href="https://github.com/Jpending" target="_blank" rel="noopener noreferrer" className="inline-block w-10 mr-5 "><img src={ require( "./images/github-logo.png" ) }
            alt="github" className="object-scale-down rounded-full animate-pulse" /> </a>
        </div>
        <div className="inline-block mx-4 rounded-t-lg text-xl hover:bg-red-600 hover:bg-opacity-50"> <a href="mailto:jpending.com">Or Send Me an Email by Clicking Here</a></div>
      </footer>

    </div >


  );
}

export default App;
