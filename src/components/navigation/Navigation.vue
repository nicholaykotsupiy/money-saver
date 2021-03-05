<template>
  <nav class="flex justify-between px-6 py-4 border-b border-black">
    <router-link to="/" class="text-lg">Account</router-link>
    <router-link to="/cost" class="text-lg">Cost</router-link>
    <router-link to="/income" class="text-lg">Income</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
