<template>
  <div>
    <div v-for="user in usersList" :key="user.id">
      <div class="flex">
        <div>
          <img :src="user.avatar" :alt="`${user.first_name} profile picture`" />
        </div>
        <div>
          <p>{{ `${user.first_name} ${user.last_name}` }}</p>
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Search",
  props: {},
  computed: {
    usersList() {
      return store.state.usersList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
