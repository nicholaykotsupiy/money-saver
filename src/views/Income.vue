<template>
  <IncomeList />

  <div class="text-center text-xl mt-16 bg-yellow-400 mx-auto p-4 rounded-full w-56" >
    <div class="bg-white px-10 py-16 rounded-full">
      <div class="text-xl font-medium">Доходы</div>
      <div class="text-3xl text-green-600 font-semibold">
        {{ totalIncome }}$
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IncomeList from "../components/income/IncomeList.vue";

export default {
  name: "Cost",
  components: { IncomeList },
  computed: {
    ...mapGetters(["totalIncome"]),
  },
};
</script>
