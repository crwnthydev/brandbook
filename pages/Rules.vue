<template lang="vue">
	<div class="page page-illustrations">
		<div class="wrapper">
            <RulesBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :gridItems="block.gridItems"
            />
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import RulesBlock from '@/components/Blocks/Identity/Rules'
import DownloadPackBtn from '@/components/UI/download-pack-from-server'

export default {
  layout: 'main',
  name: 'rules-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'rulesPage'
	}
  },
  components: {
    RulesBlock,
    DownloadPackBtn
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
			blockData: state => state.content.contentData.identity.rules.blocks
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Правила коммуникаций' : 'Спортлайф | Правила коммуникаций'
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
