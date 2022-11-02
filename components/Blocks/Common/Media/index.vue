<template lang="vue">
    <section class="section media-section" v-bind:id="sectionId" :class="sectionClass">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-32" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-if="images && images.length > 0" class="media-section__images">
                    <div v-for="(image, index) in images" :key="`i-block-${ index }`" class="media-section__image-wrapper>">
                        <div v-if="image.isSlider" class="section__slider relative" :class="image.sliderClass">
                            <ssr-carousel :show-arrows="true" :gutter="20">
                                <div v-for="slide in image.slides" class="slide">
                                    <div class="full-width-image-wrapper" :class="slide.wrapperClass">
                                        <VideoElement
                                            v-if="slide.isVideo"
                                            :className="'mobile-cover'"
                                            :path="filesPath"
                                            :name="slide.fileName[$store.state.lang]"
                                            :ext="slide.fileExt"
                                            :autoplay="true"
                                            :playsinline="true"
                                            :muted="true"
                                            :loop="true"
                                        />
                                        <VectorImg
                                            v-else-if="slide.isVector"
                                            :className="'mobile-cover'"
                                            :path="filesPath"
                                            :name="slide.fileName[$store.state.lang]"
                                            :ext="'svg'"
                                            :alt="slide.imgAlt"
                                        />
                                        <ResponsiveImg
                                            v-else
                                            :className="'mobile-cover'"
                                            :path="filesPath"
                                            :name="slide.fileName[$store.state.lang]"
                                            :ext="slide.fileExt"
                                            :alt="slide.imgAlt"
                                        />
                                    </div>
                                </div>
                            </ssr-carousel>
                            <div v-if="image.isDownloadable" class="section__buttonrow">
                                <LinkBtn
                                    v-if="image.downloadByLink"
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :url="image.url" 
                                    :label="image.label"
                                    >
                                    <AiDl />
                                    <PdfDl />
                                    <ZipDl />
                                    <PngDl />
                                    <FigDl />
                                </LinkBtn>
                                <DownloadButton
                                    v-else
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :filePath="image.downloadableFilePath"
                                    :fileName="image.downloadableFileName"
                                    :fileExt="image.downloadableFileExt"
                                    :fileType="image.downloadableFileType"
                                >
                                    <AiDl />
                                    <PdfDl />
                                    <ZipDl />
                                    <PngDl />
                                    <FigDl />
                                </DownloadButton>
                            </div>
                        </div>
                        <div v-else-if="image.isGallery" class="images-row" :class="image.galleryWrapperClass">
                            <div v-for="frame in image.gallery" class="images-row__image-wrapper relative" :class="frame.wrapperClass">
                                <VideoElement
                                    v-if="frame.isVideo"
                                    :className="'mobile-cover'"
                                    :path="filesPath"
                                    :name="frame.fileName[$store.state.lang]"
                                    :ext="frame.fileExt"
                                    :autoplay="true"
                                    :playsinline="true"
                                    :muted="true"
                                    :loop="true"
                                />
                                <VectorImg
                                    v-else-if="frame.isVector"
                                    :className="'mobile-cover'"
                                    :path="filesPath"
                                    :name="frame.fileName[$store.state.lang]"
                                    :ext="'svg'"
                                    :alt="frame.imgAlt"
                                />
                                <ResponsiveImg
                                    v-else
                                    :className="'mobile-cover'"
                                    :path="filesPath"
                                    :name="frame.fileName[$store.state.lang]"
                                    :ext="frame.fileExt"
                                    :alt="frame.imgAlt"
                                />
                            </div>
                            <div v-if="image.isDownloadable" class="section__buttonrow">
                                <LinkBtn
                                    v-if="image.downloadByLink"
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :url="image.url" 
                                    :label="image.label"
                                    >
                                    <AiDl />
                                    <PdfDl />
                                    <ZipDl />
                                    <PngDl />
                                    <FigDl />
                                </LinkBtn>
                                <DownloadButton
                                    v-else
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :filePath="image.downloadableFilePath"
                                    :fileName="image.downloadableFileName"
                                    :fileExt="image.downloadableFileExt"
                                    :fileType="image.downloadableFileType"
                                >
                                    <AiDl />
                                    <PdfDl />
                                    <ZipDl />
                                    <PngDl />
                                    <FigDl />
                                </DownloadButton>
                            </div>
                        </div>
                        <div v-else class="full-width-image-wrapper" :class="image.wrapperClass">
                            <VideoElement
                                v-if="image.isVideo"
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="image.fileName[$store.state.lang]"
                                :ext="image.fileExt"
                                :autoplay="true"
                                :playsinline="true"
                                :muted="true"
                                :loop="true"
                            />
                            <VectorImg
                                v-else-if="image.isVector"
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="image.fileName[$store.state.lang]"
                                :ext="'svg'"
                                :alt="image.imgAlt"
                            />
                            <ResponsiveImg
                                v-else
                                :className="'mobile-cover'"
                                :path="filesPath"
                                :name="image.fileName[$store.state.lang]"
                                :ext="image.fileExt"
                                :alt="image.imgAlt"
                            />
                            <div v-if="image.isDownloadable" class="section__buttonrow">
                                <LinkBtn
                                    v-if="image.downloadByLink"
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :url="image.url" 
                                    :label="image.label"
                                    >
                                    <AiDl />
                                    <PdfDl />
                                    <ZipDl />
                                    <PngDl />
                                    <FigDl />
                                </LinkBtn>
                                <DownloadButton
                                    v-else
                                    :className="`_dl-${ image.downloadButtonLabel }`"
                                    :filePath="image.downloadableFilePath"
                                    :fileName="image.downloadableFileName"
                                    :fileExt="image.downloadableFileExt"
                                    :fileType="image.downloadableFileType"
                                >
                                    <AiDl />
                                    <PdfDl />
                                    <PngDl />
                                    <ZipDl />
                                    <FigDl />
                                </DownloadButton>
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
import DownloadButton from '@/components/UI/download-from-server-btn'
import AiDl from '@/components/UI/icons/ai-dl'
import PngDl from '@/components/UI/icons/png-dl'
import ZipDl from '@/components/UI/icons/zip-dl'
import PdfDl from '@/components/UI/icons/pdf-dl'
import FigDl from '@/components/UI/icons/fig-dl'
import VideoElement from '@/components/Utils/responsivevideo'
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
import ResponsiveImg from '@/components/Utils/responsiveImage'
import LinkBtn from '@/components/UI/link-btn'

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
    SsrCarousel,
    ssrCarouselCss,
    ResponsiveImg,
    LinkBtn
  },
  props: {
    heading: Object,
    description: Array,
    images: Array,
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
    .media-section {
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
    }
</style>
