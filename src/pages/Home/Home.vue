<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Fruits:</h2>
    <ul v-if="showItems">
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-else>No fruits to display.</p>
    <button type="button" @click="toggleShowItems">
      Toggle items
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["Apple", "Banana", "Orange"],
    showItems: true,
  }),
  methods: {
    toggleShowItems() {
      this.showItems = !this.showItems;
    },
  },
};
</script>

<style scoped>
</style>
