<template>
  <div class="bread-crumbs">
    <div
      v-html="path"
      class="bread-crumbs__item"
    ></div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    path: string,
  }>()

</script>