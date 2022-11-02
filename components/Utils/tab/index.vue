<template lang="html">
  <div v-show="isActive" class="tab-component">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'tab-component',
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-component {
    padding-top: 15px;
  }
</style>
