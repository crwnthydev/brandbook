<template lang="vue">
    <button class="btn-component _download" type="" @click="exportPack()">
      <div class="icon" v-if="isContainsIcon">
        <Play></Play>
      </div>
      <div v-if="!btnLabel" class="text">{{ labelText['ru'] }}</div>
      <div v-else-if="btnLabel" class="text">{{ btnLabel }}</div>
      <div class="btn-component__formats">
          <div v-if="hasFormat('otf')" class="btn-component__format">
            <Otf />
          </div>
          <div v-if="hasFormat('ttf')" class="btn-component__format">
            <Ttf />
          </div>
          <div v-if="hasFormat('woff')" class="btn-component__format">
            <Woff />
          </div>
          <div v-if="hasFormat('ai')" class="btn-component__format">
              <Ai />
          </div>
          <div v-if="hasFormat('zip')" class="btn-component__format">
              <Zip />
          </div>
          <div v-if="hasFormat('tif')" class="btn-component__format">
              <Tif />
          </div>
          <div v-if="hasFormat('png')" class="btn-component__format">
              <Png />
          </div>
          <div v-if="hasFormat('jpg')" class="btn-component__format">
              <Jpg />
          </div>
      </div>
    </button>
  </template>
  
  <script>
    import axios from 'axios'
    import Play from '@/components/UI/icons/play'
    import Otf from '@/components/UI/icons/otf'
    import Woff from '@/components/UI/icons/woff'
    import Ttf from '@/components/UI/icons/ttf'
    import Ai from '@/components/UI/icons/ai'
    import Zip from '@/components/UI/icons/zip'
    import Tif from '@/components/UI/icons/tif'
    import Png from '@/components/UI/icons/png'
    import Jpg from '@/components/UI/icons/jpg'
    import fileSaver from 'file-saver'
  
    export default {
        name: 'btn-component',
        components: {
            Play,
            Otf,
            Woff,
            Ttf,
            Zip,
            Ai,
            Tif,
            Jpg,
            Png
        },
        props: {
        isContainsIcon: {
            type: Boolean,
            default: false
        },
        filePath: String,
        fileName: String,
        btnLabel: String,
        formats: Array
        },
        data () {
        return {
            labelText: {
            ru: 'Скачать все материалы',
            en: 'Скачать все материалы'
            }
        }
        },
        methods: {
            exportPack () {
                axios.get(this.fileUrl, { responseType: 'blob' })
                .then(response => {
                    const blob = new Blob([response.data], { type: 'application/x-zip-compressed' })
                    return fileSaver.saveAs(blob, this.fileName)
                }).catch(console.error)
            },
            hasFormat(format) {
                return this.formats.filter(item => item === format).length > 0
            }
        },
        computed: {
            fileUrl () {
                return `/_nuxt/static/upload/${this.filePath}/${this.fileName}.zip`
            }
        }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
