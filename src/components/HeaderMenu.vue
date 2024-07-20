<template>
  <div class="header-menu">
    <div
      @click="$emit('changeMenu')"
      class="header-menu__close"
    >
      <img
        :src="closeIcon"
        alt="Закрыть"
      >
    </div>
    <div class="header-menu__page-list">
      <a
        class="link header-menu__page-item"
        v-for="page in pages"
        :key="page.id"
        :href="page.url"
        v-html="page.name"
      ></a>
    </div>
    <div class="header-menu__contacts">
      <div class="header-menu__contacts-title">Контакты</div>
      <div class="header-menu__contacts-list">
        <a
          v-for="contact in contacts"
          :key="contact.id"
          :href="contact.url"
          v-html="contact.name"
          class="link header-menu__contacts-item"
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const closeIcon = 'src/assets/svg/menu-burger-close.svg';

  const props = defineProps<{
    pages: any,
    contacts: any,
    isBurgerOpen: boolean,
  }>()

</script>