<template>
  <div class="home">
    <Search msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import ApiCall from "@/apiClients/api.ts";
import store from "@/store"

export default {
  name: "Home",
  components: {
    Search,
  },
  data() {
    return {
      page: 1,
      api: null,
    };
  },
  methods: {
    getUsers() {
      this.api.getUsers(this.page).then((response) => {
        let arrayUser = response.data.data
        store.commit("SET_USER_LIST", arrayUser);
      });
    },
  },
  computed:{
    getUsersList(){
      return store.state.usersList
    }
  },
  created() {
    this.api = new ApiCall();
    this.getUsers();
  },
};
</script>
