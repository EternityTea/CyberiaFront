<template>
  <footer class="footer">
    <div class="footer__body">
      <div class="footer__logo-block">
        <img :src="logo" alt="CYBERIA" class="footer__logo">
        <div
          class="footer__logo-text"
          v-html="logoText"
        ></div>
      </div>
      <div class="footer__info-block">
        <a
          v-for="info in infoList"
          :key="info.id"
          :href="info.url"
          v-html="info.name"
          class="link footer__info-item"
        ></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

  import logo from '@/assets/svg/logo.svg'

  const logoText = 'Веб-разработка и усиление IT-команд';
  const infoList = [
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
    {
      id: 4,
      name: 'Агентство',
      url: '#'
    },
    {
      id: 5,
      name: 'Услуги',
      url: '#'
    },
    {
      id: 6,
      name: 'Кейсы',
      url: '#'
    },
    {
      id: 7,
      name: 'Блог',
      url: '#'
    },
    {
      id: 8,
      name: 'Контакты',
      url: '#'
    },
  ];

</script>