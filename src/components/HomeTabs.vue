<template>
  <div>
    <ul class="flex">
      <li>
        <div class="p-2 border-b border-green-500 text-green-500">{{tabs[0]}}</div>
      </li>
      <li>
        <div class="p-2 text-gray-600">{{tabs[1]}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeTabs",
  props: {
    tabs: Array
  }
};
</script>

<style>
</style>
