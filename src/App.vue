<script setup>
import Home from "./pages/Home/Home.vue";
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
