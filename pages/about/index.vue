<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="about_landing bg-myblue">
        <h1 class="text-6xl font-bold text-center text-myfadegreen pt-40">WHO AM I</h1>
        <div class="about_me container mx-auto mt-12 flex">
          <div class="my_info w-1/2 p-20">
            <h1 class="text-myblack text-5xl font-semibold">I'm a human</h1>
            <p class="text-mywhite">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium, fugit iste necessitatibus tempore facilis sequi blanditiis nisi repellat perferendis aliquam? Facilis accusantium quam ratione maxime quia temporibus laborum eum.
            </p>
          </div>
          <div class="my_image w-1/2">
            <img src="~/assets/svg/reading.svg" alt="">
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
  height: 950px;
}

.about_me .my_image img {
  width: 450px;
  margin: auto;
}
</style>
