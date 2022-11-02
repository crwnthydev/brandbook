<template lang="vue">
    <div class="palette">
        <div v-for="(color, index) in colors" :key='index' class="palette__item">
            <span
                class="palette__color"
                :style="{'background': color.value, 'border-color': color.border}">
            </span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'custom-select',
  props: {
    colors: Array
  }
}

</script>

<style lang="scss" scoped>
  .palette {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
    &__item {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F2F4F5;
        @include palette-box-shadow;
        margin: 0 16px 0 0;
        padding: 0;
        &._inset {
          box-shadow: inset -3px -3px 4px #FFFFFF, inset 3px 3px 4px $color-shadow;
        }
        &:last-of-type {
            margin: 0;
        }
    }
    &__color {
        display: block;
        width: 28px;
        height: 28px;
        min-width: 28px;
        min-height: 28px;
        border: 2px solid;
        border-radius: 50%;
    }
  }
</style>
