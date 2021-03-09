<template>
  <div
    class="absolute inset-x-4 top-56 h-64 bg-gray-700 rounded-xl flex flex-col justify-center px-6"
  >
    <button
      @click="closeForm"
      class="absolute left-4 top-2 text-lg text-white focus:outline-none"
    >
      Назад
    </button>
    <input
      type="text"
      v-model="name"
      class="my-2 p-2 rounded-lg focus:outline-none"
      @keypress.enter="categorySaveHandler"
      placeholder="Название категории"
    />
    <button
      @click="categorySaveHandler"
      class="bg-gray-300 w-2/3 mx-auto py-2 rounded-xl text-lg cursor-pointer focus:outline-none"
      :disabled="!isEmpty"
    >
      Добавить
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "BaseAddWindow",
  props: {
    category: {
      type: Object,
      required: false,
      default: function () {
        return { name: '', id: uuidv4() }
      }
    },
  },
  data() {
    return {
      name: this.category.name,
      id: this.category.id,
      isEmpty: false,
    };
  },
  methods: {
    ...mapActions(["addCategory"]),

    categorySaveHandler() {

      if(this.name.trim() === '') {
        this.name = this.category.name
      }

      this.addCategory({
        id: this.id,
        name: this.name,
        value: 0,
      });

      this.closeForm();
    },

    closeForm() {
      this.name = "";
      this.$emit("close");
    },
  },
  updated() {
    if (this.name.trim() === '') {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  },
};
</script>

<style>
</style>