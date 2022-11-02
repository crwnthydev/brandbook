<template lang="vue">
    <a class="download-btn round-btn" :class="className" :href="fileUrl" download>
        <slot></slot>
    </a>
</template>
  
<script>

export default {
    name: 'download-from-server-btn',
    props: {
        fileName: Object,
        filePath: String,
        fileExt: String,
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        fileUrl () {
            return `https://upload.sborkademo.com/sportlife-brandbook/upload/${this.filePath}/${this.fileName[this.$store.state.lang]}.${this.fileExt}`
        }
    }
}
</script>

<style lang="scss" scoped>
.download-btn {
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
    @include max-screen(1245px) {
        display: none;
    }
}
</style>
