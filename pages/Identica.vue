<template lang="vue">
	<div class="page page-identics">
		<div class="wrapper">
            <MediaBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :images="block.images"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
            />
            <MediaTabsBlock
                v-for="block in tabsBlockData"
                :key="block.name"
                :heading="block.heading"
                :images="block.images"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
                :isDisplayStyled="block.isDisplayStyled"
                :hasShadowEffect="block.hasShadowEffect"
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
import MediaTabsBlock from '@/components/Blocks/Common/MediaTabs'

export default {
  layout: 'main',
  name: 'identics-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'identicsPage'
	}
  },
  components: {
    DownloadPackBtn,
    MediaBlock,
    MediaTabsBlock
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
            blockData: state => state.content.contentData.brand.identica.blocks,
            tabsBlockData: state => state.content.contentData.brand.identica.tabsBlocks,
            downloadData: state => state.content.contentData.brand.identica.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Офисная айдентика' : 'Спортлайф | Офисная айдентика'
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
