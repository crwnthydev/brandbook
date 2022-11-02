<template lang="vue">
  <transition name="dropdown" @enter="startTransition" @after-enter="endTransition" @before-leave="startTransition" @after-leave="endTransition">
    <div class="dropdown-component" v-show="isVisible" ref="dropdown">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'dropdown-component',
  props: {
    isVisible: Boolean
  },
  methods: {
    startTransition (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    endTransition (el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown-enter-active, .dropdown-leave-active {
    will-change: height;
    overflow: hidden;
    transition: height 0.5s ease;
  }
  .dropdown-enter, .dropdown-leave-to {
    height: 0 !important;
    overflow: hidden;
  }
</style>
