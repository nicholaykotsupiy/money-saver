<template>
  <nav class="flex justify-between px-6 py-4 border-b border-black">
    <router-link to="/" class="text-xl">Счета</router-link>
    <router-link to="/cost" class="text-xl">Расходы</router-link>
    <router-link to="/income" class="text-xl">Доходы</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
