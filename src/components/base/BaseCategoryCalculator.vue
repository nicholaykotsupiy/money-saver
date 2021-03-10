<template>
  <div
    class="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 pt-6 pb-2 text-white"
  >
    <div
      @click="closeCalculatorHandler"
      class="transform rotate-45 text-4xl absolute top-0 left-2"
    >
      +
    </div>
    <table id="table" @click="clickHandler" class="flex flex-col items-center text-2xl">
      <thead class="mb-2">
        <tr>
          <td class="border-b w-56 h-10 text-center">{{ value }}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border text-center py-4 px-6 cursor-pointer" colspan="2">
            CA
          </td>
          <td class="border text-center py-4 px-6 cursor-pointer" colspan="2">
            C
          </td>
        </tr>
        <tr>
          <td class="border text-center py-4 px-6 cursor-pointer">7</td>
          <td class="border text-center py-4 px-6 cursor-pointer">8</td>
          <td class="border text-center py-4 px-6 cursor-pointer">9</td>
          <td class="border text-center px-4 cursor-pointer">-</td>
        </tr>
        <tr>
          <td class="border text-center py-4 px-6 cursor-pointer">4</td>
          <td class="border text-center py-4 px-6 cursor-pointer">5</td>
          <td class="border text-center py-4 px-6 cursor-pointer">6</td>
          <td class="border text-center px-4 cursor-pointer">+</td>
        </tr>
        <tr>
          <td class="border text-center py-4 px-6 cursor-pointer">1</td>
          <td class="border text-center py-4 px-6 cursor-pointer">2</td>
          <td class="border text-center py-4 px-6 cursor-pointer">3</td>
          <td class="border text-center px-4 cursor-pointer" rowspan="2">=</td>
        </tr>
        <tr>
          <td class="border text-center p-2 cursor-pointer" colspan="3">0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BaseCategoryCalculator",
  props: {
    category: {
      type: Object,
      required: true,
    },
    select: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapActions(["changeValue"]),
    closeCalculatorHandler() {
      this.$emit("close-calculator");
    },
    clickHandler(event) {
      let eventValue = event.target.innerText;
      let lastValueSymbol = this.value.slice(-1) || "";

      if (eventValue === "=") {
        this.changeValue({
          value: this.value,
          categoryID: this.category.id,
          select: this.select
        })
        this.value = "";
        this.closeCalculatorHandler()
      } else if (eventValue === "-" || eventValue === "+") {
        if (lastValueSymbol !== "-" && lastValueSymbol !== "+") {
          this.value += eventValue;
        }
      } else if (eventValue === "CA" && this.value !== "") {
        this.value = "";
      } else if (eventValue === "C" && this.value !== "") {
        this.value = this.value.slice(0, -1);
      } else if(event.target.id === 'table') {
        return
      }else {
        this.value += eventValue;
      }
    },
  },
};
</script>