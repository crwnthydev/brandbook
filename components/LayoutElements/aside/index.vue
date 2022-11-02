<template>
  <aside class="aside-component">
    <Nav v-for="(item, index) in navList" :key="item.title" :item="item" :navId="index" />
  </aside>
</template>

<script>
import Nav from '@/components/Utils/nav'

export default {
  name: 'aside-component',
  components: {
    Nav
  },
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.navList = this.$store.state.navData
  }
}
</script>

<style lang="scss" scoped>
.aside-component {
  height: 100%;
}
</style>
