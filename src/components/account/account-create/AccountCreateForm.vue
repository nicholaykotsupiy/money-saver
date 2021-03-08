<template>
  <div class="absolute inset-0 bg-purple-800" v-if="isActive">
    <div class="text-left mx-4 py-4">
      <button @click="closeForm" class="text-white text-lg font-medium">
        Назад
      </button>
    </div>
    <form class="flex flex-col mx-4">
      <input
        v-model="accountName"
        type="text"
        placeholder="Название счёта"
        class="m-2 py-2 px-1 rounded-md bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
      />
      <input
        v-model="accountValue"
        type="number"
        placeholder="Стартовый капитал"
        class="m-2 py-2 px-1 rounded-md bg-transparent border-b-2 border-white placeholder-white text-white focus:outline-none"
      />
      <input
        type="button"
        value="Добавить"
        class="m-2 w-1/3 py-2 px-4 rounded-xl mx-auto cursor-pointer focus:outline-none"
        :disabled="!isEmpty"
        @click="buildNewAccount"
      />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "AccountCreateForm",
  data() {
    return {
      accountName: "",
      accountValue: "",
      isEmpty: true,
    };
  },
  methods: {
    ...mapActions(["addAccount"]),

    buildNewAccount() {
      this.addAccount({
        id: uuidv4(),
        name: this.accountName,
        money: this.accountValue,
        currentAccount: false,
        costs: {
          categories: []
        },
        income: {
          categories: []
        }
      });

      this.closeForm();
    },

    clearForm() {
      this.accountName = "";
      this.accountValue = "";
    },

    closeForm() {
      this.clearForm();
      this.$emit("close");
    },
  },
  updated() {
    if (this.accountName.trim() !== "" && this.accountValue.trim() !== "") {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  },
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
};
</script>