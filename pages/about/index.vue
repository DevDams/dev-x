<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="about_landing bg-myblue">
        <h1 class="text-6xl font-bold text-center text-myfadegreen pt-32">WHO AM I</h1>
        <div class="about_me container mx-auto">
          <div class="about_me__story flex">
            <div class="about_me__story_text">
              <h1 class="text-6xl text-myfadegreen">I'm just a human :)</h1>
              <p class="text-mywhite text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero officia earum reprehenderit aperiam. Delectus laborum dolores fugit ut temporibus perferendis animi recusandae unde, commodi nulla ullam impedit hic, repellat sed?
              </p>
            </div>
            <div class="about_me__story_img"></div>
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
</style>
