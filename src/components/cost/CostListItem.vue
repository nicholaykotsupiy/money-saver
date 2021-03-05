<template>
  <li class="flex flex-col items-center w-1/5 cursor-pointer m-2">
    <span>{{ name }}</span>
    <div class="p-5 bg-blue-500 rounded-full w-8"></div>
    <span>{{ value }}</span>
  </li>
</template>

<script>
export default {
    name: 'CostListItem',
    props: {
        name: {
            type: String,
            required: true    
        },
        value: {
            type: Number,
            required: true
        }
    }
}
</script>