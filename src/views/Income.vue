<template>
  <ul class="mx-4 flex flex-wrap justify-center border-b-2 border-gray-800">
    <!-- Cost list -->
    <li class="flex flex-col items-center w-1/5 cursor-pointer m-2">
      <span>Продукты</span>
      <div class="p-5 bg-blue-500 rounded-full w-8"></div>
      <span>0</span>
    </li>
    <li class="flex flex-col items-center w-1/5 cursor-pointer m-2">
      <span>Продукты</span>
      <div class="p-5 bg-blue-500 rounded-full w-8"></div>
      <span>0</span>
    </li>
    <li class="flex flex-col items-center w-1/5 cursor-pointer m-2">
      <span>Продукты</span>
      <div class="p-5 bg-blue-500 rounded-full w-8"></div>
      <span>0</span>
    </li>
    <!-- layout for add new cost -->
    <li
      class="flex flex-col items-center justify-start w-1/5 cursor-pointer m-2"
    >
      <span>Добавить</span>
      <img src="@/assets/img/add.png" class="w-10" alt="" />
    </li>
  </ul>
  <div class="text-center text-xl mt-16 bg-yellow-400 mx-auto p-4 rounded-full w-56">
    <div class="bg-white px-10 py-16 rounded-full">
      <div class="text-xl font-medium">Доходы</div>
      <div class="text-3xl text-green-600 font-semibold">2 000$</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cost"
}
</script>
