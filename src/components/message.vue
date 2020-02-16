<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">I'm Message,You Have Click Buttons For {{count}} Times</button>
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }},
    methods: {
        increment:function(){this.$store.commit('increment')}
    }
  };
</script>