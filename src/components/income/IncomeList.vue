<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">
    <IncomeListItem
      v-for="category in incomeCaregories"
      :key="category.id"
      :category="category"
      @open-option="switchOptionForm"
    />
    <BaseListAddItem @add="switchForm" />
  </ul>
  <div>
    <BaseAddWindow 
      v-if="isActive"
      @close="switchForm" 
      select="income" 
    />
  </div>
  <div>
    <BaseOptionWindow
      v-if="isOptionActive"
      :category="currentCaregory"
      select="income"
      @close="switchOptionForm"
      @open-calculator="switchCalculator"
      @open-edit="swichEditPanel"
    />
  </div>
  <div>
    <BaseCategoryCalculator
      v-if="isCalculatorActive"
      @close-calculator="switchCalculator"
      :category="currentCaregory"
      select="income"
    />
  </div>
  <div>
    <BaseAddWindow
      v-if="isEditActive"
      @close="swichEditPanel"
      :category="currentCaregory"
      select='income'
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseAddWindow from "../base/BaseAddWindow.vue";
import BaseCategoryCalculator from '../base/BaseCategoryCalculator.vue';
import BaseListAddItem from "../base/BaseListAddItem.vue";
import BaseOptionWindow from "../base/BaseOptionWindow.vue";
import IncomeListItem from "./IncomeListItem.vue";
import swicher from "@/mixins/swicher"

export default {
  components: {
    IncomeListItem,
    BaseListAddItem,
    BaseAddWindow,
    BaseOptionWindow,
    BaseCategoryCalculator,
  },
  mixins: [swicher],
  computed: {
    ...mapGetters(["incomeCaregories"]),
  },
};
</script>
