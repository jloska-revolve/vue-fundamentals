<template>
  <div style="display: flex; flex-direction: column">
    <h2>Users:</h2>
    <ul>
      <li v-for="user in userList">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters('users', [
      'userList',
    ]),
  },
  methods: {
    ...mapActions('users', [
      'getUserList',
    ]),
    ...mapMutations('users', ['setUserList']),
  },
  async mounted() {
    await this.getUserList();
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
