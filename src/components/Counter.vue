<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Counter en Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed access: {{ countComputed }}</h2>

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
  }

}
</script>

<style></style>