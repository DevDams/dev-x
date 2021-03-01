<template>
  <div>
    <DarkModeBtn />
    <div class="corps bg-blue-400">
      <div class="container m-auto flex h-screen items-center">
        <h1 class="text uppercase text-3xl font-bold dark:text-black">
          Hi ! I am Aimé, a javascript and frontend web developer <br>from Ivory Coast
        </h1>
      </div>
      <div class="wave_background">
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
.corps {
  height: 750px;
  position: relative;
  background-color: #b9d4db;
}

.corps .text {
  color: #de5b6d;
}

.wave_background svg {
  position: absolute;
  bottom: 0;
  background-color: #fff;
  transition: .3s all ease-in-out;
}

.wave_background svg path {
  fill: #b9d4db;
}

body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
  transition: .3s all ease-in-out;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.dark-mode .wave_background svg {
  background: #091a28;
}
</style>
