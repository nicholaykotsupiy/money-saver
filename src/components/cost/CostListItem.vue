<template>
  <li @click="openOptionForm" class="flex flex-col items-center w-1/5 cursor-pointer m-2">
    <span>{{ category.name }}</span>
    <div class="p-5 bg-blue-500 rounded-full w-8"></div>
    <span>{{ category.value }}$</span>
  </li>
</template>

<script>
export default {
  name: "CostListItem",
  props: {
      category: {
        type: Object,
        required: true
      }
  },
  methods: {
    openOptionForm() {
      this.$emit('open-option', {category: this.category})
    }
  }
};
</script>
