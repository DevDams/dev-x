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
          <a href="#" class="flex w-48 items-center justify-center text-xl text-white py-3 px-5 rounded-3xl aa">
            Let's work
            <span>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 12L17 12L13 16M13 8L15 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        <img class="w-2/5" src="~/assets/svg/work_man.svg" alt="worker man illustration">
      </div>
      <div class="wave_background z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <svg class="eeee" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    </div>
    <!-- ===== About section ===== -->
    <div class="h-screen about relative -mt-44">
      <div class="container mx-auto">
        <h1 class="text-6xl font-hairline text-right mr-32 flex justify-end">
          <span>About me.</span> <span class="bar absolute bg-mygreen w-40 h-1 rounded-xl mt-20"></span>
        </h1>
        <div class="flex">
          <div class="left_box w-1/3">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
          </div>
          <div class="right_box w-2/3 flex flex-col">
            <div class="bock_text flex mt-32">
              <div class="div1 relative w-1/2">
                <div class="px-8">
                  <h1 class="font-bold text-4xl uppercase tracking-widest">Why i code.</h1>
                  <p class="font-thin mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime sed culpa dolor illo omnis neque nesciunt aliquid, dolore saepe doloremque earum, eveniet esse delectus eaque, ad voluptate corporis officia.</p>
                </div>
              </div>
              <div class="div2 w-1/2 self-center">
                <div class="mt-32 px-8">
                  <h1 class="font-bold text-4xl text-mygreen uppercase tracking-widest">My story_</h1>
                  <p class="font-thin mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim voluptatum obcaecati hic illo saepe, officiis veniam voluptatem consequatur totam minima eaque, nisi voluptas facilis at cum, dolor delectus! Doloribus.</p>
                </div>
              </div>
            </div>
            <div class="btn pl-20 mt-32">
              <a class="font-thin text-xl text-white bg-mypink py-3 px-4 rounded-2xl" href="#">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
