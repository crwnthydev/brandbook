<template lang="vue">
    <section class="section graphic-section" v-bind:id="sectionId" :class="sectionClass">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-32" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div  v-for="graphic in graphics" class="graphic__item">
                    <div v-for="(desc, index) in graphic.description" :key="`desc-${ index }`" class="graphic-description">
                        <div v-if="desc.isText" class="text-wrapper"  :class="desc.cssClass">
                            <p v-for="(text, i) in desc.text" :key="`desc-text${ i }`" class="section__description text" v-html="text[$store.state.lang]"></p>
                        </div>
                        <div v-else-if="desc.isUl" class="text-wrapper" :class="desc.cssClass">
                            <ul class="text-list">
                                <li v-for="(li, i) in desc.text" :key="`li-${ index}-${ i }`" v-html="li[$store.state.lang]"></li>
                            </ul>
                        </div>
                        <div v-else-if="desc.isOl" class="text-wrapper" :class="desc.cssClass">
                            <ol class="text-list">
                                <li v-for="(li, i) in desc.text" :key="`li-${ index}-${ i }`" v-html="li[$store.state.lang]"></li>
                            </ol>
                        </div>
                        <div v-else-if="desc.isSummary" class="text-wrapper" :class="desc.cssClass">
                            <div v-for="(text, i) in desc.text" :key="`summ-${ index}-${ i }`" class="summary-element" v-html="text[$store.state.lang]"></div>
                        </div>
                    </div>
                    <div v-if="graphic.items && graphic.items.length > 0" class="graphic" :class='graphic.imagesWrapperClass'>
                        <div class="graphic__wrapper" >
                            <div v-for="(item, index) in graphic.items" :key="`g-item-${index}`" class="graphic__item">
                                <div class="graphic__pair">
                                    <div v-for="image in item.images" class="graphic__img relative" :class="image.wrapperClass">
                                        <VectorImg
                                            :className="'mobile-cover'"
                                            :path="filesPath"
                                            :name="image.fileName[$store.state.lang]"
                                            :ext="'svg'"
                                            :alt="image.imgAlt"
                                        />
                                    </div>
                                </div>
                                <div class="graphic__title">
                                    <p v-html="item.ImagesBottomtext[$store.state.lang]"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-if="mobileSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80 mobile-only"></div>
        <div v-if="desktopSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80"></div>
    </section>
</template>

<script>

import VectorImg from '@/components/Utils/vectorimage'

export default {
  name: 'graphics-block',
  components: {
    VectorImg
  },
  props: {
    heading: Object,
    description: Array,
    graphics: Array,
    filesPath: String,
    sectionClass: {
        type: String,
        default: ''
    },
    sectionId: String,
    desktopSectionDivider: {
        type: Boolean,
        default: false
    },
    mobileSectionDivider: {
        type: Boolean,
        default: false
    }
  }
}

</script>

<style lang="scss" scoped>
    .graphic {
        &__wrapper {
            padding: 100px 72px 72px 72px;
            background-color: $color-bg-grey;
            border-radius: 4px;
            display: flex;
            flex-direction: row;
            @include max-screen($breakpoint-sm){
                padding: 48px 19px;
                flex-direction: column;
            }
        }
        &__item {
            margin: 0 32px 0 0;
            @include max-screen($breakpoint-sm){
                margin: 0 0 28px 0;
            }
            &:last-of-type {
                margin: 0;
            }
        }
        &__pair {
            display: flex;
            flex-direction: row;
            @include max-screen($breakpoint-sm){
                justify-content: space-around;
            }
        }
        &__img {
            display: block;
            width: 152px;
            height: 152px;
            margin: 0 16px 0 0;
            object-fit: cover;
            border-radius: 4px;
            @include max-screen($breakpoint-sm){
                max-width: 144px;
                height: 144px;
                width: 100%;
            }
            &:last-of-type {
                margin: 0;
            }
        }
        &__title {
            color: #848E99;
            font-size: 14px;
            line-height: 20px;
            width: 100%;
            text-align: center;
            margin: 16px 0 0 0;
        }
        .btn-component {
            &._download {
                width: 288px;
            }
        }
    }
</style>
