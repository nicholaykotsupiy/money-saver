<template>
  <div
    class="text-center text-xl mt-16 bg-blue-900 mx-auto p-4 rounded-full w-56"
    :style="{ backgroundColor: color }"
  >
    <div class="bg-white px-10 py-16 rounded-full">
      <div class="text-xl font-medium">
        {{ name }}
      </div>
      <div class="text-3xl text-red-600 font-semibold">
        {{ totalMoney }}$
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    totalMoney: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: () => "blue"
    }
  }
}
</script>
