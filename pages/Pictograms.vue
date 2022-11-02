<template lang="vue">
	<div class="page page-picto">
		<div class="wrapper">
            <PictoBlock
			  v-for="block in blockData"
			  :key="block.name"
              :description="block.description"
			  :imagesDesk="block.imagesDesk"
              :imagesMob="block.imagesMob"
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
import PictoBlock from '@/components/Blocks/Identity/Pictograms'

export default {
  layout: 'main',
  name: 'picto-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'pictoPage'
	}
  },
  components: {
    DownloadPackBtn,
    PictoBlock
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
			blockData: state => state.content.contentData.identity.pictograms.blocks,
            downloadData: state => state.content.contentData.identity.pictograms.dlPageMaterials
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Пиктограммы' : 'Спортлайф | Пиктограммы'
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
    .picto-section {
        .picto-icons {
            @include max-screen($breakpoint-sm) {
                display: none;
            }
        }
        .picto-icons-mob {
            display: none;
            @include max-screen($breakpoint-sm) {
                display: block;
            }
        }
    }
</style>
