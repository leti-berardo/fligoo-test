<template>
  <div
    class="
      mx-auto
      sm:w-2/4
      p-6
      md:border md:border-solid
      rounded
      shadow-md
      cursor-pointer
    "
  >
    <div class="mx-3 w-6 h-6 cursor-pointer">
      <font-awesome-icon
        icon="chevron-left"
        @click="$router.push({ path: '/' })"
      />
    </div>
    <div>
      <h3 class="font-bold mb-3">Edit user profile</h3>
      <div class="mx-auto rounded-full overflow-hidden w-20">
        <img
          :src="userToEdit.avatar"
          :alt="`${userToEdit.first_name} profile picture`"
        />
      </div>
      <form @submit.prevent="saveUser()" class="my-5">
        <label for="mail">Email:</label>
        <input
          class="my-3 block border rounded p-2 w-full"
          id="mail"
          type="text"
          v-model="userToEdit.email"
        />
        <label for="name">Nombre:</label>
        <input
          class="my-3 block border rounded p-2 w-full"
          id="name"
          type="text"
          v-model="userToEdit.first_name"
        />
        <label for="lastname">Apellido:</label>
        <input
          class="my-3 block border rounded p-2 w-full"
          id="lastname"
          type="text"
          v-model="userToEdit.last_name"
        />
        <input
          class="cursor-pointer px-4 py-2 rounded"
          type="submit"
          value="Guardar"
        />
      </form>
    </div>
  </div>
</template>

<script>
import ApiCall from "@/apiClients/api.ts";

export default {
  name: "edit-user",
  data() {
    return {
      userToEdit: {},
      api: null,
    };
  },
  methods: {
    saveUser() {
      let params = { ...this.userToEdit };
      this.api.updateUser(params).then((response) => {
        console.log(response);
        this.$store.commit("SET_USER_SELECTED", this.userToEdit);
      });
    },
  },
  created() {
    this.userToEdit = { ...this.$store.state.userSelected };
    if (!Object.keys(this.userToEdit).length) {
      this.$router.push({ path: "/" });
    }
    this.api = new ApiCall();
  },
};
</script>

<style></style>
