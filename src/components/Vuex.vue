<template>
  <h1> {{ status }}</h1>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'vuex',
  data() {
    return {
      complex: null,
    };
  },
  computed: mapState(['status']),
  watch: {
    status(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`);

      // Do whatever makes sense now
        this.complex = {
          deep: 'some deep object',
        };
      // if (newValue === 'success') {
      // }
    },
  },
};
</script>

<style>
  h1{
    text-align: center;
  }
</style>
