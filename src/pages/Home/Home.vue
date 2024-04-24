<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Fruits:</h2>
    <ul v-if="showItems">
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-else>No fruits to display.</p>
    <button type="button" @click="toggleShowItems">
      Toggle Items
    </button>
    <input v-model="userInput" />
    <h2>{{ userInput }}</h2>
    <div class="normal">Class Example</div>
    <div :class="highlightClass">Class Binding Example</div>
    <div :style="textStyle">Style Binding Example</div>
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
