<template>
  <div style="display: flex; flex-direction: column">
    <button type="button" @click="toggleShowItems">Toggle Items</button>
    <div class="normal">Class Example</div>
    <div :class="highlightClass">Class Binding Example</div>
    <div :style="textStyle">Style Binding Example</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showItems: true,
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
