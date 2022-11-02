<template lang="vue">
    <section
        class="section tabs-section"
        v-bind:id="sectionId"
        :class="[
            sectionClass,
            {
                '_wallpapers-section': isDisplayStyled,
                '_phones-section': hasShadowEffect
            }
        ]"
        >
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-32" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <PaletteTabs v-if="images && images.length > 0" :cssClass="tabsElementCss">
                    <PaletteTab
                        v-for="(tab, index) in images"
                        :key="`tab-block-${ index }`"
                        :title="tab.tabData.title"
                        :colorValue="tab.tabData.colorValue"
                        :border="tab.tabData.border"
                    >
                        <div class="full-width-image-wrapper" :class="tab.wrapperClass">
                            <VideoElement
                                v-if="tab.isVideo"
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="tab.fileName[$store.state.lang]"
                                :ext="tab.fileExt"
                                :autoplay="true"
                                :playsinline="true"
                                :muted="true"
                                :loop="true"
                            />
                            <VectorImg
                                v-else-if="tab.isVector"
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="tab.fileName[$store.state.lang]"
                                :ext="'svg'"
                                :alt="tab.imgAlt"
                            />
                            <GifImg
                                v-else-if="tab.isGif"
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="tab.fileName[$store.state.lang]"
                                :ext="'gif'"
                                :alt="tab.imgAlt"
                            />
                            <ResponsiveImg
                                v-else
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="tab.fileName[$store.state.lang]"
                                :ext="tab.fileExt"
                                :alt="tab.imgAlt"
                            />
                        </div>
                        <div v-if="tab.isDownloadable" class="section__buttonrow">
                            <LinkBtn
                                v-if="tab.downloadByLink"
                                :className="`_dl-${ tab.downloadButtonLabel }`"
                                :url="tab.url" 
                                :label="tab.label"
                                >
                                <AiDl />
                                <PdfDl />
                                <ZipDl />
                                <PngDl />
                                <FigDl />
                            </LinkBtn>
                            <DownloadButton
                                v-else
                                :className="`_dl-${ tab.downloadButtonLabel }`"
                                :filePath="tab.downloadableFilePath"
                                :fileName="tab.downloadableFileName"
                                :fileExt="tab.downloadableFileExt"
                                :fileType="tab.downloadableFileType"
                            >
                                <AiDl />
                                <PdfDl />
                                <PngDl />
                                <ZipDl />
                                <FigDl />
                            </DownloadButton>
                        </div>
                    </PaletteTab>
                </PaletteTabs>
            </div>
        </div>
        <div v-if="mobileSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80 mobile-only"></div>
        <div v-if="desktopSectionDivider" class="section__divider min-content-width-872 col-lg-9 col-xs-12 mt-lg-96 mt-sm-80"></div>
    </section>
</template>

<script>
import VectorImg from '@/components/Utils/vectorimage'
import DownloadButton from '@/components/UI/download-from-server-btn'
import AiDl from '@/components/UI/icons/ai-dl'
import PngDl from '@/components/UI/icons/png-dl'
import ZipDl from '@/components/UI/icons/zip-dl'
import PdfDl from '@/components/UI/icons/pdf-dl'
import FigDl from '@/components/UI/icons/fig-dl'
import VideoElement from '@/components/Utils/responsivevideo'
import ResponsiveImg from '@/components/Utils/responsiveImage'
import LinkBtn from '@/components/UI/link-btn'
import PaletteTab from '@/components/Utils/palette-tab'
import PaletteTabs from '@/components/Utils/palette-tabs'
import GifImg from '@/components/Utils/gifimage'

export default {
  name: 'media-block',
  components: {
    VectorImg,
    DownloadButton,
    AiDl,
    PngDl,
    ZipDl,
    PdfDl,
    FigDl,
    VideoElement,
    ResponsiveImg,
    LinkBtn,
    PaletteTab,
    PaletteTabs,
    GifImg
  },
  props: {
    heading: Object,
    description: Array,
    images: Array,
    filesPath: String,
    isDisplayStyled: {
        type: Boolean,
        default: false
    },
    hasShadowEffect: {
        type: Boolean,
        default: false
    },
    sectionClass: {
        type: String,
        default: ''
    },
    sectionId: {
        type: String
    },
    desktopSectionDivider: {
        type: Boolean,
        default: false
    },
    mobileSectionDivider: {
        type: Boolean,
        default: false
    },
    tabsElementCss: String
  }
}

</script>

<style lang="scss" scoped>
    .tabs-section {
        .section__buttonrow {
            ._icon-ai-dl,
            ._icon-png-dl,
            ._icon-pdf-dl,
            ._icon-fig-dl,
            ._icon-zip-dl {
                display: none;
            }

            ._dl-zip {
                ._icon-zip-dl {
                    display: block;
                }
            }

            ._dl-ai {
                ._icon-ai-dl {
                    display: block;
                }
            }

            ._dl-png {
                ._icon-png-dl {
                    display: block;
                }
            }
            ._dl-pdf {
                ._icon-pdf-dl {
                    display: block;
                }
            }
            ._dl-fig {
                ._icon-fig-dl {
                    display: block;
                }
            }
        }
        .section__slider {
            .section__buttonrow {
                top: calc(50% - 52px)
            }
        }

        &._wallpapers-section {
                .palette-tab-component {
                    padding: 28px 28px 214px 28px;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 2px;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        pointer-events: none;
                        background-image: url("@/assets/images/misc/imac3.webp");
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 100%;
                    }
                    @include min-screen($breakpoint-sm){
                        margin-bottom: 31px;
                    }
                    @include max-screen($breakpoint-sm){
                        padding: calc(12.7 / 375 * 100vw) calc(12.7 / 375 * 100vw) calc(88.23 / 375 * 100vw) calc(12.7 / 375 * 100vw);
                        &::after {
                            top: calc(1.5 / 375 * 100vw);
                        }
                    }
                }
                .section__buttonrow {
                    top: calc(50% - 88px)
                }
            }

            &._phones-section {
                .palette-tab-component {
                    position: relative;
                    &::after {
                        content: '';
                        pointer-events: none;
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        background-image: url("@/assets/images/misc/smartphoneshadow.png");
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }
    }
</style>
