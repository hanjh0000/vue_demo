<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">You Have Click Buttons For {{count}} Times</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }},
    methods: {
        increment:()=>{this.$store.commit('increment')}
    }
  };
</script>