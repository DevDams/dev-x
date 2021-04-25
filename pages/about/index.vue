<template>
  <div id="target">
    <div data-scroll-container>
      <div data-scroll-section class="about_landing bg-myblue">
        <h1 class="text-6xl font-bold text-center text-myfadegreen pt-32">WHO AM I</h1>
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
