<template>
  <div class="absolute inset-0">
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gray-800">
      <div
        class="h-20 text-white border-b flex items-center justify-center text-lg"
      >
        <div
          @click="closeHandler"
          class="transform rotate-45 text-4xl absolute top-0 left-2"
        >
          +
        </div>
        <div class="text-center py-2">Категория: {{ category.name }}</div>
      </div>
      <div class="flex justify-around items-center h-20 text-white text-lg">
        <div @click="openCalculatorHandler" class="cursor-pointer">Добавить</div>
        <div @click="openEditHandler(); closeHandler();" class="cursor-pointer">Изменить</div>
        <div
          @click="
            deleteCategory({id: category.id, select});
            closeHandler();
          "
          class="cursor-pointer"
        >
          Удалить
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    select: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteCategory"]),
    closeHandler() {
      this.$emit("close");
    },
    openCalculatorHandler() {
      this.$emit("open-calculator");
    },
    openEditHandler() {
      this.$emit('open-edit')
    }
  },
};
</script>