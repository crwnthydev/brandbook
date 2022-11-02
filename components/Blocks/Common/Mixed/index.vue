<template lang="vue">
    <section class="section mixed-section" :class="sectionClass" v-bind:id="sectionId">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-32" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12" v-if="contentItems && contentItems.length > 0">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-for="(item, index) in contentItems" :key="`mixed-content${ index }`" class="mixed-section__content-item">
                    <div class="mixed-section__text" :class="item.wrapperCss" v-if="item.isTextBlock">
                        <div v-for="(contentItem, index) in item.content" :key="`text-${ index }`" class="mixed-textblock">
                            <div v-if="contentItem.isText" class="text-wrapper"  :class="contentItem.cssClass">
                                <p v-for="(textItem, i) in contentItem.text" :key="`text-text${ i }`" class="section__description text" v-html="textItem[$store.state.lang]"></p>
                            </div>
                            <div v-else-if="contentItem.isUl" class="text-wrapper" :class="contentItem.cssClass">
                                <ul class="text-list">
                                    <li v-for="(li, i) in contentItem.text" :key="`li-${ index}-${ i }`" v-html="li[$store.state.lang]"></li>
                                </ul>
                            </div>
                            <div v-else-if="contentItem.isOl" class="text-wrapper" :class="contentItem.cssClass">
                                <ol class="text-list">
                                    <li v-for="(li, i) in contentItem.text" :key="`li-${ index}-${ i }`" v-html="li[$store.state.lang]"></li>
                                </ol>
                            </div>
                            <div v-else-if="contentItem.isSummary" class="text-wrapper" :class="contentItem.cssClass">
                                <div v-for="(text, i) in contentItem.text" :key="`summ-${ index}-${ i }`" class="summary-element" v-html="text[$store.state.lang]"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mixed-section__image" :class="item.wrapperCss" v-else-if="item.isImage">
                        <div v-if="item.images && item.images.length > 0" class="mixed-section__images">
                            <div v-for="(image, index) in item.images" :key="`m-block-${ index }`" class="mixed-section__image-wrapper>">
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
                                        <IconOk />
                                        <IconNotOk/>
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
                                    <IconOk />
                                    <IconNotOk/>
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
import IconOk from '@/components/UI/icons/icon-ok'
import IconNotOk from '@/components/UI/icons/icon-not-ok'

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
    LinkBtn,
    IconOk,
    IconNotOk
  },
  props: {
    heading: Object,
    description: Array,
    contentItems: Array,
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
    .mixed-section {

        .icon-ok,
        .icon-not-ok {
            display: none;
        }

        ._with-icon--ok {
            .icon-ok {
                display: block;
            }
        }
        ._with-icon--not-ok {
            .icon-not-ok {
                display: block;
            }
        }
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
