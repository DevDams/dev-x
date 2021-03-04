<template>
  <div>
    <div class="corps bg-blue-400">
      <div class="container relative m-auto top-0 flex items-center justify-center h-full z-40">
        <div>
          <h1 class="text uppercase text-4xl font-bold">
            Hi ! I am Aimé, a javascript and frontend web developer from Ivory Coast
          </h1>
          <p class="text-white mt-4 mb-10 font-hairline">
            Create awesome interface and web application for customers if one of the thinks
            I like the most in my life. So if you have any idea of project, don't wait too long...
          </p>
          <a href="#" class="text-xl text-white p-4 rounded-3xl aa">Let's work</a>
        </div>
        <img class="w-2/5" src="~/assets/svg/work_man.svg" alt="worker man illustration">
      </div>
      <div class="wave_background z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    </div>
    <div class="h-screen"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dark-mode body .wave_background svg {
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
</style>
