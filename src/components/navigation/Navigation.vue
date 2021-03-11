<template>
  <nav class="flex justify-between px-6 py-4 border-b border-black text-xl">
    <router-link to="/">Счета</router-link>
    <router-link to="/cost">Расходы</router-link>
    <router-link to="/income">Доходы</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
