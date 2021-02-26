<template>
  <div>
    <div class="corps bg-blue-400">
      <h1 class="text-blue-700 text-6xl font-bold dark:text-black">Hello World</h1>
      <button class="btn text-black outline-none" @click="changeMode">
        <img :src="btnLabel" alt="" class="w-8">
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#63B3ED" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
    <div class="h-screen"></div>
  </div>
</template>

<script>
export default {
  computed: {
    btnLabel () {
      return this.$colorMode.preference === 'https://www.svgrepo.com/show/6938/sun.svg' ? 'https://www.svgrepo.com/show/44458/moon.svg' : 'https://www.svgrepo.com/show/6938/sun.svg'
    }
  },
  methods: {
    changeMode () {
      this.$colorMode.preference =
      this.$colorMode.preference === 'https://www.svgrepo.com/show/6938/sun.svg' ? 'dark' : 'https://www.svgrepo.com/show/6938/sun.svg'
    }
  }
}
</script>

<style>
.corps {
  height: 750px;
  position: relative;
}

svg {
  position: absolute;
  bottom: 0;
  background-color: white;
}

svg path {
  fill: #63B3ED;
}
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode svg {
  background: #091a28;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
