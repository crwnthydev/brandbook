<template lang="vue">
	<div class="page page-smm">
		<div class="wrapper">
            <MediaBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :images="block.images"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
            />
            <section class="section _download-section col-lg-9">
                <DownloadPackBtn
                    :isContainsIcon="true"
                    :filePath="downloadData.path"
                    :fileName="downloadData.name"
                    :btnLabel="downloadData.label"
                    :formats="downloadData.formats"
                />
            </section>
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import DownloadPackBtn from '@/components/UI/download-pack-from-server'
import MediaBlock from '@/components/Blocks/Common/Media'

export default {
  layout: 'main',
  name: 'smm-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'smmPage'
	}
  },
  components: {
    DownloadPackBtn,
    MediaBlock
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
            blockData: state => state.content.contentData.brand.smm.blocks,
            downloadData: state => state.content.contentData.brand.smm.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | SMM' : 'Спортлайф | SMM'
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
