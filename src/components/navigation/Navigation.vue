<template>
  <nav class="flex justify-between px-6 py-4 border-b border-black">
    <router-link to="/" class="text-xl">Account</router-link>
    <router-link to="/cost" class="text-xl">Cost</router-link>
    <router-link to="/income" class="text-xl">Income</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
