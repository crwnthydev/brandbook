<template lang="html">
  <div class="palette-tabs-component" :class="cssClass">
    <slot />
    <div class="palette-tabs-wrapper">
        <ul class="palette-tabs-component__list">
            <li
                v-for="(tab, index) in tabs"
                :key="tab.title"
                class="palette-tabs-component__item"
                :class="{'palette-tab__selected': (index === selectedIndex)}"
                @click="selectTab(index)"
            >
                <span
                    class="palette-tabs-component__color"
                    :style="{'background': tab.colorValue, 'border-color': tab.border}">
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-component',
  props: {
    cssClass: String
  },
  data () {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.palette-tabs-component {
  &__list {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 22px 0;
    @include max-screen($breakpoint-sm){
        padding: 24px 0;
        overflow-x: auto;
        max-width: 100vw;
        -ms-overflow-style: none!important;
        scrollbar-width: none!important;
        scrollbar-color: transparent!important;
        scrollbar-track-color: transparent!important;;
        &::-webkit-scrollbar {
            display: none!important;
        }
        &::-webkit-scrollbar-thumb {
            display: none!important;
        }
    }
  }

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
        cursor: pointer;
        &._inset {
            @include inset-box-shadow
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
        pointer-events: none;
    }

  .palette-tabs-wrapper {
    overflow-y: visible;
    @include max-screen($breakpoint-sm){
        overflow-x: auto;
        max-width: 100vw;
        -ms-overflow-style: none!important;
        scrollbar-width: none!important;
        position: relative;
        &:-webkit-scrollbar {
            display: none!important;
        }
    }
  }

  .palette-tab__selected {
    color: #A3876E;
    font-weight: bold;
    background: #F2F4F5;
    box-shadow: inset -3px -3px 4px #FFFFFF, inset 3px 3px 4px rgba(187, 195, 206, 0.35);
    border-radius: 24px;
  }
}
</style>
