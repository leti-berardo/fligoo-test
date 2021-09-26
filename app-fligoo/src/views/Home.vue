<template>
  <div class="home mx-auto">
    <Search
      :page="page"
      :totalPages="totalPages"
      @addPage="page++"
      @subPage="page > 1 ? page-- : null"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import ApiCall from "@/apiClients/api.ts";
import store from "@/store";

export default {
  name: "Home",
  components: {
    Search,
  },
  data() {
    return {
      page: 1,
      totalPages: [],
      api: null,
    };
  },
  watch: {
    page() {
      this.getUsers();
    },
  },
  methods: {
    getUsers() {
      this.api.getUsers(this.page).then((response) => {
        let arrayUser = response.data.data;
        store.commit("SET_USER_LIST", arrayUser);
        this.totalPages = [];
        let totalP = response.data.total / response.data.per_page;
        for (let i = 1; i <= totalP; i++) {
          this.totalPages.push(i);
        }
      });
    },
  },
  computed: {
    getUsersList() {
      return store.state.usersList;
    },
  },
  created() {
    this.api = new ApiCall();
    this.getUsers();
  },
};
</script>
