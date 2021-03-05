<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">

    <!-- Cost list -->
    <CostListItem
        v-for="category in categories"
        :key="category.id"
        :name="category.name"
        :value="category.value"
    />

    <!-- layout for add new cost -->
    <BaseListAddItem />

  </ul>
</template>

<script>
import BaseListAddItem from "../base/BaseListAddItem"
import CostListItem from "./CostListItem"

export default {
  name: "CostList",
  components: {
    CostListItem,
    BaseListAddItem,
  },
  props: {
      categories: {
          type: Array,
          required: true
      }
  }
};
</script>