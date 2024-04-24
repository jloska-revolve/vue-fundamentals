<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Fruits:</h2>
    <ul v-if="showItems">
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["Apple", "Banana", "Orange"],
    showItems: true,
  }),
  props: {
    // component recived properties
  },
  components: {
    // components register
  },
  computed: {
    // component computed variables
  },
  methods: {
    // component methods
  },
  watch: {
    // watched variables
  },
  async created() {},
  async mounted() {},
  async destroyed() {},
  async beforeMount() {},
};
</script>

<style scoped>
.normal {
  color: green;
}
.highlight {
  background-color: yellow;
}
</style>
