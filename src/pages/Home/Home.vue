<template>
  <div style="display: flex; flex-direction: column">
    <h2>Insert text here</h2>
    <input v-model="userInput" />
    <h2>{{ userInput }}</h2>
  </div>
</template>

<script>
export default {
  data: () => ({
    userInput: "",
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
