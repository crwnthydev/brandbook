<template lang="html">
    <div class="video-player-wrapper">
        <video
            class="video-player-element"
            ref="player"
            :class="className"
            :autoplay="autoplay"
            :playsinline="playsinline"
            :muted="muted"
            :controls="controls"
            :loop="loop"
            :width="width"
            :height="height"
            :preload="preload"
            :poster="srcPoster"
            @mouseenter="playVideo"
            @mouseover="playVideo"
            @mouseleave="pauseVideo"
            @click="mobileHandler"
            >
            <source v-if="srcSmall" :src="srcSmall" :type="typeAttr">
            <source v-if="srcMedium" :src="srcMedium" :type="typeAttr">
            <source v-if="srcLarge" :src="srcLarge" :type="typeAttr">
        </video>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'responsive-video-player',
  data() {
    return {
        windowWidth: '',
        srcSmall: '',
        srcMedium: '',
        srcLarge: '',
        isPlaying: false
    }
  },
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    playsinline: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    preload: {
      type: String,
      default: 'auto'
    },
    pathToPoster: {
        type: String,
        default: 'misc/default-video-poster-empty.webp'
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    name: String,
    ext: String,
    path: String,
    id: {
        type: String,
        required: true
    }
  },
  computed: {
    ...mapGetters({
        playingVideoId: 'playingVideoId'
    }),
    srcS () {
        let vid
        try {
            vid = require(`~/assets/videos/${this.path}/${this.name}-s.${this.ext}`)
        } catch (e) {
            vid = false
        }
        if (this.windowWidth <= '898') {
            return vid
        } else {
            return false
        }
    },
    srcM () {
        let vid
        try {
            vid = require(`~/assets/videos/${this.path}/${this.name}-m.${this.ext}`)
        } catch (e) {
            vid = false
        }
        if (this.windowWidth <= '1111') {
            return vid
        } else {
            return false
        }
    },
    srcL () {
        let vid
        try {
            vid = require(`~/assets/videos/${this.path}/${this.name}-l.${this.ext}`)
        } catch (e) {
            vid = false
        }
        if (this.windowWidth > '1111') {
            return vid
        } else {
            return false
        }
    },
    srcPoster () {
        let pic
        try {
            pic = require(`~/assets/images/${this.pathToPoster}`)
        } catch (e) {
            pic = require(`~/assets/images/misc/default-video-poster-empty.webp`)
        }
        return pic
    },
    typeAttr () {
        return `video/${this.ext}`
    }
  },
  watch: {
    playingVideoId () {
        if (this.playingVideoId !== this.id) {
            this.isPlaying = false
        }
    },
    isPlaying () {
        if (this.isPlaying && this.$refs.player.readyState >= 2) {
            this.$refs.player.play()
        } else if (!this.isPlaying && this.$refs.player.readyState >= 2) {
            this.$refs.player.pause()
        }
    }
  },
  methods: {
    ...mapMutations({
        SET_VIDEOS_PAUSED: 'SET_VIDEOS_PAUSED'
    }),
    getWidth () {
        this.windowWidth = window.innerWidth
    },
    setSources () {
        this.srcSmall = this.srcS
        this.srcMedium = this.srcM
        this.srcLarge = this.srcL
    },
    playVideo () {
        if (this.windowWidth > '898' && !this.isPlaying) {
            this.isPlaying = true
        }
    },
    pauseVideo () {
        if (this.windowWidth > '898') {
            this.isPlaying = false
        }
    },
    mobileHandler () {
        if (this.windowWidth <= '898' && this.isPlaying === true) {
            this.isPlaying = false
        } else if (this.windowWidth <= '898' && this.isPlaying === false) {
            this.SET_VIDEOS_PAUSED(this.id)
            this.isPlaying = true
        }
    }
  },
  mounted() {
    this.getWidth()
    this.setSources()
    this.$refs.player.load()
  }
}
</script>

<style lang="scss" scoped>

</style>
