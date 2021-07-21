<template>
  <li class="max-w-full w-64 text-center rounded-md shadow hover:shadow-lg cursor-pointer p-4" v-bind:class="{'bg-white': !user.isSelected, 'bg-indigo-600 text-white': user.isSelected }" v-on:click="user.isSelected = !user.isSelected">
    <div><svg class="w-14 fill-gray mx-auto my-7" v-bind:class="{'fill-white': user.isSelected }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350"><path d="M175 171.173c38.914 0 70.463-38.318 70.463-85.586C245.463 38.318 235.105 0 175 0s-70.465 38.318-70.465 85.587c0 47.268 31.549 85.586 70.465 85.586zM41.909 301.853c-.012-2.882-.024-.812 0 0zM308.085 304.104c.038-.789.013-5.474 0 0z"/><path d="M307.935 298.397c-1.305-82.342-12.059-105.805-94.352-120.657 0 0-11.584 14.761-38.584 14.761s-38.586-14.761-38.586-14.761C55.018 192.43 43.61 215.545 42.11 295.722c-.123 6.547-.18 6.891-.202 6.131.005 1.424.011 4.058.011 8.651 0 0 19.592 39.496 133.08 39.496 113.486 0 133.08-39.496 133.08-39.496 0-2.951.002-5.003.005-6.399-.022.47-.066-.441-.149-5.708z"/></svg></div>
    <div class="text-base font-semibold" v-bind:class="{'text-indigo-700': !user.isSelected, 'text-white': user.isSelected }">{{user.name}}</div>
    <div class="text-sm mb-10" v-bind:class="{'text-gray-500': !user.isSelected, 'text-gray-300': user.isSelected }">{{user.email}}</div>
    <div class="mb-10">{{user.company.name}}</div>
    <div class="text-sm text-gray-500" v-bind:class="{'text-gray-500': !user.isSelected, 'text-gray-300': user.isSelected }">{{user.phone}}</div>
  </li>
</template>

<script>

export default {
  name: "UserCard",
  props: ['user'],
};
</script>