<template>
  <div style="display: flex; flex-direction: column">
    <h2 v-if="showItems">Fruits:</h2>
    <ul v-if="showItems">
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-else>No fruits to display.</p>
  </div>
</template>
<script>
  export default {
    name: 'ListItem',
    props:
    {
       items: Array,
       showItems: Boolean
    }
}
</script>
