<template>
    <section class="section website-section">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-if="video" class="laptop-wrapper">
                    <div class="full-width-image-wrapper bg-color-black _laptop-wrapper" :class="video.wrapperClass">
                        <VideoElement
                            :className="'website-section__video bg-color-black mobile-cover'"
                            :path="'brand/website'"
                            :name="video.name[$store.state.lang]"
                            :ext="'mp4'"
                            :autoplay="true"
                            :playsinline="true"
                            :muted="true"
                            :loop="true"
                        />
                    </div>
                    <div v-if="video && video.link" class="section__buttonrow">
                        <LinkButton :url="video.link[$store.state.lang].url" :label="video.link[$store.state.lang].label">
                            <GlobeIcon />
                        </LinkButton>
                    </div>
                </div>
                <div v-if="image" class="laptop-wrapper">
                    <div class="full-width-image-wrapper bg-color-black _laptop-wrapper" :class="image.wrapperClass">
                        <ResponsiveImage
                            v-if="image"
                            :className="'website-section__image mobile-cover'"
                            :path="'brand/website'"
                            :name="image.imageName[$store.state.lang]"
                            :ext="'webp'"
                            :width="image.width"
                            :height="image.height"
                            :alt="image.imageAlt"
                        />
                    </div>
                    <div v-if="image && image.link" class="section__buttonrow">
                        <LinkButton :url="image.link[$store.state.lang].url" :label="image.link[$store.state.lang].label">
                            <GlobeIcon />
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VideoElement from '@/components/Utils/responsivevideo'
import LinkButton from '@/components/UI/link-btn'
import GlobeIcon from '@/components/UI/icons/globe'

export default {
  name: 'website-block',
  components: {
    VideoElement,
    GlobeIcon,
    LinkButton
  },
  props: {
    heading: Object,
    description: Array,
    video: Object,
    image: Object
  }
}
</script>

<style lang="scss" scoped>
    .website-section {
        .laptop-wrapper {
            padding: 118px 156px 176px 74px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            .full-width-image-wrapper {
                border-radius: 12px 12px 0 0;
            }
            .section__buttonrow {
                top: calc(50% - 44px)
            }
            &::after {
                content: '';
                position: absolute;
                top: 101px;
                left: 0;
                width: 752px;
                height: 456px;
                z-index: -1;
                pointer-events: none;
                background-image: url("@/assets/images/misc/website-bg.webp");
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100%;
            }
            @include max-screen($breakpoint-sm){
                padding: calc(72 / 375 * 100vw) calc(38 / 375 * 100vw) calc(89 / 375 * 100vw) calc(38 / 375 * 100vw);
                &::after {
                    top: calc(61 / 375 * 100vw);
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(312 / 375 * 100vw);
                    height: calc(192 / 375 * 100vw);
                }
            }
        }
    }
</style>
