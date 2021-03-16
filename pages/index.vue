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
      <!-- ===== About section ===== -->
      <div data-scroll-section class="about relative mt-32">
        <div class="container mx-auto">
          <h1 data-scroll class="text-6xl font-hairline text-right mr-32 flex justify-end" data-scroll-speed="2">
            <span>About me.</span> <span class="bar absolute bg-mygreen w-40 h-1 rounded-xl mt-20"></span>
          </h1>
          <div class="flex">
            <div data-scroll class="left_box w-1/3 -mt-32" data-scroll-speed="-1">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="">
            </div>
            <div class="right_box w-2/3 flex flex-col">
              <div class="bock_text flex mt-32">
                <div class="div1 relative w-1/2">
                  <div class="px-8">
                    <h1 data-scroll data-scroll-direction="horizontal" class="font-bold text-4xl uppercase tracking-widest" data-scroll-speed="1">Why i code.</h1>
                    <p data-scroll data-scroll-direction="vertical" class="font-thin mt-6" data-scroll-speed="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime sed culpa dolor illo omnis neque nesciunt aliquid, dolore saepe doloremque earum, eveniet esse delectus eaque, ad voluptate corporis officia.</p>
                  </div>
                </div>
                <div class="div2 w-1/2 self-center">
                  <div class="mt-32 px-8">
                    <h1 data-scroll class="font-bold text-4xl text-mygreen uppercase tracking-widest" data-scroll-speed="3">My story_</h1>
                    <p data-scroll class="font-thin mt-6" data-scroll-speed="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim voluptatum obcaecati hic illo saepe, officiis veniam voluptatem consequatur totam minima eaque, nisi voluptas facilis at cum, dolor delectus! Doloribus.</p>
                  </div>
                </div>
              </div>
              <div class="btn pl-20 mt-12">
                <a href="#" class="flex w-48 items-center justify-center text-xl text-white py-3 px-5 rounded-3xl aa">
                  Know more
                  <span>
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 12L17 12L13 16M13 8L15 10" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="wave wave_background_2">
          <svg data-scroll xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path fill="#6aab9c" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <!-- ===== Work section ===== -->
      <div data-scroll-section class="work bg-mygreen relative">
        <div class="container mx-auto relative z-50">
          <h1 data-scroll class="relative text-6xl text-center text-white mx-auto" data-scroll-speed="2">
            My Work <span class="bar absolute bg-myorange w-32 h-1 rounded-xl mt-24 -ml-48"></span>
          </h1>
          <div class="flex mt-20">
            <div data-scroll data-scroll-direction="horizontal" class="work1 w-1/3" data-scroll-speed="-3">
              <img class="p-4" src="https://static01.nyt.com/images/2020/03/18/business/18Techfix-illo/18Techfix-illo-mediumSquareAt3X.jpg" alt="">
            </div>
            <div data-scroll class="work2 w-1/3"  data-scroll-speed="1">
              <img class="p-4 mt-48" src="https://image.freepik.com/vecteurs-libre/illustration-concept-teletravail_52683-36287.jpg" alt="">
            </div>
            <div data-scroll class="work3 w-1/3"  data-scroll-speed="3">
              <img class="p-4 mt-20" src="https://image.freepik.com/vecteurs-libre/illustration-teletravail_23-2148485455.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="wave wave_background_3">
          <svg data-scroll xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path fill="#6aab9c" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <!-- ===== Blog section ===== -->
      <div data-scroll-section class="blog">
        <div class="container mx-auto relative mt-32">
          <h1 class="text-6xl font-light text-myorange ml-40">Blog_</h1>
        </div>
        <div class="wave wave_background_4">
          <svg data-scroll xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path fill="#5874dc" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,234.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <!-- ===== Contact section ===== -->
      <div data-scroll-section class="contact -mb-40 bg-myblue">
        <div class="container mx-auto">
          <div>
            <h1 data-scroll data-scroll-direction="horizontal" class="text-6xl font-bold text-white uppercase" data-scroll-speed="2">Feel free to send me a message</h1>
          </div>
          <div>
            <div data-scroll data-scroll-direction="horizontal" class="contact_box flex mt-32"  data-scroll-speed="1">
              <div class="contact_box1 w-1/2 ml-20">
                <h1 data-scroll class="text-5xl text-myorange bg-myblack pl-4" data-scroll-speed="-2">My Adress <span class="text-white">_</span></h1>
                <p data-scroll class="font-thin" data-scroll-speed="2">
                  <ul class="text-2xl">
                    <li class="py-2"><span class="font-semibold">Loction</span> <img class="inline" src="~/assets/icon/location.svg" alt=""> : Abidjan, Ivory Coast</li>
                    <li class="py-2"><span class="font-semibold">Gmail</span> <img class="inline" src="~/assets/icon/gmail.svg" alt=""> : ad.aimedesire@gmail.com</li>
                    <li class="py-2"><span class="font-semibold">Telephone</span> <img class="inline" src="~/assets/icon/phone.svg" alt=""> : +2250778812111</li>
                    <li class="py-2"><span class="font-semibold">Telegram</span> <img class="inline" src="~/assets/icon/telegram.svg" alt=""> : +2250778812111</li>
                  </ul>
                </p>
              </div>
              <div class="contact_box2 mt-48 w-1/2">
                <h1 data-scroll class="text-5xl text-myblack bg-myorange" data-scroll-speed="-1"><span class="text-myblack text-6xl">.</span> On the internet</h1>
                <p data-scroll class="font-thin mt-8" data-scroll-speed="-1">
                  <ul class="text-2xl">
                    <li class="py-2">
                      <span class="font-semibold">Linkedin</span> <img class="inline" src="~/assets/icon/linkedin-alt.svg" alt=""> : <a href="https://www.linkedin.com/in/adamsaimedesireofficial">Adams Aimé-Désiré</a>
                    </li>
                    <li class="py-2">
                      <span class="font-semibold">Github</span> <img class="inline" src="~/assets/icon/github-alt.svg" alt=""> : <a href="https://github.com/DevDams">DevDams</a>
                    </li>
                    <li class="py-2">
                      <span class="font-semibold">Behance</span> <img class="inline" src="~/assets/icon/behanceù.svg" alt="https://www.behance.net/dams9ix"> : <a href="">@dam9ix</a>
                    </li>
                    <li class="py-2">
                      <span class="font-semibold">Twitter</span> <img class="inline" src="~/assets/icon/twitter-alt.svg" alt=""> : <a href="https://twitter.com/dams9ix">@dams9ix</a>
                    </li>
                    <li class="py-2">
                      <span class="font-semibold">Instagram</span> <img class="inline" src="~/assets/icon/instagram-alt.svg" alt="https://www.instagram.com/adam.9ix/"> : <a href="">@adam.9ix</a>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
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
