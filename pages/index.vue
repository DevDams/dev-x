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
            <a data-scroll href="#" class="flex xs:-mt-8 xs:w-40 xs:px-2 xs:justify-center sm:-mt-8 lg:-mt-8 xl:w-40 xl:text-lg xl:-mt-10 2xl:-mt-4 w-48 items-center justify-between text-xl text-black py-3 px-5 rounded-2xl bg-myfadegreen" data-scroll-speed="3">
              Let's work
              <span>
                <svg width="32px" height="32px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L17 12L13 16M13 8L15 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          <img datat-scroll class="xs:hidden sm:hidden md:block md:mt-10 lg:mt-5 xl:-mt-10 2xl:-mt-12 w-2/5 -mt-24" src="~/assets/svg/work_man.svg" alt="worker man illustration">
        </div>
        <div class="wave_background z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
      </div>
      <!-- === ABOUT SECTION === -->
      <div data-scroll-section class="about bg-mywhite">
        <div class="container mx-auto flex sm:flex-col sm:items-center md:flex-row pt-8 z-20 relative">
          <div class="relative image_profil flex items-center mx-12 w-1/2">
            <img data-scroll data-scroll-speed="1" src="~/assets/images/profil.png" alt="picture of person" class="md:mt-56 lg:mt-48 xl:mt-32 2xl:mt-16 max-w-sm rounded-xl shadow-md">
          </div>
          <div class="relative about_text w-2/3">
            <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" class="relative font-bold tracking-wide uppercase text-right xl:mr-0 2xl:mr-32 text-6xl mt-12">about.</h1>
            <div class="about_text_box flex md:mt-32 md:flex-col lg:flex-row lg:items-center lg:mt-10">
              <div class="about_text_1 lg:-mt-24">
                <h3 data-scroll data-scroll-speed="3" class="text-4xl text-mygreen uppercase font-semibold">Why i code</h3>
                <p data-scroll data-scroll-speed="2" class="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, est! Ea qui voluptatum vero necessitatibus sunt labore, ipsam voluptates non? Illo iusto quis tempore eveniet. Vero itaque fugiat ipsam amet.</p>
              </div>
              <div class="about_text_2 md:mt-16 lg:mt-64">
                <h3 data-scroll data-scroll-speed="3" class="text-4xl text-black uppercase font-semibold">My story</h3>
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
          <h1 data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" class="tracking-wide text-6xl text-mywhite pt-8 uppercase font-bold">What i have done</h1>
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
  height: 980px;
  position: relative;
}

.about .wave_background2 svg {
  position: absolute;
  bottom: 0;
  background-color: #e7e7e7;
  transition: .3s all ease-in-out;
  z-index: 1;
}

.project {
  height: 850px;
}
</style>
