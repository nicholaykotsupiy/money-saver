<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">
    <!-- Cost list -->
    <CostListItem
      v-for="category in costCaregories"
      :key="category.id"
      :category="category"
      @open-option="openOptionForm"
    />

    <!-- layout for add new cost -->
    <BaseListAddItem @add="addHandler" />
  </ul>
  <div>
    <BaseAddWindow v-if="isActive" @close="closeForm" />
  </div>
  <div>
    <BaseOptionWindow
      v-if="isOptionActive"
      :category="currentCaregory"
      @close="closeOptionForm"
      @open-calculator="openCalculator"
      @open-edit="openEditPanel"
    />
  </div>
  <div>
    <BaseCategoryCalculator v-if="isCalculatorActive" @close-calculator="closeCalculator" :category="currentCaregory" />
  </div>
  <BaseAddWindow v-if="isEditActive" @close="closeEditPanel" :category="currentCaregory" />
</template>

<script>
import BaseListAddItem from "../base/BaseListAddItem";
import CostListItem from "./CostListItem";
import { mapGetters } from "vuex";
import BaseAddWindow from "../base/BaseAddWindow.vue";
import BaseOptionWindow from "../base/BaseOptionWindow.vue";
import BaseCategoryCalculator from '../base/BaseCategoryCalculator.vue';

export default {
  name: "CostList",
  components: {
    CostListItem,
    BaseListAddItem,
    BaseAddWindow,
    BaseOptionWindow,
    BaseCategoryCalculator,
  },
  data() {
    return {
      isActive: false,
      isOptionActive: false,
      isCalculatorActive: false,
      isEditActive: false,
      currentCaregory: {},
    };
  },
  methods: {
    addHandler() {
      this.isActive = true;
    },
    closeForm() {
      this.isActive = false;
    },
    openOptionForm(data) {
      this.currentCaregory = data.category;
      this.isOptionActive = true;
    },
    closeOptionForm() {
      this.isOptionActive = false;
    },
    openCalculator() {
      this.closeOptionForm()
      this.isCalculatorActive = true;
    },
    closeCalculator() {
      this.isCalculatorActive = false;
    },
    openEditPanel() {
      this.isEditActive = true
    },
    closeEditPanel() {
      this.isEditActive = false
    }
  },
  computed: {
    ...mapGetters(["costCaregories", "currentCostCategory"]),
  },
};
</script>
