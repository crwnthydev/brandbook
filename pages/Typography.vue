<template lang="vue">
	<div class="page page-typography">
		<div class="wrapper">
            <section v-for="intro in introData" :key="intro.name" class="section typography-section">
                <div class="container">
                    <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                        <div class="relative" :class="intro.image.wrapperClass">
                            <ResponsiveImg
                                :className="'mobile-cover'"
                                :path="'identity/typo'"
                                :name="intro.image.name[$store.state.lang]"
                                :ext="'jpg'"
                                :alt="intro.image.imageAlt"
                            />
                        </div>
                    </div>
                    <div v-if="intro.text && intro.text.length > 0" class="section__content min-content-width-872 col-lg-9 col-xs-12">
                        <p v-for="(text, index) in intro.text" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                    </div>
                </div>
            </section>
            <TypographyBlock
                v-for="block in blockData"
                :key="block.name"
                :heading="block.heading"
                :description="block.description"
                :examples="block.examples"
                :downloadPackData="block.downloadPackData"
                :desktopSectionDivider="block.desktopSectionDivider"
                :mobileSectionDivider="block.mobileSectionDivider"
            />
		</div>
	</div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import TypographyBlock from '@/components/Blocks/Identity/Typography'
import ResponsiveImg from '@/components/Utils/responsiveImage'


export default {
  layout: 'main',
  name: 'typo-page',
  components: {
    TypographyBlock,
    ResponsiveImg
  },
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'typoPage'
	}
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
            introData: state => state.content.contentData.identity.typography.intros,
			blockData: state => state.content.contentData.identity.typography.blocks
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Типографика' : 'Спортлайф | Типографика'
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
