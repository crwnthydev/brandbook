<template>
  <div
    class="app _layout-default"
    :class="[
        currentBrowser,
        currentOs,
        {
            _ru: langData === 'ru',
            _en: langData === 'en',
            _inner: pageData !== 'indexPage'
        }
    ]"
    >
    <Header :isMainPage="$store.state.currentPage === 'indexPage'" class="header" />
    <Aside class="nav" />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '@/components/LayoutElements/header'
import Aside from '@/components/LayoutElements/aside'

import { mapState } from 'vuex'

export default {
    components: {
        Header,
        Aside
    },
    computed: {
        ...mapState({
            titleData: state => state.titles,
            langData: state => state.lang,
            pageData: state => state.currentPage
        }),
        currentBrowser() {
            return `_browser-${this.$ua._parsed.name.toLowerCase()}`
        },
        currentOs() {
            return `_os-${this.$ua._parsed.os.toLowerCase().replace(/\s/g, '_')}`
        }
    }
}
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  max-height: -webkit-fill-available;
  grid-template-areas:
    "header content"
    "nav content";
  grid-template-columns: 256px auto;
  grid-template-rows: 80px auto;
  .header {
    grid-area: header;
  }
  .nav {
    grid-area: nav;
    border-right: 1px solid var(--border-aside);
    background-color: var(--background-color-aside);
    @include min-screen($breakpoint-sm){
        overflow: auto;
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
  .main {
    grid-area: content;
  }
  &._layout-default {
    background-color: $brand-color-1;
    overflow: hidden;
    height: 100vh;
    max-height: -webkit-fill-available;
    .main {
        @include max-screen($breakpoint-md) {
            position: relative;
            z-index: 1;
        }
    }
  }
  @include max-screen($breakpoint-md) {
    grid-template-areas:
      "header"
      "content";
    grid-template-columns: auto;
    grid-template-rows: 64px auto;
    .nav {
      display: none;
    }
  }
}
</style>
