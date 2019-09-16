<template>
  <div>
    <vuex />
  </div>
</template>

<script>

import Vuex from '@/components/Vuex.vue';

export default {
  name: 'app',
  components: {
    Vuex,
  },
  mounted() {
    this.$store.dispatch('fetchApi');
  },
};
</script>
