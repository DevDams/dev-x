<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="corps bg-blue-400">
        <div class="xs:px-8 container banner relative m-auto flex items-center h-full z-40">
          <div class="flex flex-col justify-center">
            <h1 data-scroll class="xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl text uppercase font-bold" data-scroll-speed="1">
              Hi ! I am Aimé, a javascript and a frontend web developer from Ivory Coast
            </h1>
            <p data-scroll class="text-white mt-4 mb-10 font-light" data-scroll-speed="2">
              Create awesome interface and web application for customers if one of the thinks
              I like the most in my life. So if you have any idea of project, don't wait too long...
            </p>
            <nuxt-link data-scroll to="/contacts" class="corps_link flex xs:-mt-8 xs:w-40 xs:px-2 xs:justify-center sm:-mt-8 lg:-mt-8 xl:w-46 xl:text-lg xl:-mt-10 2xl:-mt-4 w-48 items-center justify-between text-xl text-black py-3 px-5 rounded-2xl bg-myfadegreen hover:bg-myblack hover:text-white" data-scroll-speed="3">
              Let's work
              <span>
                <svg width="32px" height="32px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L17 12L13 16M13 8L15 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </nuxt-link>
          </div>
          <img datat-scroll class="xs:hidden sm:hidden md:block md:mt-10 lg:mt-5 xl:-mt-10 2xl:-mt-12 w-2/5 -mt-24" src="~/assets/svg/work_man.svg" alt="worker man illustration">
        </div>
        <div class="wave_background z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
      </div>
      <!-- === ABOUT SECTION === -->
      <div data-scroll-section class="about bg-mywhite">
        <div class="container mx-auto flex xs:flex-col sm:flex-col sm:items-center md:flex-row pt-8 z-20 relative">
          <div class="relative image_profil flex items-center mx-12 xs:mx-auto w-1/2">
            <img data-scroll data-scroll-speed="1" src="~/assets/images/profil.png" alt="picture of person" class="border-2 border-black xs:w-full xs:mt-16 sm:mt-12 sm:-ml-10 md:mt-32 md:-ml-24 lg:-ml-8 lg:mt-32 xl:mt-32 2xl:mt-16 2xl:ml-16 max-w-sm rounded-xl shadow-md">
          </div>
          <div class="relative about_text md:w-2/3">
            <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" class="relative font-bold tracking-wide uppercase text-right xs:mt-16 sm:mt-10 md:mt-20 xl:mr-0 xl:-mt-10 2xl:mr-32 2xl:-mt-12 text-6xl">about.</h1>
            <div class="about_text_box flex xs:flex-col xs:px-8 xs:mt-10 sm:items-between sm:px-2 sm:mt-16 md:mt-32 md:flex-col lg:mr-0 lg:flex-row lg:items-center lg:mt-10 xl:-ml-32 2xl:mt-4">
              <div class="about_text_1 xs:mt-8 sm:mt-0 sm:px-2 md:px-0 lg:px-0 lg:-mt-32 lg:-ml-8 xl:ml-0">
                <h3 data-scroll data-scroll-speed="2" class="text-4xl text-mygreen uppercase font-semibold">Why i code</h3>
                <p data-scroll data-scroll-speed="2" class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est! Ea qui voluptatum vero necessitatibus sunt labore, ipsam voluptates non? Illo iusto quis tempore eveniet. Vero itaque fugiat ipsam amet.</p>
              </div>
              <div class="about_text_2 xs:mt-12 sm:px-2 md:mt-16 md:px-2 lg:px-0 lg:mt-64 lg:ml-10 xl:ml-0">
                <h3 data-scroll data-scroll-speed="2" class="text-4xl text-black uppercase font-semibold">My story</h3>
                <p data-scroll data-scroll-speed="2" class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, commodi! Voluptates tempore praesentium quod id illo incidunt iure, temporibus maiores nulla quas perferendis provident sapiente sit explicabo, magni possimus nostrum?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wave_background2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#238c89" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,240C384,224,480,192,576,192C672,192,768,224,864,229.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
      <!-- === PROJECT SECTION === -->
      <div data-scroll-section class="project bg-mygreen -mt-2">
        <div class="container mx-auto">
          <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" class="tracking-wide xs:text-5xl xs:ml-4  sm:text-5xl lg:text-6xl text-white pt-8 uppercase font-bold">What i have done</h1>
        </div>
        <div class="project_box container xs:flex xs:flex-wrap xs:justify-around sm:flex sm:flex-wrap sm:justify-around lg:flex-nowrap mx-auto flex justify-around mt-32 z-20 ">
          <div data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" class="project_1 md:mx-2 lg:mx-0 2xl:w-1/4 flex justify-center bg-red-400 rounded-xl border-2 border-white">
            <a href="https://ai-mad-clown.netlify.app/">
              <h1 class="absolute text-myblack text-xl bg-myfadegreen rounded-lg -ml-32 py-2 w-2/3 mx-auto text-center font-bold hover:bg-myblack hover:text-mywhite">MAD Clone</h1>
            </a>
          </div>
          <div data-scroll data-scroll-speed="2" class="project_2 md:mx-2 lg:mx-0 2xl:w-1/4 mt-16 flex justify-center bg-red-400 rounded-xl border-2 border-white">
            <a href="https://ai-weather.netlify.app/#/">
              <h1 class="absolute text-myblack text-xl bg-myfadegreen rounded-lg -ml-32 py-2 w-2/3 mx-auto text-center font-bold hover:bg-myblack hover:text-mywhite">Wave Weather</h1>
            </a>
          </div>
          <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" class="project_3 xs:mt-16 sm:mt-16 md:mx-2 lg:mx-0 2xl:w-1/4 md:mt-8 flex justify-center bg-red-400 rounded-xl border-2 border-white">
            <a href="https://qui-zz.netlify.app/">
              <h1 class="absolute text-myblack text-xl bg-myfadegreen rounded-lg -ml-32 py-2 w-2/3 mx-auto text-center font-bold hover:bg-myblack hover:text-mywhite">Qui-zz</h1>
            </a>
          </div>
        </div>
        <div class="wave_background3 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#238c89" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,240C384,213,480,139,576,138.7C672,139,768,213,864,213.3C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>
      </div>
      <!-- === CONTACTS SECTION === -->
      <div data-scroll-section class="contact bg-mywhite -mt-4 z-20">
        <div class="container mx-auto">
          <h1 data-scroll data-scroll-speed="2" class="tracking-wide xs:text-4xl xs:mr-4 sm:text-5xl lg:text-6xl text-right text-myorange pt-8 uppercase font-bold">Let's get in touch</h1>
        </div>
        <div class="container mx-auto mt-32 text-center contact_content">
          <p data-scroll data-scroll-speed="3" class="contact_text md:w-1/3 mx-auto text-lg">
            Do you have a new challenge for me or do you just want to say hello? Please contact me by email or social media.
          </p>
          <div class="contact_email text-center mt-12">
            <h1 data-scroll data-scroll-speed="2" class="xs:text-xl xs:font-bold md:font-medium sm:text-4xl lg:text-5xl xl:text-6xl">
              <a href="mailto:ad.aimedesire@gmail.com">ad.aimedesire@gmail.com</a>
            </h1>
          </div>
          <div class="contact_social mt-12">
            <ul class="w-64 text-center mx-auto">
              <li data-scroll data-scroll-speed="2" class="flex justify-center w-64">
                <a href="https://www.linkedin.com/in/adamsaimedesireofficial" class="text-2xl text-myblack">
                  LinkedIn
                </a>
                <img class="w-6 ml-3" src="~/assets/icon/arrow-s.svg" alt="">
              </li>
              <li data-scroll data-scroll-speed="2" class="flex justify-center mt-4">
                <a href="https://twitter.com/dams9ix" class="text-2xl text-myblack">
                  Twitter
                </a>
                <img class="w-6 ml-3" src="~/assets/icon/arrow-s.svg" alt="">
              </li>
              <li data-scroll data-scroll-speed="2" class="flex justify-center mt-4">
                <a href="https://www.instagram.com/adam.9ix/" class="text-2xl text-myblack">
                  Instagram
                </a>
                <img class="w-6 ml-3" src="~/assets/icon/arrow-s.svg" alt="">
              </li>
            </ul>
          </div>
          <div data-scroll data-scroll-speed="2" class="contact_button mt-16 -ml-3">
            <nuxt-link to="/contacts" class="contact_button_link bg-myorange px-8 py-4 rounded-2xl text-xl text-myblack font-medium hover:bg-myblack hover:text-mywhite">
              Send a message
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll'
export default {
  mounted () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
    const target = document.querySelector('#targert')
    scroll.scrollTo(target)
  }
}
</script>

<style scoped>
.dark-mode body .wave_background svg {
  background: #384e78;
}

.dark-mode body .wave_background svg path {
  fill: rgba(88, 117, 220, 0.6);
}

.dark-mode body .corps {
  background-color: rgba(88, 117, 220, 0.6);
}

.corps {
  height: 950px;
  position: relative;
  background-color: #5874dc;
}

.corps .text {
  color: #f2f2f2;
}

.corps_link:hover svg path {
  stroke: white;
}

.wave_background svg {
  position: absolute;
  bottom: 0;
  background-color: #e7e7e7;
  transition: .3s all ease-in-out;
  z-index: 1;
}

.wave_background svg path {
  fill: #5874dc;
}

.about {
  height: 1000px;
  position: relative;
}

.about .image_profil img {
  box-shadow:  15px 15px 31px #b1b1b1,
             -15px -15px 31px #ffffff;
}

.about .wave_background2 svg {
  position: absolute;
  bottom: 0;
  background-color: #e7e7e7;
  transition: .3s all ease-in-out;
  z-index: 1;
}

.project {
  position: relative;
  height: 1250px;
  z-index: 10;
}

.project_1, .project_2, .project_3 {
  position: relative;
  height: 550px;
  background: linear-gradient(145deg, #259693, #207e7b);
  box-shadow:  13px 13px 29px #1c716f;
}

.project_1, .project_2, .project_3, h1 {
  bottom: 10px;
}

.project_1 {
  background-image: url(https://global-uploads.webflow.com/5f3cf8cce20a65438a93628a/5f59d3dae314c45f39759041_Drawkit_landing_04_1-compressed-poster-00001.jpg);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.project_2 {
  background-image: url(https://global-uploads.webflow.com/5f3cf8cce20a65438a93628a/5f59d3dae314c45f39759041_Drawkit_landing_04_1-compressed-poster-00001.jpg);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.project_3 {
  background-image: url(https://global-uploads.webflow.com/5f3cf8cce20a65438a93628a/5f59d3dae314c45f39759041_Drawkit_landing_04_1-compressed-poster-00001.jpg);
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.project .wave_background3 svg {
  position: absolute;
  bottom: 0;
  background-color: #e7e7e7;
  transition: .3s all ease-in-out;
  z-index: -1;
}

.contact {
  position: relative;
  height: 1000px;
}

.contact_social ul li img {
  transform: rotate(90deg);
}

@media (max-width: 1535px) {
  .project {
    height: 1050px;
  }

  .project_1, .project_2, .project_3 {
    width: 300px;
    height: 480px;
  }

  .project_1 a, .project_2 a, .project_3 a {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .project {
    height: 1530px;
  }

  .project_1, .project_2, .project_3 {
    width: 350px;
    height: 480px;
  }
}

@media (max-width: 768px) {
  .about {
    height: 1300px;
  }

  .project {
    height: 2000px;
  }
}

@media (max-width: 526px) {
  .project {
    height: 2100px;
  }
}

@media (max-width: 460px) {
  .about {
    height: 1250px;
  }
}

@media (max-width: 425px) {
  .project {
    height: 2000px;
  }

  .project_1, .project_2, .project_3 {
    width: 320px;
    height: 450px;
  }
}

@media (max-width: 375px) {
  .project_1, .project_2, .project_3 {
    width: 85%;
    height: 450px;
  }
}
</style>
