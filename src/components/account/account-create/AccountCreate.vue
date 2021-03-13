<template>
  <div class="w-100 text-center">
    <button
      class="bg-blue-500 w-3/4 rounded-lg px-4 py-2 text-lg my-4 focus:outline-none"
      @click="swichToggleCreateForm"
    >
      Добавить новый счёт
    </button>
    <AccountCreateForm 
      :isActive="isActive"
      @close="swichToggleCreateForm" 
    />
  </div>
</template>

<script>
import AccountCreateForm from "./AccountCreateForm"

export default {
  name: "AccountCreate",
  components: {
    AccountCreateForm
  },
  data: () => ({ isActive: false }),
  methods: {
    swichToggleCreateForm() {
      this.isActive = !this.isActive
    }
  }
}
</script>
