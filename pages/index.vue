<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="corps bg-blue-400">
        <div class="container banner relative m-auto flex h-full z-40">
          <div class="pt-64">
            <h1 data-scroll class="text uppercase text-4xl font-bold" data-scroll-speed="1">
              Hi ! I am Aimé, a javascript and frontend web developer from Ivory Coast
            </h1>
            <p data-scroll class="text-white mt-4 mb-10 font-hairline" data-scroll-speed="2">
              Create awesome interface and web application for customers if one of the thinks
              I like the most in my life. So if you have any idea of project, don't wait too long...
            </p>
            <a data-scroll href="#" class="flex w-48 items-center justify-center text-xl text-white py-3 px-5 rounded-3xl aa"  data-scroll-speed="3">
              Let's work
              <span>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12L17 12L13 16M13 8L15 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
          <img datat-scroll class="w-2/5 -mt-24" src="~/assets/svg/work_man.svg" alt="worker man illustration">
        </div>
        <div class="wave_background z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
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

.dark-mode body .wave svg {
  background: #384e78;
}

.corps {
  height: 850px;
  position: relative;
  background-color: #5874dc;
}

.corps .text {
  color: #f2f2f2;
}

.wave_background svg {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  transition: .3s all ease-in-out;
  z-index: 1;
}

.wave_background svg path {
  fill: #5874dc;
}

.aa {
  background-color: #e06c78;
}

.about {
  height: 950px;
  position: relative;
}

.about .wave_background_2 svg {
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: -1;
}

.work {
  height: 950px;
  position: relative;
}

.work .wave_background_3 svg {
  background-color: white;
  bottom: 0;
  z-index: -1;
  transform: rotate(180deg);
}

.blog {
  height: 950px;
}

.blog .wave_background_4 svg {
  position: absolute;
  bottom: 0;
}

.contact {
  height: 850px;
}
</style>
