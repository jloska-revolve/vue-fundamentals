<template>
  <div style="display: flex; flex-direction: column">
    <h2>Fruits:</h2>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["Apple", "Banana", "Orange"],
    showItems: true,
    userInput: "",
    isHighlighted: false,
    textColor: "red",
    textSize: 16,
  }),
  computed: {
    highlightClass() {
      if (this.showItems) {
        return {
          normal: true,
        };
      } else {
        return {
          highlight: true,
        };
      }
    },
    textStyle() {
      return {
        color: this.textColor,
        fontSize: this.textSize + "px",
      };
    },
  },
  methods: {
    toggleShowItems() {
      this.showItems = !this.showItems;
    },
  },
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
