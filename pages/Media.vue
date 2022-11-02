<template lang="vue">
	<div class="page page-media">
		<div class="wrapper">
            <MediaBlock
                v-for="block in blockData"
                :key="block.name"
                :images="block.images"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
            />
            <section class="section _download-section col-lg-9">
                <DownloadPackBtn
                    :isContainsIcon="true"
                    :link="downloadData.link"
                    :btnLabel="downloadData.label"
                    :formats="downloadData.formats"
                />
            </section>
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import DownloadPackBtn from '@/components/UI/download-direct-link'
import MediaBlock from '@/components/Blocks/Common/Media'

export default {
  layout: 'main',
  name: 'media-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'mediaPage'
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
			blockData: state => state.content.contentData.identity.media.blocks,
            downloadData: state => state.content.contentData.identity.media.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Фотостиль' : 'Спортлайф | Фотостиль'
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
