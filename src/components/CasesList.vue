<template>
  <div class="cases-list">
    <CaseCard
      v-for="item in casesList"
      v-show="hasCategory(item.categories, currentCategory) || currentCategory === 0"
      :key="item.id"
      :case-item="item"
    />
  </div>
</template>

<script setup lang="ts">

  import CaseCard from '@/components/CaseCard.vue';
  import TCaseCard from '@/assets/typescrypt/CaseCard.ts';

  const props = defineProps<{
    currentCategory: Number,
    casesList: TCaseCard[],
  }>();

  function hasCategory(categories, categoryId) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === categoryId) {
        return true;
      }
    }
    return false;
  }

</script>