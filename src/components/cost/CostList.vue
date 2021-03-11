<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">
    <CostListItem
      v-for="category in costCaregories"
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
      select="cost" 
    />
  </div>
  <div>
    <BaseOptionWindow
      v-if="isOptionActive"
      :category="currentCaregory"
      select="cost"
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
      select="cost"
    />
  </div>
  <div>
    <BaseAddWindow
      v-if="isEditActive"
      @close="swichEditPanel"
      :category="currentCaregory"
      select="cost"
    />
  </div>
</template>

<script>
import BaseListAddItem from "../base/BaseListAddItem"
import CostListItem from "./CostListItem"
import { mapGetters } from "vuex"
import BaseAddWindow from "../base/BaseAddWindow"
import BaseOptionWindow from "../base/BaseOptionWindow"
import BaseCategoryCalculator from "../base/BaseCategoryCalculator"

export default {
  name: "CostList",
  components: {
    CostListItem,
    BaseListAddItem,
    BaseAddWindow,
    BaseOptionWindow,
    BaseCategoryCalculator,
  },
  data: () => ({
    isActive: false,
    isOptionActive: false,
    isCalculatorActive: false,
    isEditActive: false,
    currentCaregory: {},
  }),
  methods: {
    switchForm() {
      this.isActive = !this.isActive
    },
    switchOptionForm(data) {
      if (!this.isOptionActive) {
        this.currentCaregory = data.category
      }

      this.isOptionActive = !this.isOptionActive
    },
    switchCalculator() {
      if (!this.isCalculatorActive) {
        this.switchOptionForm()
      }

      this.isCalculatorActive = !this.isCalculatorActive
    },
    swichEditPanel() {
      this.isEditActive = !this.isEditActive
    },
  },
  computed: {
    ...mapGetters([
      "costCaregories",
      "currentCostCategory"
    ])
  }
}
</script>
