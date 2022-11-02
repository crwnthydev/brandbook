<template lang="vue">
  <header class="header-component" :class="{'header-main': isMainPage, 'header-page': !isMainPage}">
    <NuxtLink class="header-component__homelink" :to="'/'">
        <Logo class="logo" />
        <p class="title">Цифровой брендбук</p>
    </NuxtLink>
    <button class="button" type="primary" @click.prevent="openModal('menu')">
      <Burger class="burger" />
    </button>
    <Modal id="menu">
        <Aside />
    </Modal>
  </header>
</template>

<script>
import Logo from '@/components/UI/icons/logo'
import Burger from '@/components/UI/icons/burger'
import Modal from '@/components/Utils/modal'
import Aside from '@/components/LayoutElements/aside'

export default {
  name: 'header-component',
  components: {
    Logo,
    Burger,
    Modal,
    Aside
  },
  props: {
    isMainPage: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.header-component {
  display: flex;
  align-items: center;
  padding: 21px 24px;
  border-bottom: 1px solid var(--color-text-regular);
  &__homelink {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    display: none;
  }
  .title {
    margin-left: 35px;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--header-title);
    font-style: italic;
  }
  .button {
    display: none;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
  }
  .aside-component {
    height: auto;
    flex-grow: 1;
  }
  @include max-screen($breakpoint-md) {
    padding: 8px 8px 8px 16px;
    .title {
      display: none;
    }
    .button {
      display: flex;
    }
  }
}
.header-main {
  border-bottom: 1px solid var(--background-color-default);
  border-right: 1px solid var(--border-aside);
  background-color: var(--background-color-aside);

  .button {
    color: #505B66;
  }
}
.header-page {
  background-color: $brand-color-1;

  .logo {
    display: block;
  }
}
._layout-default {
    .header {
        background-color: var(--background-color-aside);
        border: none;
        .title {
            margin-left: 0;
            font-weight: 600;
            font-size: 14px;
            line-height: 1.29;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: var(--color-text-regular);
        }
        .logo {
            display: none;
        }
        @include max-screen($breakpoint-md) {
            border-right: none;
            border-bottom: none;
            background-color: transparent;
            .burger {
                fill: $color-white;
                color: $color-white;
            }
        }
    }
  }
</style>
