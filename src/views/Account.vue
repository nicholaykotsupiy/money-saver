<template>
  <div>
    <h1
      v-if="currentAccount"
      class="px-6 pt-4 text-2xl font-medium text-center"
    >
      Текущий счёт: {{ currentAccount.name }}
    </h1>

    <div>
      <AccountCreate />
    </div>

    <div v-if="currentAccount" class="px-4">
      <span class="text-lg text-center">Список счетов:</span>
      <AccountList />
    </div>
  </div>
</template>

<script>
import AccountList from "@/components/account/AccountList";
import AccountCreate from "@/components/account/account-create/AccountCreate";
import { mapGetters } from "vuex";

export default {
  name: "Account",
  components: {
    AccountList,
    AccountCreate,
  },
  computed: {
    ...mapGetters(["currentAccount"]),
  },
  beforeRouteLeave(to, from, next) {
    if (this.currentAccount === undefined) {
      next(false);
    } else {
      next(true)
    }
  },
};
</script>
