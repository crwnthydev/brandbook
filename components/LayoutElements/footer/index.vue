<template lang="vue">
  <footer class="footer-component">
    <p class="mail">С&nbsp;любыми вопросами и&nbsp;уточнениями пишите на&nbsp;почту
      <a class="link footer-link" :href="`mailto:office@sportlife.ru`" target="_blank">office@sportlife.ru</a>
    </p>
    <Logo />
  </footer>
</template>

<script>
import Logo from '@/components/UI/icons/logo'

export default {
  name: 'footer-component',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.footer-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 48px;
  padding-bottom: 51px;
  padding-left: 401px;
  height: 288px;
  background-color: var(--background-footer);
  @include min-max($breakpoint-sm, $breakpoint-lg) {
    padding-left: calc(2% + var(--indent-col) + 256px);
  }
  @include max-screen($breakpoint-md){
    padding-left: var(--indent-col);
    padding-right: var(--indent-col);
  }
  .mail {
    max-width: 250px;
    font-size: 13px;
    line-height: 1.38;
    letter-spacing: 0.02em;
    color: var(--footer-text);
  }
  .link {
    color: var(--footer-link);
    &.footer-link {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -1px;
            height: 1px;
            background-color: var(--footer-link);
        }
    }
  }
}
</style>
