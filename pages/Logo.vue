<template lang="vue">
	<div class="page page-logo">
		<div class="wrapper">
            <LangSwitch />
            <MediaTabsBlock
                v-for="block in tabsBlockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :images="block.images"
                :tabsElementCss="block.tabsElementCss"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
            />
            <MediaBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
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

import LangSwitch from '@/components/Functional/lang-switch'
import DownloadPackBtn from '@/components/UI/download-pack-from-server'
import MediaBlock from '@/components/Blocks/Common/Media'
import MediaTabsBlock from '@/components/Blocks/Common/MediaTabs'

export default {
  layout: 'main',
  name: 'logo-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'logoPage'
	}
  },
  components: {
    LangSwitch,
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
            blockData: state => state.content.contentData.identity.logo.blocks,
            tabsBlockData: state => state.content.contentData.identity.logo.tabsBlocks,
            downloadData: state => state.content.contentData.identity.logo.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Логотип' : 'Спортлайф | Логотип'
		},
        downloadPackName() {
            return `logo-${this.$store.state.lang}`
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
