<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Fruits:</h2>
    <ul v-if="showItems">
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-else>No fruits to display.</p>
    <button type="button" @click="toggleShowItems">Toggle Items</button>
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
  methods: {
    toggleShowItems() {
      this.showItems = !this.showItems;
    },
  },
  computed: {
    // component computed variables
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
