<template lang="vue">
  <button class="download-img-btn round-btn" download @click.prevent="exportZip()">
      <slot></slot>
  </button>
</template>

<script>
import axios from 'axios'
import jsZip from 'jszip'
import fileSaver from 'file-saver'

export default {
  name: 'download-img-btn',
  props: {
    fileName: Object,
    filePath: String,
    fileExt: String,
    fileType: String
  },
  methods: {
    reuqireFile () {
      return require(`~/static/upload/images/${this.filePath}/${this.fileName[this.$store.state.lang]}.${this.fileExt}`)
    },
    exportZip () {
      let blob
      axios.get(this.fileUrl, { responseType: 'blob' })
      .then(response => {
        blob = new Blob([response.data], { type: `${this.fileType}/${this.fileExt}` })
        const zip = jsZip()
        zip.file(`${this.fileName[this.$store.state.lang]}.${this.fileExt}`, blob)
        zip.generateAsync({ type: 'blob' }).then(zipFile => {
          return fileSaver.saveAs(zipFile, this.fileName[this.$store.state.lang])
        })
      }).catch(console.error)
    }
  },
  computed: {
    fileUrl () {
      return `/_nuxt/static/upload/images/${this.filePath}/${this.fileName[this.$store.state.lang]}.${this.fileExt}`
    }
  }
}
</script>

<style lang="scss" scoped>
.download-img-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  background: #F2F4F5;
  border: 1px solid #E4E7EB;
  @include round-box-shadow;
  border-radius: 32px;
  position: relative;
  cursor: pointer;
  @include min-max($breakpoint-sm, $breakpoint-lg) {
    padding: 6px;
  }
  @include max-screen($breakpoint-sm) {
    display: none;
  }
}
</style>
