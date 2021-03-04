<template>
  <div>
    <Menu class="sticky w-screen top-0 z-40" />
    <Nuxt />
    <DarkModeBtn class="sticky left-0 bottom-0 z-50" />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #fff;
  color: #0e3854;
  transition: .3s all ease-in-out;
}

.dark-mode body {
  background-color: #384e78;
  color: #c1e6ff;
}
</style>
