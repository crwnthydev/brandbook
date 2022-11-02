<template lang="vue">
    <section class="section style-section">
        <div class="container">
            <div class="section__content min-content-width-872 col-lg-9 col-xs-12">
                <ul v-if="links && links.length > 0" class="anchor-links">
                    <li v-for="link in links" :key="link.gref" class="anchor-link__wrapper">
                        <a class="anchor-link" :href="link.href" v-html="link.text[$store.state.lang]"></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'anchor-links-block',
  props: {
    links: Array
  }
}
</script>

<style lang="scss" scoped>
    .anchor-links {
        display: flex;
        flex-direction: column;
        list-style-type: none;
    }
    .anchor-link {
        display: inline;
        width: auto;
        color: $color-link;
        transition: $transition-link;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-decoration-line: none;
        padding: 0 0 2px 0;
        border-bottom: 1px solid $color-link;
        &__wrapper {
            margin: 0 0 13px 0;
            @include max-screen($breakpoint-sm){
                margin: 0 0 13px 0;
            }
            &:last-of-type {
                margin: 0;
            }
        }
        &:hover {
            color: $color-text-shady
        }
    }
</style>
