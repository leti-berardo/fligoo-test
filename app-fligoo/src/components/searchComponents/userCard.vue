<template>
  <div
    class="
      m-6
      border border-solid
      rounded
      shadow-md
      cursor-pointer
      hover:shadow-lg hover:bg-gray-500 hover:bg-opacity-25
      group
    "
  >
    <div class="md:flex items-center p-3 w-full">
      <div class="rounded-full overflow-hidden w-24 mx-auto md:w-1/5 relative">
        <img :src="user.avatar" :alt="`${user.first_name} profile picture`" />
      </div>
      <div class="md:ml-4 mt-3 md:mt-0 md:text-left md:w-3/5">
        <p class="font-bold">{{ `${user.first_name} ${user.last_name}` }}</p>
        <p>{{ user.email }}</p>
      </div>
      <div class="p-3 md:text-transparent group-hover:text-gray-600">
        <font-awesome-icon icon="user-edit" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style></style>
