<template>
  <Header />
  <div class="page cases-page">
    <BreadCrumbs class="cases-page__bread-crumbs" :path="breadCrumbsPath" />
    <PageTitle class="cases-page__title">{{title}}</PageTitle>
    <Cases
      class="cases-page__cases-list"
      :cases-categories="casesCategories"
      :cases-list="casesList"
    />
    <FeedbackForm
      :form-data="formData"
      class="cases-page__form"
    />
  </div>
  <Footer/>
</template>

<script setup lang="ts">

 import { onMounted, ref } from 'vue';
 import axios from "axios";
 import Header from '@/components/Header.vue'
 import BreadCrumbs from '@/components/BreadCrumbs.vue'
 import PageTitle from '@/components/PageTitle.vue'
 import Cases from '@/components/Cases.vue'
 import FeedbackForm from '@/components/FeedbackForm.vue'
 import Footer from '@/components/Footer.vue'

 const breadCrumbsPath = 'Главная / Кейсы'
 const title = 'Кейсы';
 const casesList = ref(Array);
 const casesCategories = ref(Array);
 const formData = {
   title: 'Расскажите\nо вашем проекте:',
   alternativeTitle: 'Расскажите\nо вашем проекте',
   inputs: [
     {
       id: 1,
       name: 'name',
       label: 'Ваше имя*',
       type: 'text',
       min: 4,
       max: 16,
       required: true,
     },
     {
       id: 2,
       name: 'email',
       label: 'Email*',
       type: 'email',
       min: 4,
       max: 60,
       required: true,
     },
     {
       id: 3,
       name: 'tel',
       label: 'Телефон*',
       type: 'tel',
       min: 4,
       max: 16,
       required: true,
     },

   ],
   message: {
     label: 'Сообщение*',
     name: 'message',
     min: 16,
     max: 1000,
     required: true,
   },
   checkboxes: [
     {
       id: 1,
       name: 'confirmData',
       text: 'Согласие на обработку персональных данных',
       required: true,
     },
   ],
   additionalText: 'Нажимая “Отправить”, Вы даете согласие на обработку персональных данных',
   button: {
     name: 'Обсудить проект',
     alternativeName: 'Отправить',
   },
 };

 onMounted(() => {
   axios
     .get('https://api.test.cyberia.studio/api/v1/projects')
     .then(response => {casesList.value = response.data['items']});
   axios
     .get('https://api.test.cyberia.studio/api/v1/project-categories')
     .then(response => {casesCategories.value = response.data['items']})
 })

</script>
