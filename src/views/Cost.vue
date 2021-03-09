<template>
  <CostList />

  <div class="text-center text-xl mt-16 bg-blue-900 mx-auto p-4 rounded-full w-56" >
    <div class="bg-white px-10 py-16 rounded-full">
      <div class="text-xl font-medium">Расходы</div>
      <div class="text-3xl text-red-600 font-semibold">{{ totalCost }}$</div>
    </div>
  </div>
</template>

<script>
import CostList from "@/components/cost/CostList";
import { mapGetters } from 'vuex'

export default {
  name: "Cost",
  components: { CostList },
  computed: {
      ...mapGetters([ 'totalCost' ])
  }
};
</script>