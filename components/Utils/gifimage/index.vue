<template lang="html">
	<picture>
		<img
            v-if="getSrc"
            class="gif-image"
            :class="className"
            :width="width"
            :height="height"
            :src="getSrc"
            :alt="alt"
        >
	</picture>
</template>

<script>
    export default {
      name: 'vector-image',
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
            default: 'gif-image'
        }
      },
      computed: {
        getSrc() {
            return require(`~/assets/images/${this.path}/${this.name}.gif`)
        },
        getSrcRaw() {
            return `../asstes/images/identity/illustrations/illu-1.svg`
        }
     }
  }
</script>

<style lang="scss" scoped>

</style>
