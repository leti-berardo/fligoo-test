<template>
  <div>
    <div class="flex justify-center items-center">
      <div class="mx-3 w-6 h-6 cursor-pointer">
        <font-awesome-icon icon="chevron-left" @click="$emit('subPage')" />
      </div>
      <div class="flex justify-center items-center">
        <div
          v-for="(p, i) in totalPages"
          :key="i"
          class="flex justify-center items-center text-sm w-6 h-6"
          :class="page === p ? pageSelectedClass : null"
        >
          <p>{{ p }}</p>
        </div>
      </div>
      <div class="mx-3 w-6 h-6 cursor-pointer">
        <font-awesome-icon icon="chevron-right" @click="$emit('addPage')" />
      </div>
    </div>
    <div
      v-for="user in usersList"
      :key="user.id"
      class="w-full sm:w-4/5 md:w-3/5 mx-auto"
      @click="goToEditUser(user)"
    >
      <user-card :user="user" />
    </div>
  </div>
</template>

<script>
import userCard from "./searchComponents/userCard.vue";

export default {
  components: { userCard },
  name: "Search",
  props: {
    page: {
      type: Number,
      default: 0,
    },
    totalPages: {
      type: Array,
      default: [],
    },
  },
  componets: {
    userCard,
  },
  computed: {
    usersList() {
      return this.$store.state.usersList;
    },
    pageSelectedClass() {
      return ["font-bold", "bg-gray-200", "rounded-full"];
    },
  },
  methods: {
    goToEditUser(userSelected) {
      this.$store.commit("SET_USER_SELECTED", userSelected);
      this.$router.push({ path: "/edit-user" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
