<template>
  <li
    class="bg-gray-600 rounded-md my-2 px-2 py-2 cursor-pointer"
    @click="switchAccount(item.id)"
  >
    <div class="text-md font-medium text-gray-100">
      {{ item.name }}
    </div>
    <div
      v-if="item.currentAccount === true"
      class="text-md font-medium text-green-400"
    >
      {{ totalCash }}$
    </div>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "AccountListItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["switchAccount"]),
  },
  computed: {
    ...mapGetters(["totalCash"]),
  },
};
</script>