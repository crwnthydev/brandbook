<template lang="vue">
  <div>
    <form class="search-component" :class="{'active' : isSearchActive}" @submit.prevent>
      <label class="label">
        <div class="icon-search" @click="openSearch">
          <SearchIcon />
        </div>
        <input type="search" v-model="value" @input="$emit('input', value)" class="input" inputmode>
      </label>
      <div class="icon-close" @click="closeSearch">
        <CloseIcon />
      </div>
    </form>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
import CloseIcon from '@/components/UI/icons/close'
import SearchIcon from '@/components/UI/icons/search'

export default {
  name: 'search-component',
  components: {
    CloseIcon,
    SearchIcon
  },
  props: {
    placeholder: {
      type: String,
      default: 'Поиск'
    },
    search: {
      type: String,
      default: ''
    },
    defaultAll: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => []
    },
    fuseOpts: {
      type: Object,
      default: () => {}
    },
    mapResults: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchQuery: '',
      isSearchActive: false,
      searchData: '',
      articles: [],
      fuse: null,
      value: '',
      result: []
    }
  },
  emits: ['fuse-input', 'fuse-results'],
  watch: {
    list () {
      if (this.fuse) {
        this.fuse.setCollection(this.list)
        this.fuseSearch()
      }
    },
    fuseOpts () {
      this.fuse.options = this.fuseOpts
      this.fuseSearch()
    },
    search () {
      this.value = this.search
    },
    value () {
      this.$emit('fuse-input', this.value)
      this.fuseSearch()
    },
    result () {
      this.$emit('fuse-results', this.result)
    }
  },
  mounted () {
    this.initFuse()
  },
  methods: {
    openSearch () {
      this.isSearchActive = true
    },
    closeSearch () {
      this.isSearchActive = false
      this.value = ''
    },
    defaultAllList (list) {
      if (this.mapResults) {
        return list
      }
      return list.map((item, refIndex) => {
        return { item, refIndex }
      })
    },
    initFuse () {
      this.fuse = new Fuse(this.list, this.fuseOpts)
      if (this.defaultAll) {
        this.result = this.defaultAllList(this.list)
      }
      if (this.search) {
        this.value = this.search
      }
    },
    fuseSearch () {
      if (this.value.trim() === '') {
        if (this.defaultAll) {
          this.result = this.defaultAllList(this.list)
        } else {
          this.result = []
        }
      } else {
        const r = this.fuse.search(this.value.trim())
        this.result = this.mapResults ? r.map(r => r.item) : r
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-component {
  padding: 20px 8px;
  min-height: 88px;
  background-color: #f2f5f5;
  border-top: 1px solid $color-shadow;
  border-bottom: 1px solid $color-black;
  max-width: 600px;
  .label {
    display: flex;
  }
  .icon-search {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #505B66;
    width: 100%;
    cursor: pointer;
  }
  .icon-close {
    display: none;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffffff;
    svg {
      width: 9px;
      height: 9px;
    }
  }
  .input {
    display: none;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #242B33;
    outline: 0;
    border: 0;
    background-color: inherit;
  }
  input::placeholder {
    padding-left: 3px;
    color: rgba(#242B33, 0.5);
  }
  input::-webkit-search-cancel-button {
    appearance: none;
  }
}
.active {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 21px 16px 16px;
  min-height: 80px;
  .icon-search {
    display: none;
  }
  .input {
    display: flex;
  }
  .icon-close {
    display: flex;
  }
}
</style>
