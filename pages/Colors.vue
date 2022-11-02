<template lang="vue">
	<div class="page page-colors">
		<div class="wrapper">
            <Tabs>
            <Tab v-for="tab in blockData" :key="tab.tabTitle" :title="tab.tabTitle">
                <ColorsBlock
                    v-for="block in tab.tabBlocks"
                    :key="block.name"
                    :heading="block.heading"
                    :description="block.description"
                    :blockType="block.type"
                    :colors="block.colorItems"
                />
            </Tab>
        </Tabs>
		</div>
	</div>
</template>

<script>
import ColorsBlock from '@/components/Blocks/Identity/Colors'
import Tab from '@/components/Utils/tab'
import Tabs from '@/components/Utils/tabs'

import { mapState, mapMutations } from 'vuex'

export default {
  layout: 'main',
  name: 'colors-page',
  components: {
    ColorsBlock,
    Tabs,
    Tab
  },
  head() {
    return {
      title: this.pageTitle
	}
  },
  data() {
	return {
	  statePageName: 'colorsPage'
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
			blockData: state => state.content.contentData.identity.colors.tabs
		}),
		pageTitle() {
			return this.$store.state.lang === 'ru' ? 'Спортлайф | Цвета' : 'Спортлайф | Цвета'
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
    .page-colors {
        .tab-component {
            padding-top: 96px;
            @include max-screen($breakpoint-xs){
                padding-top: 40px;
            }
            .section {
                &:last-child {
                    padding-bottom: 0;
                }
            }
        }
    }
</style>
