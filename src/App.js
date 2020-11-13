import React from 'react';
import './App.css';
import ProjectCards from './ProjectCards';
import store from './store'


export default class App extends React.Component {
  //https://image.freepik.com/free-photo/beautiful-sea-ocean-water-wave-surface_74190-6827.jpg
  //https://lh3.googleusercontent.com/proxy/3kDEdGHnD0Tdrvv3G3Un559SLtu5oFCJEmxgwPYDAd9yESuKyfpREJYl1vpAsh9kmtrtwKFm5KaycSfzYbVszI8dLIgnKar54eTVWDOBE0lrgTJLZ9UTf7OFA-qwYr8C_vqwsJ9lS2j4dfXrE2MNBwPw
  //className="bg-clip-border bg-center bg-cover bg-local  padding-bottom-10" style={ nameBGStyle }
  //bg-clip-text text-transparent bg-clip-border bg-center bg-cover bg-local  padding-bottom-10 font-extrabold  font-mono text-4xl tracking-widest" style={ nameBGStyle }
  //bg-clip-border bg-center bg-cover bg-local
  //
  //

  headerStyle={
    "background-image": "url('https://lh3.googleusercontent.com/proxy/3kDEdGHnD0Tdrvv3G3Un559SLtu5oFCJEmxgwPYDAd9yESuKyfpREJYl1vpAsh9kmtrtwKFm5KaycSfzYbVszI8dLIgnKar54eTVWDOBE0lrgTJLZ9UTf7OFA-qwYr8C_vqwsJ9lS2j4dfXrE2MNBwPw')"
  }
  nameBGStyle={
    "background-image": "url('https://res.cloudinary.com/css-tricks/image/fetch/w_1200,q_auto,f_auto/https://css-tricks.com/wp-content/uploads/2020/03/chevron-pattern.png')"
  }

  renderProjectCards() {
    return store.projects.map(proj => < ProjectCards proj={proj} key={proj.title} />)
  }


  render() {
    return (
      <div className="App w-screen sm:w-full font-mono grid grid-cols-1 gap-0">
        <header id="navbar" className="cursor-pointer bg-clip-border bg-center bg-fixed w-full">
          <nav className="bg-gradient-to-top from-gray-300 to-transparent">
            <div className="text-center">
              <span className="text-white pb-10 font-extrabold  font-mono text-4xl tracking-widest" >
                John D Pendergast</span>
            </div>
            <div id="menu" className="sm:text-xl text-center font-bold min-w-full flex
            flex-row md:flex-row-reverse lg:flex-row-reverse xl:flex-row">

              <div className="mx-2 flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
                <a href="#about" className="text-white tracking-wide">
                  About
                </a>
              </div>
              <div className="mx-2 flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
                <a href="#services" className="text-white tracking-wide">
                  Services
                </a>
              </div>
              <div className="mx-2 flex-1 rounded-t-lg hover:bg-red-600 hover:bg-opacity-50">
                <a href="#portfolio" className="text-white tracking-wide">
                  Portfolio
                </a>
              </div>
              <div className="mx-2 flex-1 rounded-t-lg  hover:bg-red-600 hover:bg-opacity-50">
                <a href="#contact" className="text-white tracking-wide ">
                  Contact
                </a>
              </div>
            </div>

          </nav>
        </header>

        <main className="grid grid-cols-1 gap-0 items-center pt-10 min-w-full ">

          {/* <!-- about me section --> */}
          <section id="about" className="my-5 " >
            <div className="p-1 min-w-full mb-10">
              <div className="item bg-blue-100 rounded border-4 border-gray-200 min-w-full">
                <h2 className="font-bold tracking-widest py-2"> A little bit about me...</h2>
                <p className="font-sans">My name is John D Pendergast.<br />
                I am a web developer living in Sayreville, NJ with my partner and our amazing dog, Ninja. I have an
                extensive work history in residential and commercial construction, as well as renovation project management. I
                believe this gives my code the advantage of having aspects of being built like a home; that is, from the
            foundations to the finishing touches.</p>
              </div>

              <hr className="border-2 border-white py-4" />

              {/* <!-- why i like development --> */}
              <div className="item bg-blue-100 rounded border-4 border-gray-200">
                <h2 className="font-bold tracking-widest py-2" >Why web development?</h2>
                <p className="font-sans">  I've been infatuated with the internet since we had our first dial-up connection. Everything about
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

            <div className="flex flex-col sm:flex-row flex-wrap text-center mb-8">
              <div className="flex-initial min-w-full h-6 border border-b-none shadow-sm mb-2">
                <h2 className="text-bold tracking-widest mb-1">Interests Outside of Development</h2>
              </div>
              <div className="flex-1 flex rounded border-4 border-gray-200 m-3 place-items-center shadow-lg bg-gradient-to-br from-transparent via-transparent to-blue-100">
                <div className="max-w-sm w-full flex-1 lg:max-w-full lg:flex ">
                  <img className="h-48 rounded-br-full border-4 border-white lg:h-auto min-w-0 lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src={require("./images/smoker.jpg")} alt="A smoker for making BBQ" />
                  <p className="text-gray-900 font-bold text-xl mb-2 ">
                    Cooking, mainly BBQ.</p>
                </div>
              </div>
              <div className="flex-1 flex  rounded border-4 border-gray-200 m-3 place-items-center shadow-lg bg-gradient-to-br from-transparent via-transparent to-blue-100">
                <div className="max-w-sm w-full flex-1 lg:max-w-full lg:flexbg-gradient-to-br from-transparent via-transparent to-blue-100">
                  <img className="h-48 rounded-br-full border-4 border-white lg:h-auto min-w-0 lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden" src={require('./images/wow.jpg')} alt="World of Warcraft Logo" />
                  <p className="text-gray-900 font-bold text-lg mb-2">Games: World of Warcraft, CK3, Pokemon Sword.</p>
                </div>
              </div>
              <div className="flex-1 flex  rounded border-4 border-gray-200 m-3 place-items-center shadow-lg bg-gradient-to-br from-transparent via-transparent to-blue-100">
                <div className="max-w-sm w-full flex-1 lg:max-w-full lg:flex">
                  <img className="h-48 rounded-br-full border-4 border-white lg:h-auto min-w-0 lg:w-48 flex-none rounded-t lg:rounded-t-none lg:rounded-l overflow-hiddenn" src={require("./images/ninja.jpg")} alt="The World's greatestdog." />
                  <p className="text-gray-900 font-bold text-xl mb-2">My insanely photogenic dog, Ninja.</p>
                </div>
              </div>
            </div>

          </section>

          <section id="services" className="text-center rounded-tl-full rounded-lg shadow-b bg-gradient-to-br from-gray-300 via-white to-white md:mx-48">
            <h2 className="text-boldest text-3xl tracking-widest mt-20" >Specialties:</h2>
            <div className="flex-row-reverse lg:p-40 justify-items-center rounded-br-full bg-gradient-to-br from-transparent via-transparent to-gray-300">

              <p className="flex-1 inline-block border-8 bg-white border-blue-400 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">React.js</p>
              <p className="flex-1 inline-block border-8 bg-white border-orange-700 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Firebase</p>
              <p className="flex-1 inline-block border-8 bg-white border-purple-600 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Javascript ES6/ES7</p>
              <p className="flex-1 inline-block border-8 bg-white border-yellow-400 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Typescript</p>
              <p className="flex-1 inline-block border-8 bg-white border-teal-400 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Tailwind.css</p>
              <p className="flex-1 inline-block border-8 bg-white border-green-600 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Node.js</p>
              <p className="flex-1 inline-block border-8 bg-white border-blue-700 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">Express</p>
              <p className="flex-1 inline-block border-8 bg-white border-orange-400 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">PostgreSQL</p>
              <p className="flex-1 inline-block border-8 bg-white border-yellow-400 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">NoSQL</p>
              <p className="flex-1 inline-block border-8 bg-white border-green-300 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">HeidiSQL</p>
              <p className="flex-1 inline-block border-8 bg-white border-red-700 rounded-md m-4 p-2 transition duration-700 ease-in-out transform hover:-translate-y-3 hover:scale-150">MySQL</p>


            </div>
          </section>


          <section id="portfolio">
            <h2 className="text-boldest text-3xl tracking-widest mt-20">Projects</h2>
            <div className="group project">
              <div className="flex flex-row  flex-wrap">
                {this.renderProjectCards()}
              </div>
            </div>
            <hr />

          </section>


          <section id="contact" className="w-screen align-items-center grid grid-rows-6 grid-cols-5 gap-4">

            <div className="text-start font-black tracking-widest text-3xl z-40  xs:font-thin md:tracking-wide row-start-1 row-span-1 col-start-2 col-span-2 pt-10">
              <h2 className="bg-opacity-50 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-200" >Send me a message:</h2>
            </div>
            <div className="filler1 row-start-1 row-span-5 col-start-1 col-span-1"></div>
            <form className="shadow w-full text-base row-start-2 row-span-3 col-start-2 col-span-3 " action="https://formspree.io/mlepwvky" method="POST">
              <div className="md:flex md:items-center mb-6">
                <div className="text-white h-0 w-0">
                  <label className="" htmlFor="name">
                    Name:
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" name="name" placeholder="Enter your name here" required className="rounded w-full  py-2 px-4 outline-none hover:shadow " />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="text-white h-0 w-0">
                  <label className="" htmlFor="_replyto">
                    Email:
              </label>
                </div>
                <div className="md:w-2/3">
                  <input type="email" name="_replyto" required className="py-2 px-4 rounded w-full outline-none hover:shadow" placeholder="Enter your email here" />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="text-white h-0 w-0">
                  <label className="" htmlFor="message">
                    Message:
                  </label>
                </div>
                <div className=" md:w-2/3">
                  <textarea className="text-justify resize-none outline-none hover:shadow py-2 px-4 rounded w-full" name="message" placeholder="Type your message here...">
                  </textarea>
                </div>
              </div>
              <div className="flex flex-row" >
                {/* <div className="w-1/3"></div> */}
                <div className="flex-1 flex justify-center flex-row">
                  <button className="flex-grow mt-5 mx-4 justify-center text-white font-bold py-2 w-full max-w-xs rounded-full transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-125 bg-red-500 hover:bg-green-700" type="submit">
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
              src={require("./images/linkedin-logo.png")} alt="LinkedIn" className="object-scale-down rounded-full   transition-colors duration-700 hover:bg-green-400" />
            </a>

            {/* className="object-scale-down rounded-full animate-pulse"  */}

            <a href="https://twitter.com/JohndPendergast" target="_blank" rel="noopener noreferrer" className="inline-block w-10 mx-10 "><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="48" height="48" viewBox="0 0 24 24" stroke-width="3" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round" className="object-scale-down transition-colors duration-700 hover:bg-green-400 rounded p-1">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>

            </a>



            <a href="https://github.com/Jpending" target="_blank" rel="noopener noreferrer" className="inline-block w-10 mr-5 "><img src={require("./images/github-logo.png")}
              alt="github" className="object-scale-down rounded-full transition-colors duration-700 hover:bg-green-400" /> </a>
          </div>
          <div className="inline-block mx-4 rounded-t-lg text-xl hover:bg-red-600 hover:bg-opacity-50"> <a href="mailto:jpending.com">Or Send Me an Email by Clicking Here</a></div>
        </footer>

      </div >


    )
  };
}
