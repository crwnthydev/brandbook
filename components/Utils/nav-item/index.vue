<template lang="vue">
  <li class="nav-item-component">
    <NuxtLink class="link" v-html="value.subtitle" :to="value.link" />
  </li>
</template>

<script>
export default {
  name: 'nav-item-component',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item-component {
  .link {
  display: flex;
  padding: 15px 0 15px 32px;
  font-size: 13px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #697480;
  }
  .nuxt-link-exact-active {
    font-weight: 600;
    color: #242B33;
    background-color: #F3F8FA;
  }
}
</style>
