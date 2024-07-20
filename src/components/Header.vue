<template>
  <header class="header">
    <div class="header__body">
      <img :src="logo" alt="CYBERIA" class="header__logo">
      <div class="header__pages-list">
        <a
          v-for="page in pagesList"
          :key="page.id"
          :href="page.url"
          class="link header__item"
          v-html="page.name"
        ></a>
      </div>
      <div
        @click="isBurgerOpen = !isBurgerOpen"
        class="header__burger"
      >
        <img
          :src="menuBurger"
          alt="MENU"
        >
      </div>
    </div>
    <HeaderMenu
      class="header__burger-menu"
      :pages="pagesList"
      :contacts="contacts"
      :is-burger-open="isBurgerOpen"
      @change-menu="isBurgerOpen = !isBurgerOpen"
      :class="{
        'header__burger-menu--active': isBurgerOpen,
      }"
    />
  </header>
</template>

<script setup lang="ts">

  import logo from "@/assets/svg/logo.svg";
  import menuBurger from "@/assets/svg/menu-burger.svg";
  import { ref } from 'vue'
  import HeaderMenu from '@/components/HeaderMenu.vue'

  const isBurgerOpen = ref(false);

  const pagesList = [
    {
      id: 1,
      name: 'Агенство',
      url: '#',
    },
    {
      id: 2,
      name: 'Услуги',
      url: '#',
    },
    {
      id: 3,
      name: 'Кейсы',
      url: '#',
    },
    {
      id: 4,
      name: 'Блог',
      url: '#',
    },
    {
      id: 5,
      name: 'Контакты',
      url: '#',
    },
  ];
  const contacts = [
    {
      id: 1,
      name: '+7 999 123 45 67',
      url: 'tel:+79991234567'
    },
    {
      id: 2,
      name: 'hello@cyberia.studio',
      url: 'mailto:hello@cyberia.studio'
    },
    {
      id: 3,
      name: 'ул.Ярных, д.35, оф.10',
      url: '#'
    },
  ];

</script>