<template>
  <ul>
    <AccountListItem 
      v-for="item in accounts" 
      :key="item.id" 
      :item="item"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import AccountListItem from "./AccountListItem";

export default {
  name: "AccountList",
  components: {
    AccountListItem,
  },
  computed: {
    ...mapGetters(["accounts","currentAccount"]),
  },
};
</script>
