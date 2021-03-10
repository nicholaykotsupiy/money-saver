<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">
    <!-- Cost list -->
    <IncomeListItem
      v-for="category in incomeCaregories"
      :key="category.id"
      :category="category"
      @open-option="openOptionForm"
    />
    <!-- layout for add new cost -->
    <BaseListAddItem @add="addHandler" />
  </ul>
  <div>
    <BaseAddWindow v-if="isActive" @close="closeForm" select="income" />
  </div>
  <div>
    <BaseOptionWindow
      v-if="isOptionActive"
      :category="currentCaregory"
      select="income"
      @close="closeOptionForm"
      @open-calculator="openCalculator"
      @open-edit="openEditPanel"
    />
  </div>
  <div>
    <BaseCategoryCalculator
      v-if="isCalculatorActive"
      @close-calculator="closeCalculator"
      :category="currentCaregory"
      selectValue="income"
    />
  </div>
  <div>
    <BaseAddWindow
      v-if="isEditActive"
      @close="closeEditPanel"
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

export default {
  components: {
    IncomeListItem,
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
      console.log(1)
      this.currentCaregory = data.category;
      this.isOptionActive = true;
    },
    closeOptionForm() {
      this.isOptionActive = false;
    },
    openCalculator() {
      this.closeOptionForm();
      this.isCalculatorActive = true;
    },
    closeCalculator() {
      this.isCalculatorActive = false;
    },
    openEditPanel() {
      this.isEditActive = true;
    },
    closeEditPanel() {
      this.isEditActive = false;
    },
  },
  computed: {
    ...mapGetters(["incomeCaregories"]),
  },
};
</script>
