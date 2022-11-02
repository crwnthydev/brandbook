<template lang="vue">
    <section class="section rules-section">
        <div class="container">
            <h2 class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-24" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div class="rules-grid mt-lg-48 mt-sm-48">
                    <div v-for="item in gridItems" :key="item.id" class="rules-grid__item" :class="item.cssClass">
                        <QuoteMarkGreen />
                        <QuoteMarkRed />
                        <IconOk />
                        <IconNotOk />
                        <span class="rules-grid__text"v-html="item.text"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import IconOk from '@/components/UI/icons/icon-ok'
import IconNotOk from '@/components/UI/icons/icon-not-ok'
import QuoteMarkGreen from '@/components/UI/icons/quotemark-green'
import QuoteMarkRed from '@/components/UI/icons/quotemark-red'

export default {
  name: 'rules-block',
  components: {
    IconOk,
    IconNotOk,
    QuoteMarkGreen,
    QuoteMarkRed
  },
  props: {
    heading: Object,
    description: Array,
    gridItems: {
        type: Array,
        required: true
    }
  }
}

</script>

<style lang="scss" scoped>
.rules-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    &__item {
        max-width: 400px;
        width: 100%;
        height: 128px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        overflow: hidden;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            pointer-events: none;
        }
        .icon-ok,
        .icon-not-ok {
            position: absolute;
            right: 0;
            top: 0;
            display: none;
        }
        .quotemark {
            position: absolute;
            left: 9px;
            top: 10px;
            display: none;
        }
        &._ok {
            .icon-ok {
                display: block;
            }
            ._qm-green {
                display: block;
            }
            &:before {
                background: linear-gradient(0deg, rgba(84, 226, 124, 0.25), rgba(84, 226, 124, 0.25)), $color-white;
            }
        }
        &._not-ok {
            .icon-not-ok {
                display: block;
            }
            ._qm-red {
                display: block;
            }
            &:before {
                background: linear-gradient(0deg, rgba(255, 76, 76, 0.15), rgba(255, 76, 76, 0.15)), $color-white;
            }
        }

        @include max-screen($breakpoint-sm){
            max-width: none;
        }
    }

    &__text {
        font-size: 20px;
        line-height: 32px;
    }

    @include max-screen($breakpoint-sm){
        grid-template-columns: 1fr;
    }
}
</style>
