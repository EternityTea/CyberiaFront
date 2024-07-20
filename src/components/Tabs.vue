<template>
  <div class="tabs">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      @click="$emit('setCategory', tab.id)"
      v-html="tab.name"
      class="tabs__item"
      :class="{
        'tabs__item--active': currentTab === tab.id,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">

  import Category from "@/assets/typescrypt/Category";

  const props = defineProps<{
    currentTab: number,
    tabs: Category,
  }>();

</script>