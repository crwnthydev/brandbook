<template lang="vue">
    <div class="index">
      <Button :isContainsIcon="isContainsIcon" />
      <SearchFuse />
      <Tabs>
        <Tab title="HEX">Tab 1 Content</Tab>
        <Tab title="RGB">Tab 2 Content</Tab>
        <Tab title="CMYK">Tab 3 Content</Tab>
        <Tab title="Pantone">Tab 4 Content</Tab>
        <Tab title="RAL">Tab 5 Content</Tab>
        <Tab title="Oracle">Tab 6 Content</Tab>
      </Tabs>
      <CustomSelect
        :options="['go', 'python', 'rust', 'javascript']"
        :default="'go'"
        class="select"
        @input="throwTest($event)"
      />
    </div>
  </template>
  
  <script>
  import Button from '@/components/UI/btn'
  import DownloadImgButton from '@/components/UI/download-img-btn'
  import Download from '@/components/UI/icons/download'
  import VueFuse from '@/components/Functional/search'
  import Tab from '@/components/Utils/tab'
  import Tabs from '@/components/Utils/tabs'
  import SearchFuse from '@/components/Functional/search-fuse'
  import CustomSelect from '@/components/UI/custom-select'
  
  import { mapMutations } from 'vuex'
  
  export default {
    layout: 'main',
    name: 'index-page',
    head() {
      return {
        title: this.pageTitle
      }
    },
    components: {
      VueFuse,
      Button,
      DownloadImgButton,
      Download,
      Tabs,
      Tab,
      SearchFuse,
      CustomSelect
    },
    data () {
      return {
        results: [],
        isContainsIcon: true,
        statePageName: 'indexPage'
      }
    },
    methods: {
      ...mapMutations({
              SET_PAGE: 'SET_PAGE'
          }),
      setPage (page) {
        this.SET_PAGE(page)
      },
      handleResults (r) {
        this.results = r
      },
      throwTest(value) {
        console.log(value)
      }
    },
    computed: {
      pageTitle() {
          return this.$store.state.lang === 'ru' ? 'Спортлайф' : 'Спортлайф'
      }
    },
    mounted() {
          this.setPage(this.statePageName)
      },
      unmounted() {
          this.setPage('')
      }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  