<template>
  <a href="#" class="case-card">
    <div class="case-card__img">
      <img :src="caseItem.image" :alt="caseItem.title">
    </div>
    <div class="case-card__name-block">
      <div class="case-card__icon">
        <img :src="screenWidth >= 768 ? icon : iconWhite" >
      </div>
      <div
        class="case-card__name"
        v-html="caseItem.title"
      ></div>
      <div
        class="case-card__description"
        v-html="caseItem.description"
      ></div>
    </div>
    <div class="case-card__shadow"></div>
  </a>
</template>

<script setup lang="ts">

  import CaseCard from '@/assets/typescrypt/CaseCard.ts';
  import { ref } from 'vue'

  const screenWidth = ref(screen.width);

  const props = defineProps<{
    caseItem: CaseCard,
  }>();

  const icon = 'src/assets/svg/case-icon.svg';
  const iconWhite = 'src/assets/svg/case-icon-white.svg'

</script>