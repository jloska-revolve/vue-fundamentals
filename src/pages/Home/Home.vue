<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Widać albo nie widać</h2>
    <input v-model="userInput" />
  </div>
</template>

<script>
export default {
  data: () => ({
    userInput: "",
  }),
  props: {
    // component recived properties
  },
  components: {
    // components register
  },
  methods: {
    // component methods
  },
  computed: {
    // component computed properties
  },
  watch: {
    userInput() {
      this.showItems = !this.showItems;
    },
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
