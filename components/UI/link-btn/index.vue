<template lang="vue">
    <a class="link-btn" :class="className" :href="url" target="_blank">
        <span class="link-btn__body round-btn">
            <slot></slot>
        </span>
        <span class="link-btn__label" v-html="label"></span>
    </a>
</template>
  
<script>

export default {
    name: 'link-btn',
    props: {
        url: {
            type: String,
            default: 'https://www.google.com/'
        },
        label: {
            type: String,
            default: 'Google.com'
        },
        className: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.link-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__body {
        display: flex;
        position: relative;
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
    }
    &__label {
        margin: 0 0 0 16px;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 14px;
        white-space: nowrap;
        letter-spacing: 0.02em;
        position: relative;
        color: $color-text-shady;
        transition: all 0.2s linear;
        &::after {
            content: '';
            position: absolute;
            widows: 100%;
            height: 1px;
            bottom: -2px;
            left: 0;
            right: 0;
            background-color: $color-text-shady;
            transition: all 0.2s linear;
        }
    }
    @include max-screen($breakpoint-sm) {
        display: none;
    }
    &:hover {
        .link-btn__label {
            color: $color-text-regular;
            &::after {
                content: '';
                background-color: $color-text-regular;
            }
        }
    }

}
</style>
