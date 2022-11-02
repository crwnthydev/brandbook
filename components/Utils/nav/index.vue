<template lang="vue">
  <div class="nav-component">
      <div class="title-wrapper" @click.prevent="stateDropdown(thisNavId)">
        <h2 class="title" v-html="item.title" />
        <Arrow :class="{'rotate': isDropdownVisible[thisNavId]}" />
      </div>
      <Dropdown :isVisible="isDropdownVisible[thisNavId]">
        <ul>
          <NavItem v-for="value in item.list" :value="value" :key="value.link"/>
        </ul>
      </Dropdown>
      <div class="divider" />
  </div>
</template>

<script>
import Arrow from '@/components/UI/icons/arrow-down'
import Dropdown from '@/components/Utils/dropdown'
import NavItem from '@/components/Utils/nav-item'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'nav-component',
  components: {
    Arrow,
    Dropdown,
    NavItem
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    navId: Number
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    ...mapState({
        isDropdownVisible: state => state.isDropdownVisible
    }),
    thisNavId() {
        return this.navId
    }
  },
  methods: {
    ...mapMutations({
        STATE_DROPDOWN_TRUE: 'STATE_DROPDOWN_TRUE',
        STATE_DROPDOWN_FALSE: 'STATE_DROPDOWN_FALSE'
    }),
	stateDropdown (id) {
        if (!this.isDropdownVisible[this.thisNavId]) {
            this.STATE_DROPDOWN_TRUE(id)
        } else {
            this.STATE_DROPDOWN_FALSE(id)
        }
	}
  }
}
</script>

<style lang="scss" scoped>
.nav-component {
  user-select: none;
  cursor: pointer;
  &:first-of-type {
    padding-top: 16px;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    padding: 15px 0 15px 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.12;
    letter-spacing: 0.03em;
    color: $color-grey-text;
  }
  .rotate {
    transform: rotate(180deg);
  }
  .divider {
    margin: 7.5px 0;
    margin-left: 24px;
    width: calc(100% - 40px);
    height: 1px;
    background-color: $color-shadow;
  }
}
</style>
