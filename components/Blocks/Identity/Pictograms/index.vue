<template lang="vue">
    <section class="section picto-section">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12" v-html="heading[$store.state.lang]"></h2>
            <div v-if="imagesDesk && imagesDesk.length > 0" class="section__content min-content-width-872 col-lg-9 col-xs-12 picto-icons">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-for="image in imagesDesk" class="full-width-image-wrapper" :class="image.wrapperClass">
                    <VectorImg
                        :className="''"
                        :path="'identity/picto'"
                        :name="image.imageName[$store.state.lang]"
                        :ext="image.ext"
                        :width="image.width"
                        :height="image.height"
                        :alt="image.alt"
                    />
                    <div v-if="isdownloadableDesk" class="section__buttonrow">
                        <DownloadButton :filePath="'images/identity/logo'" :fileName="downloadableFileNameDesk" :fileExt="'ai'" :fileType="'image'">
                            <AiDl />
                        </DownloadButton>
                    </div>
                </div>
            </div>
            <div v-if="imagesMob && imagesMob.length > 0" class="section__content min-content-width-872 col-lg-9 col-xs-12 picto-icons-mob">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-for="image in imagesMob" class="full-width-image-wrapper" :class="image.wrapperClass">
                    <VectorImg
                        :className="'mobile-cover'"
                        :path="'identity/picto'"
                        :name="image.imageName[$store.state.lang]"
                        :ext="image.ext"
                        :width="image.width"
                        :height="image.height"
                        :alt="image.alt"
                    />
                    <div v-if="isdownloadableMob" class="section__buttonrow">
                        <DownloadButton :filePath="'images/identity/logo'" :fileName="downloadableFileNameMob" :fileExt="'ai'" :fileType="'image'">
                            <AiDl />
                        </DownloadButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VectorImg from '@/components/Utils/vectorimage'
import DownloadButton from '@/components/UI/download-from-server-btn'
import AiDl from '@/components/UI/icons/ai-dl'

export default {
  name: 'picto-block',
  components: {
    VectorImg,
    DownloadButton,
    AiDl
  },
  props: {
    heading: Object,
    description: Array,
    imagesDesk: Array,
    isdownloadableDesk: {
        type: Boolean,
        default: false
    },
    downloadableFileNameDesk: Object,
    imagesMob: Array,
    isdownloadableMob: {
        type: Boolean,
        default: false
    },
    downloadableFileNameMob: Object
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
