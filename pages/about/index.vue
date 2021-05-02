<template>
  <div id="target">
    <!-- ABOUT LANDING SECTION -->
    <div data-scroll-container>
      <div data-scroll-section class="about_landing bg-myblue">
        <h1 class="relative mx-auto text-6xl font-bold text-center text-mywhite uppercase pt-32">
          WHO AM I
          <span class="underline"></span>
        </h1>
        <div class="about_me container mx-auto mt-20 flex justify-center">
          <div class="about_me__my_info w-1/2 mt-16">
            <div class="info_1 pr-24 pt-20">
              <h1 class="text-4xl text-myorange uppercase font-bold">I'm just like you</h1>
              <p class="text-mywhite font-light mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus veniam id, hic consequatur maxime velit harum vitae saepe quis quisquam sunt maiores voluptate incidunt exercitationem ducimus quae? Odit, ipsam.
              </p>
            </div>
            <div class="info_2 mt-16 pl-24">
              <h1 class="text-4xl text-myorange uppercase font-bold">How everything start</h1>
              <p class="text-mywhite font-light mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque voluptates perspiciatis consectetur dignissimos, fugiat, harum doloremque asperiores dolorum consequuntur earum! Id assumenda expedita minus laborum ratione eligendi voluptate doloribus.
              </p>
            </div>
          </div>
          <div class="about_me__my_image w-1/2">
            <img class="mx-auto" src="~/assets/svg/selfie.svg" alt="">
          </div>
        </div>
      </div>
      <!-- MY BACKGROUND SECTION -->
      <div data-scroll-section class="my_background container mx-auto">
        <h1 class="relative text-5xl font-bold text-myblue text-right uppercase pt-32 ml-16">
          My Background
          <!-- <span class="underline"></span> -->
        </h1>
        <div class="my_background__info container mx-auto flex justify-center">
          <div class="w-1/2">
            <img src="~/assets/svg/succes.svg" alt="">
          </div>
          <div class="my_background__info_text w-1/2 mt-20">
            <div class="background__info_box1">
              <h3 class="text-3xl font-semibold">Baccalaureat</h3>
              <span class="date font-semibold text-mygreen ml-5">July 2018</span>
              <p class="mt-3 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero ipsa earum ratione at obcaecati non doloremque officiis necessitatibus
              </p>
            </div>
            <div class="background__info_box1 pt-12 mb-12">
              <h3 class="text-3xl font-semibold">UFR Bioscience</h3>
              <span class="date font-semibold text-mygreen ml-5">March 2019 - March 2020</span>
              <p class="mt-3 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero ipsa earum ratione at obcaecati non doloremque officiis necessitatibus, id voluptatum inventore odio cum in, amet et vitae vero magnam!
              </p>
            </div>
            <div class="background__info_box1 mb-12">
              <h3 class="text-3xl font-semibold">Self Taught</h3>
              <span class="date font-semibold text-mygreen ml-5">July 2018 - Today</span>
              <p class="mt-3 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero ipsa earum ratione at obcaecati non doloremque officiis necessitatibus, id voluptatum inventore odio cum in, amet et vitae vero magnam!
              </p>
            </div>
            <div class="background__info_box1">
              <h3 class="text-3xl font-semibold">NAN - Not A Number</h3>
              <span class="date font-semibold text-mygreen ml-5">January 2021 - Janvier 2022</span>
              <p class="mt-3 ml-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, libero ipsa earum ratione at obcaecati non doloremque officiis necessitatibus, id voluptatum inventore odio cum in, amet et vitae vero magnam!
              </p>
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
.about_landing {
  height: 1100px;
}

.about_landing h1 {
  width: 500px;
}

.about_landing h1 span {
  position: absolute;
  content: '';
  width: 150px;
  height: 3px;
  border-radius: 30px;
  background-color: #e7e7e7;
  bottom: 5px;
  left: 180px;
}

.my_background {
  height: 1050px;
}

.my_background h1 span {
  position: absolute;
  content: '';
  width: 170px;
  height: 4px;
  border-radius: 30px;
  background-color: #5874dc;
  bottom: 5px;
  left: 0;
}

.my_background__info img {
  width: 500px;
  margin: auto;
}

.about_me .my_image img {
  width: 450px;
  margin: auto;
}
</style>
