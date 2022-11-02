<template lang="vue">
  <div class="search-fuse-component">
    <Search
      @input="handleInputValue"
      :list="books"
      :fuse-opts="options"
      :map-results="false"
      :defaultAll="false"
      @fuse-results="handleResults"
    />
    <div class="search-results" v-for="(book, i) in results" :key="`search-result-${ i }`">
        <nuxt-link :to="book.item.address" class="search-result-title">{{ book.item.title }}</nuxt-link>
        <nuxt-link :to="{path: book.item.address}" class="search-result text" v-for="text in book.matches" v-html="textHighliting(text.value)"></nuxt-link>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Functional/search'

export default {
  name: 'search-fuse-component',
  components: {
    Search
  },
  data () {
    return {
      searchQuery: '',
      advanced: false,
      search: '',
      ignoreLocation: true,
      includeScore: true,
      includeMatches: true,
      distance: 600,
      threshold: 0.2,
      results: [],
      books: []
    }
  },
  computed: {
    options () {
      return {
        keys: ['title', ['data', 'slides', 'name'], ['data', 'slides', 'value']],
        includeScore: this.includeScore,
        includeMatches: this.includeMatches,
        threshold: this.threshold,
        distance: this.distance,
        ignoreLocation: this.ignoreLocation
      }
    }
  },
  methods: {
    handleResults (r) {
      this.results = r
    },
    handleInputValue (val) {
      this.searchQuery = val
    },
    textHighliting (str) {
      if (!this.searchQuery) {
        return str
      }
      return str.replace(new RegExp(this.searchQuery, 'gi'), match => {
        return `<span class="search-match">${match}</span>`
      })
    }
  },
  mounted () {
    this.books = this.$store.state.search.searchData
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.search-fuse-component {
  .search-results {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    color: var(--color-text-regular);
  }
  .search-result-title {
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    margin-bottom: 24px;
  }
  .search-result {
    margin-bottom: 8px;
    &:last-of-type {
        margin-bottom: 0;
    }
  }
  .search-match {
    color: $color-white;
    background-color: $color-gold;
  }
}
</style>
