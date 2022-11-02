<template lang="html">
    <video
        class="video-element"
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
        >
        <source v-if="srcSmall" :src="srcSmall" :type="typeAttr">
        <source v-if="srcMedium" :src="srcMedium" :type="typeAttr">
        <source v-if="srcLarge" :src="srcLarge" :type="typeAttr">
    </video>
</template>

<script>
export default {
  name: 'responsive-video',
  data() {
    return {
        windowWidth: '',
        srcSmall: '',
        srcMedium: '',
        srcLarge: ''
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
    ext: {
        type: String,
        default: 'mp4'
    },
    path: String
  },
  computed: {
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
  methods: {
    getWidth() {
        this.windowWidth = window.innerWidth
    },
    setSources() {
        this.srcSmall = this.srcS
        this.srcMedium = this.srcM
        this.srcLarge = this.srcL
    }
  },
  mounted() {
    this.getWidth()
    this.setSources()
  }
}
</script>

<style lang="scss" scoped>

</style>
