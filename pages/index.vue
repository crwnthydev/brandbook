<template lang="vue">
  <div class="index relative">
    <LogoBig />
    <VectorDesk />
    <VectorMob />
    <p class="index__text _desktop">Полная коллекция<br>правил, ресурсов<br>и&nbsp;материалов<br>для создания<br>дизайн-макетов</p>
    <p class="index__text _mobile">Полная коллекция правил,<br>ресурсов и&nbsp;материалов<br>для создания дизайн-макетов</p>
  </div>
</template>

<script>

import LogoBig from '@/components/UI/icons/logo-big'
import VectorDesk from '@/components/UI/vectors/index-page-vector'
import VectorMob from '@/components/UI/vectors/index-page-vector-mob'
import { mapMutations } from 'vuex'

export default {
  layout: 'default',
  name: 'index-page',
  head() {
    return {
      title: this.pageTitle
	}
  },
  data () {
    return {
      statePageName: 'indexPage'
    }
  },
  components: {
    LogoBig,
    VectorDesk,
    VectorMob
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
    pageTitle() {
        return this.$store.state.lang === 'ru' ? 'Спортлайф' : 'Спортлайф'
    }
  },
  mounted() {
		this.setPage(this.statePageName)
	},
	unmounted() {
		this.setPage('')
	}
}
</script>

<style lang="scss" scoped>
    .index {
        min-height: 100vh;
        overflow-y: hidden;

        &__text {
            width: 100%;
            max-width: 327px;
            font-family: $font-family-special;
            font-style: italic;
            font-size: calc(32 / 1920 * 100vw);
            line-height: 110%;
            color: $color-white;
            font-weight: 400;
            pointer-events: none;
            position: absolute;
            right: 10.58%;
            bottom: 20.7%;
            &._mobile {
                display: none;
            }
            @include max-screen($breakpoint-md) {
                width: auto;
                right: auto;
                left: 8.53%;
                bottom: 262px;
                font-size: calc(20 / 375 * 100vw);
                max-width: none;
                white-space: nowrap;
                &._mobile {
                    display: inline;
                }
                &._desktop {
                    display: none;
                }
            }
            @include max-screen($breakpoint-xs) {
                bottom: 43.8%;
            }
            @include min-screen(2100px) {
                font-size: 36px;
            }
        }

        .logo-big {
            width: 83%;
            height: auto;
            position: absolute;
            left: 8.3%;
            bottom: 45%;
            pointer-events: none;
            z-index: 1;
            @include max-screen($breakpoint-md) {
                width: 74.4%;
                left: 8.53%;
                bottom: 60.14%;
            }
        }

        .index-page-vector {
            pointer-events: none;
            &._desktop {
                width: 88.46%;
                height: auto;
                position: absolute;
                left: 2.8%;
                top: 50%;
                transform: translate(0, -50%);
                @include max-screen($breakpoint-md) {
                    display: none;
                }
            }
            &._mobile {
                display: none;
                width: 100%;
                height: auto;
                max-height: calc(100% + 64px);
                left: 0;
                right: 0;
                top: -64px;
                position: absolute;
                @include max-screen($breakpoint-md) {
                    display: block;
                }
            }
        }
        @include max-screen($breakpoint-md) {
            min-height: calc(100vh - 64px);
            overflow-y: visible;
        }
    }
</style>
