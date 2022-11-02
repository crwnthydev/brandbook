<template lang="vue">
	<div class="page page-test">
		<div class="wrapper">
            <SearchFuse />
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import SearchFuse from '@/components/Functional/search-fuse'

export default {
  layout: 'main',
  name: 'test-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'testPage'
	}
  },
  components: {
    SearchFuse
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
            blockData: state => state.content.contentData.identity.logo.blocks
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'TESTPAGE' : 'TESTPAGE'
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

</style>
