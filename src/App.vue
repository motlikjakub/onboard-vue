<template>
  <main>
    <!-- Your code goes here -->
    <div class="xl:container p-5 mx-auto text-lg">
      <div class="grid grid-cols-4 gap-5 mb-5">
        <input type="text" v-model="searchTerm" v-on:keydown.esc="searchTerm = ''" class="bg-white rounded-md border border-gray-200 col-span-4 lg:col-span-2 px-5 py-2 focus:outline-none focus:ring focus:ring-indigo-600" placeholder="Search a user by name...">
        <div class="bg-indigo-600 text-white text-center p-2 rounded-md col-span-4 sm:col-span-2 lg:col-span-1">Selected users: {{selectedUsers}}</div>
        <div class="bg-indigo-600 text-white text-center p-2 rounded-md col-span-4 sm:col-span-2 lg:col-span-1">Unselected users: {{users.length - selectedUsers}}</div>
      </div>
      <div v-if="!users.length" class="w-full h-80 flex">
        <div class="m-auto flex animate-spin drop-shadow">
          <div class="block bg-indigo-600 w-6 h-6 rounded-full m-1"></div>
          <div class="block bg-indigo-600 w-6 h-6 rounded-full m-1"></div>
        </div>
      </div>
      <div v-if="users.length && !searchedUsers.length">We could not find any user by name <strong>"{{searchTerm}}"</strong></div>
      <ul v-if="users.length" class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <UserCard v-for="user of searchedUsers" :key="user.id" :user="user"/>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from "axios";

import UserCard from "./components/UserCard.vue";

export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: [],
      searchTerm: "",
    }
  },
  computed: {
    selectedUsers: function () {
      let selectedUsers = 0;
      this.users.forEach(user => {
        user.isSelected && selectedUsers++;
      });
      return selectedUsers;
    },
    searchedUsers: function () {
      return this.users.filter((user) => {
        return user.name.toLowerCase().match(this.searchTerm.toLowerCase());
      });
    }
  },
  async created() {
    try {
      setTimeout(async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = resp.data;
      }, 2000);
    } catch(e) {
      console.error(e);
    }
  }
};
</script>