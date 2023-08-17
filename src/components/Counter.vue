<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter en Vuex</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>

  <h1 v-if="isLoading">Loading...</h1>
  <h2 v-else>Computed access: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="randomInt" :disabled="isLoading && true">Random</button>
  <!-- <button @click="incrementRandomInt">Random</button> -->

  <hr>

  <h1>MapState</h1>
  <h2>mapState - count: {{ count }}</h2>
  <h2>mapState - lastMutation: {{ lastMutation }}</h2>

  <!-- <h2>Direct Getter by mapGetters: {{ squareCount }}</h2> -->
  <h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  // computed: mapState(['count'])

  computed: {
    countComputed() {
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'isLoading']),
    // ...mapState({
    //   count: state => state.count,
    //   lastMutation: state => state.lastMutation
    // })
    // ...mapGetters(['counter/squareCount'])
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy(value) {
      this.$store.commit('counter/incrementBy', value)
    },
    // incrementRandomInt() {
    //   this.$store.dispatch('incrementRandomInt')
    // }
    // ...mapActions(['incrementRandomInt'])
    ...mapActions('counter', {
      randomInt: 'incrementRandomInt'
      //Con esta forma, podemos llamar esta acción desde otro método con this.randomInt()
    })
  }

}
</script>

<style></style>