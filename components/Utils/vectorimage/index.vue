<template lang="html">
	<picture>
        <source v-if="srcNormal" :src="srcNormal" type="image/svg">
		<img
            @click="updateComponent"
            class="svg-image"
            :class="className"
            :width="width"
            :height="height"
            :src="srcNormal"
            :alt="alt"
        >
	</picture>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'vector-image',
      data() {
        return {
            windowWidth: '',
            srcSmall: '',
            srcNormal: ''
        }
      },
      props: {
        path: String,
        name: String,
        className: {
            type: String,
            default: '100%'
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
            default: 'vector-image'
        }
      },
      computed: {
            ...mapGetters({
                langUpdate: 'langUpdate'
            }),
            srcS () {
                let img
                try {
                    img = require(`~/assets/images/${this.path}/${this.name}-s.svg`)
                } catch (e) {
                    img = false
                }
                if (this.windowWidth <= '898') {
                    return img
                } else {
                    return false
                }
            },
            srcN () {
                let img
                try {
                    img = require(`~/assets/images/${this.path}/${this.name}.svg`)
                } catch (e) {
                    img = false
                }
                if (this.windowWidth > '1') {
                    return img
                } else {
                    return false
                }
            }
        },
        methods: {
            getWidth() {
                this.windowWidth = window.innerWidth
            },
            setSources() {
                this.srcSmall = this.srcS
                this.srcNormal = this.srcN
            },
            updateComponent() {
                this.$forceUpdate()
            }
        },
        watch: {
            langUpdate() {
                this.updateComponent()
            }
        },
        mounted() {
            this.getWidth()
            this.setSources()
        },
        updated() {
            this.getWidth()
            this.setSources()
        }
    }
</script>

<style lang="scss" scoped>

</style>
