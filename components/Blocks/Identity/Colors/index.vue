<template lang="vue">
    <section class="section colors-section" :class="blockType">
        <div class="container">
            <h2 v-if="heading" class="section__heading min-content-width-872 heading col-lg-9 col-xs-12" v-html="heading[$store.state.lang]"></h2>
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12 mt-lg-32 mt-sm-24">
                <p v-if="description && description.length > 0" v-for="text in description" class="section__description text" v-html="text[$store.state.lang]"></p>
                <div class="colors-section__wrapper mt-lg-48 mt-sm-48">
                    <div v-for="colorItem in colors" class="color-item">
                        <div :style="{ 'background-color': colorItem.code }" class="color-item__background"></div>
                        <p :style="{ 'color': colorItem.textColor }" class="color-item__title" v-html="colorItem.title[$store.state.lang]"></p>
                        <div class="color-item__code">
                            <span :style="{ 'color': colorItem.textColor }" class="color-item__codetext" v-html="colorItem.codeText"></span>
                            <span :style="{ 'color': colorItem.textColor }" class="color-item__codevalue" v-html="colorItem.codeValue"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'colors-block',
  props: {
    heading: Object,
    description: Array,
    blockType: String,
    colors: Array
  }
}

</script>

<style lang="scss" scoped>
    .colors-section__wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        .colors-secondary & {
            @include min-screen($breakpoint-md) {
                flex-flow: wrap;
                flex-direction: row;
                width: calc(100% + 32px);
                margin-left: -32px;
            }
        }
    }
    .color-item {
        position: relative;
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 256px;
        width: 100%;
        margin-bottom: 32px;
        border-radius: 4px;
        overflow: hidden;
        &__title {
            font-weight: 450;
            font-size: 24px;
            line-height: 28px;
        }
        &__code {
            display: flex;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0.02em;
            min-height: 18px;
        }
        &__codetext {
            opacity: 0.8;
            margin-right: 0.4em;
        }
        &__background {
            position: absolute;
            widows: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
        }
        .colors-primary & {
            &__title {
                margin-bottom: 5px;
            }
        }
        .colors-secondary & {
            &__title {
                max-width: 80%;
                margin-bottom: 5px;
            }
            @include min-screen($breakpoint-md) {
                max-width: calc(33.33% - 32px);
                margin: 0 0 32px 32px;
                &:first-of-type {
                    max-width: calc(50% - 32px);
                }
                &:nth-of-type(2) {
                    max-width: calc(50% - 32px);
                }
                &__title {
                    margin-bottom: 3px;
                }
            }
            &:last-of-type {
                margin: 0 0 32px 32px;
                @include max-screen($breakpoint-md) {
                    margin: 0;
                }
            }
        }
        &:last-of-type {
            margin: 0;
        }
    }
</style>
