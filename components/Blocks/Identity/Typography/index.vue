<template lang="vue">
    <section class="section typography-section">
        <div class="typography-wrapper">
            <div class="container">
                <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12" v-html="heading[$store.state.lang]"></h2>
                <div class="section__content min-content-width-872 col-lg-9 col-xs-12 mt-lg-32 mt-sm-32">
                    <div v-if="description && description.length > 0" class="text-wrapper">
                        <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                    </div>
                </div>
                <div v-for="example in examples" :key="example.name" class="typography-section__example-wrapper min-content-width-872 col-lg-9 col-sm-12" :class="example.wrapperClass">
                    <div class="typography-section__example">
                        <div class="summary-element mb-sm-16 mb-lg-24" v-html="example.name"></div>
                        <p v-for="text in example.textExamples" class="typography-section__ex-text" :class="text.css" v-html="text.symbols"></p>
                    </div>
                    <div class="section__buttonrow">
                        <DownloadButton
                            v-for="download in example.downloads"
                            :key="download.fileName"
                            :className="`_dl-${ download.fileExt }`"
                            :filePath="download.filePath"
                            :fileName="download.fileName"
                            :fileExt="download.fileExt" 
                            :fileType="'font'"
                            >
                            <TtfIcon />
                            <OtfIcon />
                            <WoffIcon />
                        </DownloadButton>
                    </div>
                </div>
            </div>
            <div v-if="mobileSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80 mobile-only"></div>
        </div>
        <div v-if="downloadPackData" class="typography-wrapper _typography-download">
            <DownloadPackBtn
                :isContainsIcon="true"
                :filePath="downloadPackData.filePath"
                :fileName="downloadPackData.fileName"
                :btnLabel="downloadPackData.btnLabel"
                :formats="downloadPackData.formats"
            />
            <div v-if="desktopSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80"></div>
        </div>
    </section>
</template>

<script>

import DownloadButton from '@/components/UI/download-from-server-btn'
import WoffIcon from '@/components/UI/icons/woff-dl'
import OtfIcon from '@/components/UI/icons/otf-dl'
import TtfIcon from '@/components/UI/icons/ttf-dl'
import DownloadPackBtn from '@/components/UI/download-pack-from-server'

export default {
  name: 'typography-block',
  components: {
    DownloadButton,
    DownloadPackBtn,
    WoffIcon,
    OtfIcon,
    TtfIcon
  },
  props: {
    heading: Object,
    description: Array,
    examples: Array,
    downloadPackData: Object,
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

<style scoped lang="scss">
.typography-section {
    &__example-wrapper {
        position: relative;
    }
    &__ex-text {
        font-family: $font-family-special;
        font-size: 32px;
        line-height: 125%;
        letter-spacing: 0.1em;
        color: $color-text-regular;
        @include max-screen($breakpoint-sm){
            font-size: 14px;
        }
    }

    .btn-component {
        &._download {
            width: 256px;
        }
    }
    .section__buttonrow {
        right: -265px;
        .download-btn {
            margin: 0 32px 0 0;

            .icon-ttf,
            .icon-woff,
            .icon-otf {
                display: none;
            }

            &._dl-ttf {
                .icon-ttf {
                    display: block;
                }
            }
            &._dl-woff {
                .icon-woff {
                    display: block;
                }
            }

            &._dl-otf {
                .icon-otf {
                    display: block;
                }
            }
        }
    }
    ._typography-download {
        padding-top: 96px;
        @include max-screen($breakpoint-sm) {
            display: none;
        }
    }
}
</style>
