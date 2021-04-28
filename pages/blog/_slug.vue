<template>
  <div>
    <article>
      <nuxt-content :document="article" />
    </article>
    <pre> {{ article.updatedAt }} </pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  }
}
</script>

<style scoped>

</style>
