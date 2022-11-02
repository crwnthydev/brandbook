<template lang="vue">
  <button class="btn-component" type="">
    <div class="icon" v-if="isContainsIcon">
      <Play></Play>
    </div>
    <div class="text">Скачать все макеты</div>
  </button>
</template>

<script>
import Play from '@/components/UI/icons/play'

export default {
  name: 'btn-component',
  components: {
    Play
  },
  props: {
    isContainsIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-component {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 240px;
  font-family: $font-family-default;
  font-size: $font-size-default;
  line-height: 1.12;
  letter-spacing: 0.03em;
  border: 0;
  cursor: pointer;
  .icon {
    width: 35px;
    height: 35px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
  .text {
    margin-left: 12px;
  }
}
</style>
