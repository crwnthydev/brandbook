<template lang="vue">
    <section class="section animations-section">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12 mb-lg-32 mb-sm-32" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 relative col-lg-9 col-xs-12">
                <div v-if="description && description.length > 0" class="text-wrapper">
                    <p v-for="(text, index) in description" :key="index" class="section__description text" v-html="text[$store.state.lang]"></p>
                </div>
                <div v-if="videos && videos.length > 0" class="section__images">
                    <div class="video-wrapper  relative" v-for="(video, index) in videos" :key="index">
                        <div class="video-player-inner-wrapper border-radius-default overflow-hidden" :class="video.wrapperClass">
                            <VideoPlayer
                                :path="video.path"
                                :muted="video.muted"
                                :className="'mobile-cover'"
                                :name="video.name[$store.state.lang]"
                                :ext="video.ext"
                                :playsinline="true"
                                :loop="video.loop"
                                :pathToPoster="video.pathToPoster"
                                :id="video.id"
                            />
                        </div>
                        <div v-if="video.isDownloadable" class="section__buttonrow">
                            <DownloadButton
                                :className="`_dl-${ video.downloadButtonLabel }`"
                                :filePath="video.downloadableFilePath"
                                :fileName="video.downloadableFileName"
                                :fileExt="video.downloadableFileExt"
                                :fileType="video.downloadableFileType"
                            >
                                <AepDl />
                                <Mp4Dl />
                            </DownloadButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DownloadButton from '@/components/UI/download-from-server-btn'
import AepDl from '@/components/UI/icons/aep-dl'
import Mp4Dl from '@/components/UI/icons/mp4-dl'
import VideoPlayer from '@/components/Utils/videoplayer'

export default {
  name: 'exterior-block',
  components: {
    DownloadButton,
    AepDl,
    Mp4Dl,
    VideoPlayer
  },
  props: {
    heading: Object,
    description: Array,
    videos: Array,
    isdownloadable: {
        type: Boolean,
        default: false
    },
    downloadableFileName: Object
  }
}

</script>

<style lang="scss" scoped>
    .animations-section {
        .video-element {
            border-radius: 4px;
        }
        .section__buttonrow {
            ._icon-aep-dl,
            ._icon-mp4-dl {
                display: none;
            }

            ._dl-mp4 {
                ._icon-mp4-dl {
                    display: block;
                }
            }

            ._dl-aep {
                ._icon-aep-dl {
                    display: block;
                }
            }
        }
    }
</style>
