<template lang="vue">
  <transition name="modal">
    <div class="modal-component wrapper" v-if="show" @click.self="close">
      <div class="dialog" :open="show">
        <div class="close" @click="close">
          <Close />
        </div>
        <div class="title" v-if="$slots.title">
          <slot name="title"/>
        </div>
        <div class="content scrollable" ref="content">
          <div ref="contentWrap">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import Close from '@/components/UI/icons/close'

export default {
  name: 'modal-component',
  components: {
    Close
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals
    }),
    show () {
      return this.modals.includes(this.id)
    }
  },
  watch: {
    show () {
      this.show
        ? this.$emit('open')
        : this.$emit('close')
      this.$nextTick(() => {
        this.handleOnResize()
      })
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeModal', this.id)
      this.enableBodyScroll()
    },
    handleOnResize () {
      if (this.$refs.content && this.$refs.contentWrap) {
        const headerHeight = window.innerWidth > 600 ? 80 : 60
        if (this.$refs.contentWrap.offsetHeight + headerHeight >= window.innerHeight) {
          this.$refs.content.classList.add('scrollable')
        }
      }
    },
    handleOnKeyUp (e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleOnResize)
    window.addEventListener('keyup', this.handleOnKeyUp)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleOnResize)
    window.removeEventListener('keyup', this.handleOnKeyUp)
  }
}
</script>

<style lang="scss" scoped>

$modal-background-wrapper: rgba(#000, 0.35);
$modal-background: #fff;
$transition-modal-wrapper: opacity 0.25s ease;
$transition-modal: opacity 0.25s ease;

.modal-component {
  z-index: 1000;
  position: fixed;
  top: 0px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  background: #ffffff;
  transition: $transition-modal-wrapper;
  box-sizing: border-box;

  .dialog {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border: none;
    padding: 0;
    transition: $transition-modal;
  }

  .content {
    padding: 0;
    padding-top: 64px;
    height: 100vh;
    min-height: 100%;
    width: 100%;
    height: -webkit-fill-available;
    &.scrollable {
      display: block;
      overflow: auto;
    }
  }
  .content > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  .close {
    position: absolute;
    padding: 12px;
    width: 48px;
    height: 48px;
    top: 8px;
    right: 8px;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      color: #505B66;
    }
  }
  &.modal-enter {
    opacity: 0;
    dialog {
      opacity: 0;
    }
  }
  &.modal-leave-active {
    opacity: 0;
  }

  &.wrapper {
    padding-top: 20px;
  }
}
</style>
