<template>
  <div class="cases">
    <Tabs
      :current-tab="currentCategory"
      :tabs="casesCategories"
      @set-category="setCategory"
    />
    <CasesList
      :cases-list="casesList"
      :current-category="currentCategory"
    />
  </div>
</template>

<script setup lang="ts">

  import Tabs from '@/components/Tabs.vue';
  import CasesList from '@/components/CasesList.vue'
  import Category from '@/assets/typescrypt/Category.js';
  import CaseCard from '@/assets/typescrypt/CaseCard';
  import { ref } from 'vue';

  const currentCategory = ref(0);

  const props = defineProps<{
    casesCategories: Category[],
    casesList: CaseCard,
  }>();

  function setCategory(n) {
    if (currentCategory.value === n) {
      currentCategory.value = 0;
    } else {
      currentCategory.value = n;
    }
  }

</script>