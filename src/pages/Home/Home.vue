<template>
  <div style="display: flex; flex-direction: column">
    <ListItem :showItems="showItems" :items="fruits"/>
    <button type="button" @click="toggleShowItems">
      Toggle Items
    </button>
  </div>
</template>

<script>
import { FRUITS } from './const';
import ListItem from './components/ListItem.vue'

export default {
  data: () => ({
    fruits: FRUITS,
    showItems: true,
    userInput: "",
    isHighlighted: false,
    textColor: "red",
    textSize: 16,
  }),
  components: {
    ListItem
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
