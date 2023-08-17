<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter en Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>

  <h1 v-if="$store.state.isLoading">Loading...</h1>
  <h2 v-else>Computed access: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="incrementRandomInt">Random</button>

  <hr>

  <h1>MapState</h1>
  <h2>mapState - count: {{ count }}</h2>
  <h2>mapState - lastMutation: {{ lastMutation }}</h2>
</template>

<script>

import { mapState } from 'vuex';

export default {
  // computed: mapState(['count'])

  computed: {
    countComputed() {
      return this.$store.state.count
    },
    ...mapState(['count', 'lastMutation'])
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    incrementBy(value) {
      this.$store.commit('incrementBy', value)
    },
    incrementRandomInt() {
      this.$store.dispatch('incrementRandomInt')
    }
  }

}
</script>

<style></style>