<template>
  <div class="p-6 fixed z-30 right-0 bottom-2">
    <button class="btn text-black rounded-full shadow-lg outline-none" @click="changeMode">
      <span class="sun" :class="{ displaySun : !darkModeActive }">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
          <g>
            <g>
              <path d="m256,432.3c-11.3,0-20.4,9.1-20.4,20.4v27.9c0,11.3 9.1,20.4 20.4,20.4s20.4-9.1 20.4-20.4v-27.9c0-11.3-9.1-20.4-20.4-20.4z"/>
              <path d="m256,102.5c-84.6,0-153.5,68.8-153.5,153.5 0,84.6 68.8,153.5 153.5,153.5 84.6,0 153.5-68.8 153.5-153.5 0-84.6-68.9-153.5-153.5-153.5zm0,266.1c-62.1,0-112.6-50.5-112.6-112.6 0-62.1 50.5-112.6 112.6-112.6s112.6,50.5 112.6,112.6c0,62.1-50.5,112.6-112.6,112.6z"/>
              <path d="M256,79.7c11.3,0,20.4-9.1,20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v27.9    C235.6,70.6,244.7,79.7,256,79.7z"/>
              <path d="m480.6,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z"/>
              <path d="m59.3,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 1.42109e-14-11.3-9.1-20.4-20.4-20.4z"/>
              <path d="m409.5,131.4l19.7-19.7c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-19.7,19.7c-8,8-8,20.9 0,28.9s20.9,7.9 28.9,0z"/>
              <path d="m102.5,380.6l-19.7,19.7c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l19.7-19.7c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z"/>
              <path d="m409.5,380.6c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7z"/>
              <path d="m102.5,131.4c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7z"/>
            </g>
          </g>
        </svg>
      </span>
      <span class="moon" :class="{ displayMoon : darkModeActive }">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="45.16px" height="45.16px" viewBox="0 0 45.16 45.16" style="enable-background:new 0 0 45.16 45.16;" xml:space="preserve">
          <g>
            <g>
              <path d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
                S28.816,11.269,22.58,11.269z"/>
              <g>
                <g>
                  <path d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
                    v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"/>
                </g>
                <g>
                  <path d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
                    v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"/>
                </g>
                <g>
                  <path d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
                    c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"/>
                </g>
                <g>
                  <path d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
                    c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"/>
                </g>
                <g>
                  <path d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
                    h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"/>
                </g>
                <g>
                  <path d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
                    h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"/>
                </g>
                <g>
                  <path d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
                    l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"/>
                </g>
                <g>
                  <path d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
                    c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      darkModeActive: false
    }
  },
  computed: {
    btnLabel () {
      return this.$colorMode.preference === 'https://www.svgrepo.com/show/6938/sun.svg' ? 'https://www.svgrepo.com/show/44458/moon.svg' : 'https://www.svgrepo.com/show/6938/sun.svg'
    }
  },
  methods: {
    changeMode () {
      this.darkModeActive = !this.darkModeActive
      this.$colorMode.preference =
      this.$colorMode.preference === 'https://www.svgrepo.com/show/6938/sun.svg' ? 'dark' : 'https://www.svgrepo.com/show/6938/sun.svg'
    }
  }
}
</script>

<style>
button.btn {
  outline: none;
  transition: .2s transform ease-in-out;
}

button.btn:hover {
  transform: scale(1.1);
}

.btn .sun.displaySun {
  display: none;
}

.btn .moon.displayMoon {
  display: none;
}

.btn svg {
  width: 30px;
  height: 30px;
}

.btn .sun, .btn .moon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.btn .sun {
  background: white;
}

.btn .moon {
  background: black;
}

.btn .sun svg path {
  fill: #000;
}

.btn .moon svg path {
  fill: #fff;
}
</style>
