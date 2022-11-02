<template lang="vue">
  <div class="container mb-lg-96 mb-sm-80">
    <div class="lang-switcher-wrapper min-content-width-872 col-lg-9 col-xs-12">
      <CustomSelect
        :options="this.$store.state.langs"
        :default="this.$store.state.langs[0]"
        class="lang-switcher"
        @input="switchLang($event)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CustomSelect from '@/components/UI/custom-select'

export default {
  name: 'lang-switch',
  components: {
      CustomSelect
  },
  methods: {
    switchLang (lang) {
      this.SET_LANG(lang)
    },
    ...mapMutations({
      SET_LANG: 'SET_LANG'
    })
  }
}

</script>

<style lang="scss" scoped>
  .lang-switch {

    &__button {
        color: $color-black;

        &._active {
            color: #A3876E;
        }
    }
  }
</style>
