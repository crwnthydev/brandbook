<template lang="vue">
  <transition name="fade">
    <div id="pagetop" class="pagetop round-btn" v-show="scY > 300" @click="toTop">
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'scroll-top',
        data() {
            return {
                scTimer: 0,
                scY: 0
            }
        },
        methods: {
            handleScroll() {
                if (this.scTimer) {
                    return
                }
                this.scTimer = setTimeout(() => {
                    this.scY = window.scrollY
                    clearTimeout(this.scTimer)
                    this.scTimer = 0
                }, 100)
            },
            toTop() {
                window.scrollTo({
                    top: 80,
                    behavior: "smooth"
                })
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="scss" scoped>
    .pagetop {
        position: fixed;
        right: 56px;
        bottom: 56px;
        background: $color-white;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        &::after {
            content: '';
            pointer-events: none;
            top: calc(50% - 4px);
            right: 0;
            display: block;
            width: 8px;
            height: 8px;
            border: 1px solid black;
            transform: rotate(45deg);
            border-bottom-color: transparent;
            border-right-color: transparent;
            z-index: 1;
            transition: opacity 0.2s linear;
            margin: 0 0 -4px 0;
        }
        &:hover {
            &::after {
                opacity: 0.8;
            }
        }
        @include max-screen($breakpoint-sm) {
            display: none!important;
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
