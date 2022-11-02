<template lang="html">
  <div class="tabs-component">
    <div class="tabs-wrapper">
        <ul class="list">
        <li
            v-for="(tab, index) in tabs"
            :key="tab.title"
            class="item"
            :class="{'tab__selected': (index === selectedIndex)}"
            @click="selectTab(index)"
        >
            {{ tab.title }}
        </li>
        </ul>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'tabs-component',
  props: {
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
.tabs-component {
  .list {
    display: flex;
    list-style: none;
    @include max-screen($breakpoint-sm){
        padding-bottom: 24px;
        overflow-x: auto;
        max-width: 100vw;
        -ms-overflow-style: none!important;
        scrollbar-width: none!important;
        scrollbar-color: transparent!important;
        scrollbar-track-color: transparent!important;
        padding-right: 20px;
        padding-left: 20px;
        &::-webkit-scrollbar {
            display: none!important;
        }
        &::-webkit-scrollbar-thumb {
            display: none!important;
        }
    }
  }

  .tabs-wrapper {
    @include max-screen($breakpoint-sm){
        overflow-x: auto;
        max-width: 100vw;
        -ms-overflow-style: none!important;
        scrollbar-width: none!important;
        position: relative;
        &:-webkit-scrollbar {
            display: none!important;
        }
        &::before {
            content: '';
            position:absolute;
            left: 0;
            top: 0;
            width: 32px;
            pointer-events: none;
            height: 40PX;
            background: linear-gradient(86deg, rgba(242, 244, 245,1) 0%, rgba(80,115,152,0) 60%, rgba(242, 244, 245,0) 100%);
            z-index: 2;
        }
        &::after {
            content: '';
            position:absolute;
            right: 0;
            top: 0;
            width: 32px;
            pointer-events: none;
            height: 40PX;
            background: linear-gradient(270deg, rgba(242, 244, 245,1) 0%, rgba(80,115,152,0) 60%, rgba(242, 244, 245,0) 100%);
            z-index: 2;
        }
    }
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 76px;
    min-height: 40px;
    font-size: 13px;
    line-height: 1.38;
    letter-spacing: 0.02em;
    color: #697480;
    background: #F2F4F5;
    @include tab-box-shadow;
    border-radius: 24px;
    padding: 11px 24px;
    margin: 0 24px 0 0;
    cursor: pointer;
    &:last-of-type {
        margin: 0;
    }
  }

  .tab__selected {
    color: #A3876E;
    font-weight: bold;
    background: #F2F4F5;
    @include inset-box-shadow;
  }
}
</style>
