<template>
  <div>
    <Menu class="fixed w-screen top-0 z-40" />
    <Nuxt />
    <DarkModeBtn class="fixed z-50 darkbtn" />
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
  color: #000;
  transition: .3s all ease-in-out;
}

.dark-mode body {
  background-color: #384e78;
  color: #f2f2f2;
}

.darkbtn {
  bottom: 25px;
}
</style>
