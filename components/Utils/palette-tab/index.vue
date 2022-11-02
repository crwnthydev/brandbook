<template lang="html">
  <div v-show="isActive" class="palette-tab-component" >
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
    },
    colorValue: {
        type: String,
        default: '#000000'
    },
    border: {
        type: String,
        default: '#FFFFFF'
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
  .palette-tab-component {
    position: relative;
  }
</style>
