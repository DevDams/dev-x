<template>
  <div>
    <div class="h-screen bg-mywhite">
      <div class="container mx-auto">
        <div v-if="error.statusCode === 404" class="relative h-screen flex flex-col items-center justify-center">
          <h1 class="absolute text-6xl text-center font-bold">
            Oupss... page not found
            <NuxtLink to="/" class="text-lg block">
              <img src="~/assets/icon/arrow-back.svg" alt="">
              Back to Home Page
            </NuxtLink>
          </h1>
          <img src="~/assets/svg/astronaut.svg" alt="astronaut lost" class="w-3/5 pt-10">
        </div>
        <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>

<style scoped></style>
