<template>
  <IncomeList />

  <BaseDial
    name="Доходы"
    :totalMoney="totalIncome" 
    color="rgb(251, 191, 36)"
  />
</template>

<script>
import { mapGetters } from "vuex"
import BaseDial from '@/components/base/BaseDial'
import IncomeList from "@/components/income/IncomeList"

export default {
  name: "Cost",
  components: { 
    IncomeList, 
    BaseDial
   },
  computed: {
    ...mapGetters([ "totalIncome" ]),
  },
};
</script>
