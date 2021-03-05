<template>
  <div class="w-100 text-center">
    <button
      class="bg-blue-500 w-3/4 rounded-lg px-4 py-2 text-lg my-4 focus:outline-none"
      @click="createAccount"
    >
      Добавить новый счёт
    </button>
    <AccountCreateForm :isActive="isActive" @close="closeCreateForm"/>
  </div>
</template>

<script>
import AccountCreateForm from './AccountCreateForm'

export default {
  name: "AccountCreate",
  components: {
    AccountCreateForm
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    createAccount () {
      this.isActive = true
    },
    closeCreateForm () {
      this.isActive = false
    }
  }
};
</script>
