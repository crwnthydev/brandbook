<template lang="vue">
	<div class="page page-exterior">
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

import MediaBlock from '@/components/Blocks/Common/Media'
import DownloadPackBtn from '@/components/UI/download-pack-from-server'

export default {
  layout: 'main',
  name: 'exterior-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'exteriorPage'
	}
  },
  components: {
    MediaBlock,
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
			blockData: state => state.content.contentData.brand.exterior.blocks,
            downloadData: state => state.content.contentData.brand.exterior.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Экстерьер' : 'Спортлайф | Экстерьер'
		},
        downloadPackName() {
            return `exterior`
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
