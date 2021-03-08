<template>
  <li
    class="bg-gray-600 rounded-md my-2 px-2 py-2 cursor-pointer"
    @click="switchAccount(item.id)"
  >
    <div class="text-md font-medium text-gray-100">
      {{ item.name }}
    </div>
    <div class="text-md font-medium text-green-400">
      {{ item.money }}$
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AccountListItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(["switchAccount"]),
  },
};
</script>