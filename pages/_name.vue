<template>
  <div>
    <h1>{{ pageData.title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageData: {}
    }
  },
  mounted () {
    this.pageData = this.$store.state.search.searchData.find(book => book.name === this.$route.params.name)
  }
}
</script>

<style>

</style>
