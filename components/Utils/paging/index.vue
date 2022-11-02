<template lang="vue">
    <div class="paging">
        <div v-for="page in pageList" class="paging__wrapper">
            <div class="paging__container" v-for="list in page.list">
                <NuxtLink v-if="list.name === currentPage" class="paging__link _prev-page" v-html="list.prevPageData.subtitle" :to="list.prevPageData.link"/>
                <NuxtLink v-if="list.name === currentPage" class="paging__link _next-page" v-html="list.nextPageData.subtitle" :to="list.nextPageData.link"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'next-page-button',
    props: {
        currentPage: String
    },
    computed: {
    ...mapState({
      pageList: state => state.navData
    })
  }
}
</script>

<style lang="scss" scoped>
  .paging {
    display: none;
    height: 96px;
    width: 100%;
    margin-top: 96px;
    background-color: $color-white;
    &__container {
        @include min-max($breakpoint-sm, $breakpoint-md) {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        }
    }
    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 96px;
        position: relative;
        border-top: 1px solid var(--background-color-default);
        &._next-page {
            width: calc(100vw - (var(--indent-col) * 2));
            &::after {
                content: '';
                display: inline;
                top: calc(50% - 4px);
                display: block;
                margin: 0 0 0 20px;
                width: 8px;
                height: 8px;
                border: 1px solid black;
                transform: rotate(45deg);
                border-bottom-color: transparent;
                border-left-color: transparent;
                pointer-events: none;
            }
            @include min-max($breakpoint-sm, $breakpoint-md) {
                width: calc(50vw - (var(--indent-col) * 2));
            }
        }
        &._prev-page {
            display: none;
            width: calc(50vw - (var(--indent-col) * 2));
            border-right: 1px solid var(--background-color-default);
            &::before {
            content: '';
                display: inline;
                top: calc(50% - 4px);
                display: block;
                margin: 0 20px 0 0 ;
                width: 8px;
                height: 8px;
                border: 1px solid black;
                transform: rotate(45deg);
                border-top-color: transparent;
                border-right-color: transparent;
                pointer-events: none;
            }
            @include min-max($breakpoint-sm, $breakpoint-md) {
                display: flex;
            }
        }
    }
    @include max-screen($breakpoint-md) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
</style>
