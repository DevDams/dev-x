<template>
  <div>
    <div class="corps bg-blue-400">
      <div class="container relative m-auto flex items-center justify-center h-full z-40">
        <h1 class="w-1/2 text uppercase text-3xl font-bold">
          Hi ! I am Aimé, a javascript and frontend web developer <br>from Ivory Coast
        </h1>
        <img class="w-2/5 shadow-2xl" src="~/assets/svg/work_man.svg" alt="worker man illustration">
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

<style>
body {
  background-color: #fff;
  color: #0e3854;
  transition: .3s all ease-in-out;
}

.dark-mode body {
  background-color: #0e3854;
  color: #c1e6ff;
}

.dark-mode .wave_background svg {
  background: #0e3854;
}

.corps {
  height: 850px;
  position: relative;
  background-color: #067eed;
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
  fill: #067eed;
}
</style>
