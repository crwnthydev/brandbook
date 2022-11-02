<template lang="vue">
	<div class="page page-animations">
		<div class="wrapper">
            <AnimationsBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :videos="block.videos"
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
import AnimationsBlock from '@/components/Blocks/Brand/Animations'

export default {
  layout: 'main',
  name: 'animations-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
    return {
      statePageName: 'animationsPage'
    }
  },
  components: {
    DownloadPackBtn,
    AnimationsBlock
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
            blockData: state => state.content.contentData.brand.animations.blocks,
            downloadData: state => state.content.contentData.brand.animations.dlPageMaterials
        }),
        pageTitle() {
            return this.$store.state.lang === 'ru' ? 'Спортлайф | Анимации и видео' : 'Спортлайф | Анимации и видео'
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
