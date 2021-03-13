<template>
  <CostList />

  <BaseDial 
    name="Расходы" 
    :totalMoney="totalCost" 
    color="rgb(29, 78, 216)"
  />
</template>

<script>
import { mapGetters } from 'vuex'
import CostList from "@/components/cost/CostList"
import BaseDial from '@/components/base/BaseDial'

export default {
  name: "Cost",
  components: { 
    CostList, 
    BaseDial
   },
  computed: {
    ...mapGetters([ "totalCost" ]),
  },
};
</script>