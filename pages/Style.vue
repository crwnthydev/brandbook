<template lang="vue">
	<div class="page page-style">
		<div class="wrapper">
            <LinksBlock :links="linksData"/>
            <GraphicsBlock
                v-for="block in graphicsBlockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :graphics="block.graphics"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
                :sectionId="block.sectionId"
            />
            <MixedBlock
                v-for="block in mixedBlockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :contentItems="block.contentItems"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
                :sectionId="block.sectionId"
                :desktopSectionDivider="block.desktopSectionDivider"
            />
            <MediaBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :images="block.images"
                :filesPath="block.filesPath"
                :sectionClass="block.sectionClass"
                :sectionId="block.sectionId"
                :desktopSectionDivider="block.desktopSectionDivider"
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

import LinksBlock from '@/components/Blocks/Common/Anchor-links'
import GraphicsBlock from '@/components/Blocks/Common/Graphics'
import MixedBlock from '@/components/Blocks/Common/Mixed'
import MediaBlock from '@/components/Blocks/Common/Media'
import DownloadPackBtn from '@/components/UI/download-pack-from-server'

export default {
  layout: 'main',
  name: 'style-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'stylePage'
	}
  },
  components: {
    LinksBlock,
    GraphicsBlock,
    MixedBlock,
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
            linksData: state => state.content.contentData.identity.style.pageLinks,
            graphicsBlockData: state => state.content.contentData.identity.style.graphicsBlocks,
            mixedBlockData: state => state.content.contentData.identity.style.mixedBlocks,
            blockData: state => state.content.contentData.identity.style.blocks,
            downloadData: state => state.content.contentData.identity.style.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Фирменный стиль' : 'Спортлайф | Фирменный стиль'
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
.page-style {
    .btn-component {
            &._download {
                width: 288px;
            }
        }
}
</style>
