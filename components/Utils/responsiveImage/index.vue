<template lang="html">
	<picture>
		<source v-if="srcS && srcSX" media="(max-width: 898px)" :src="srcS" :srcset="srcSX" type="image/webp">
		<source v-if="srcM && srcMX" media="(max-width: 1111px)" :src="srcM" :srcset="srcMX" type="image/webp">
        <source :src="srcL" :srcset="srcLX" type="image/webp">
		<img
            class="responsive-image"
            :class="className"
            :width="width"
            :height="height"
            :src="srcL"
            :srcset="srcLX"
            :alt="alt"
            :loading="isLazy"
        >
	</picture>
</template>

<script>
    export default {
      name: 'responsive-image',
      props: {
        path: String,
        name: String,
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
        alt: {
            type: String,
            default: 'image'
        },
        lazy: {
            type: Boolean,
            default: false
        }

      },
      computed: {
        isLazy () {
            return this.lazy ? 'lazy' : 'eager'
        },
        srcL () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-l.webp`)
            } catch (e) {
                img = false
            }
            return img
        },
        srcLX () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-l@2x.webp`)
            } catch (e) {
                img = false
            }
            return img
        },
        srcM () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-m.webp`)
            } catch (e) {
                img = false
            }
            return img
        },
        srcMX () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-m@2x.webp`)
            } catch (e) {
                img = false
            }
            return img
        },
        srcS () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-s.webp`)
            } catch (e) {
                img = false
            }
            return img
        },
        srcSX () {
            let img
            try {
                img = require(`~/assets/images/${this.path}/${this.name}-s@2x.webp`)
            } catch (e) {
                img = false
            }
            return img
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>
