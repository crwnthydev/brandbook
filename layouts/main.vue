<template>
  <div
    class="app _layout-main"
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
      <div v-if="pageData !== 'indexPage'" class="page-title-area">
        <p class="page-title" :class="titleClass" v-if="pageData" v-html="titleData[pageData]['ru']"></p>
      </div>
      <Nuxt />
      <Paging :currentPage="pageData" />
      <ScrollTop />
    </main>
    <Footer v-if="pageData !== 'indexPage'" />
  </div>
</template>

<script>
import Header from '@/components/LayoutElements/header'
import Footer from '@/components/LayoutElements/footer'
import Aside from '@/components/LayoutElements/aside'
import Paging from '@/components/Utils/paging'
import ScrollTop from '@/components/Utils/scroll-top'

import { mapState } from 'vuex'

export default {
    components: {
        Header,
        Aside,
        Paging,
        ScrollTop,
        Footer
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
        },
        titleClass() {
            return `title-${this.pageData}`
        }
    }
}
</script>

<style lang="scss" scoped>
.app {
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header content"
    "nav content";
  grid-template-columns: 256px auto;
  grid-template-rows: 80px auto;
  &._inner {
    grid-template-areas:
    "header header"
    "nav content"
    "footer footer";
  }
  .header {
    grid-area: header;
  }
  .footer-component {
    grid-area: footer;
  }
  .nav {
    grid-area: nav;
    border-right: 1px solid var(--border-aside);
    background-color: var(--background-color-aside);
  }
  .main {
    grid-area: content;
  }
  .page-title-area {
    width: 100%;
    height: 288px;
    background-color: $brand-color-1;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-position: -10px;
    background-size: cover;
    background-image: url("@/assets/images/common/headimage.webp");
    @include max-screen($breakpoint-sm) {
      height: 144px;
      background-position: center;
      background-image: url("@/assets/images/common/headimagemob.webp");
    }
    @media (min-resolution: 2dppx) {
      background-image: url("@/assets/images/common/headimage@2x.webp");
      @include max-screen($breakpoint-sm) {
        height: 144px;
        background-image: url("@/assets/images/common/headimagemob@2x.webp");
      }
    }

  }
  .page-title {
    font-family: $font-family-special;
    color: $color-white;
    font-style: italic;
    font-weight: 600;
    font-size: 50px;
    line-height: 115%;
    letter-spacing: 0.01em;
    padding-left: 144px;
    height: 163px;
    display: flex;
    align-items: flex-end;
    font-feature-settings: "ss01" 1;
    &.title-stylePage {
        @include max-screen ($breakpoint-sm){
            max-width: 180px;
        }
    }
    @include min-max($breakpoint-sm, $breakpoint-lg) {
        padding-left: calc(2% + var(--indent-col));
    }
    @include max-screen($breakpoint-sm) {
      height: 75px;
      font-size: 25px;
      padding-left: var(--indent-col);
    }
  }
  @include max-screen($breakpoint-md) {
    grid-template-areas:
      "header"
      "content";
    grid-template-columns: auto;
    grid-template-rows: 64px auto;
    &._inner {
      grid-template-areas:
        "header"
        "content"
        "footer";
    }
    .nav {
      display: none;
    }
  }
}
</style>
