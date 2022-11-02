<template lang="vue">
	<div class="page page-website">
		<div class="wrapper">
            <WebsiteBlock
			  v-for="block in blockData"
			  :key="block.name"
			  :video="block.video"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import WebsiteBlock from '@/components/Blocks/Brand/Website'

export default {
  layout: 'main',
  name: 'website-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'websitePage'
	}
  },
  components: {
    WebsiteBlock
  },
  methods: {
		...mapMutations({
			SET_PAGE: 'SET_PAGE'
		}),
	setPage (page) {
	  this.SET_PAGE(page)
	}
  },
	computed: {
		...mapState({
			blockData: state => state.content.contentData.brand.website.blocks
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Сайт' : 'Спортлайф | Сайт'
		}
	},
	mounted() {
		this.setPage(this.statePageName)
		this.$store.dispatch('closeModal', 'menu')
        this.enableBodyScroll()
	},
	unmounted() {
		this.setPage('')
	}
}
</script>

<style lang="scss" scoped>
    .page-website {
        padding-bottom: 102px;
        @include max-screen($desktop-sm){
            padding-bottom: 0;
        }
    }
</style>
