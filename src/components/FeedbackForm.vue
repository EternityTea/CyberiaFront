<template>
  <form
    @submit.prevent="sendForm"
    method="post"
    class="feedback-form"
    ref="form"
  >
    <div
      class="feedback-form__title-block"
    >
      <img :src="Icon" alt="ICON" class="feedback-form__icon">
      <div
        class="feedback-form__title"
        v-html="screenWidth >= 768 ? formData.title : formData.alternativeTitle"
      ></div>
    </div>
    <div v-if="formData.inputs" class="feedback-form__inputs-list">
      <div
        v-for="input in formData.inputs"
        :key="input.id"
        class="feedback-form__input-block"
      >
        <label :for="'input' + input.id" class="feedback-form__label" v-html="input.label"></label>
        <input
          :id="'input' + input.id"
          :name="input.name"
          :minlength="input.min"
          :maxlength="input.max"
          :required="input.required"
          :type="input.type"
          :placeholder="input.label"
          class="feedback-form__input feedback-form__input--text"
        >
      </div>
    </div>
    <div v-if="formData.message" class="feedback-form__message-block">
      <label for="message" class="feedback-form__label" v-html="formData.message.label"></label>
      <textarea
        id="message"
        :name="formData.message.name"
        :required="formData.message.required"
        :placeholder="formData.message.label"
        class="feedback-form__input feedback-form__input--textarea"
      ></textarea>
    </div>
    <div v-if="formData.checkboxes && screenWidth >= 768" class="feedback-form__checkboxes-list">
      <div
        v-for="checkbox in formData.checkboxes"
        :key="checkbox.id"
        class="feedback-form__checkboxes-block"
      >
        <input
          type="checkbox"
          :name="checkbox.name"
          :id="'checkbox' + checkbox.id"
          :required="checkbox.required"
          class="feedback-form__checkbox"
        >
        <label
          :for="'checkbox' + checkbox.id"
          class="feedback-form__checkbox-label"
        ><span class="feedback-form__checkbox-text" v-html="checkbox.text"></span></label>
      </div>
    </div>
    <input
      type="submit"
      :value="screenWidth >= 768 ? formData.button.name : formData.button.alternativeName"
      class="feedback-form__submit"
    >
    <div
      class="feedback-form__additional-text"
      v-html="formData.additionalText"
    ></div>
  </form>
</template>

<script setup lang="ts">

  import FeedbackForm from '@/assets/typescrypt/FeedbackForm.ts';
  import { ref } from 'vue'

  import Icon from '@/assets/svg/feedback-icon.svg';
  import axios from 'axios'

  const screenWidth = ref(screen.width);
  const form = ref(HTMLFormElement);

  const props = defineProps<{
    formData: FeedbackForm,
  }>();

  function sendForm() {
    axios.post('https://api.test.cyberia.studio/api/v1/feedbacks', {
      name: form.value.name.value,
      email: form.value.email.value,
      tel: form.value.tel.value,
      message: form.value.message.value,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function() {
        alert('Сообщение успешно отправлено!');
        form.value.reset();
      })
      .catch(function (error) {
        alert('Ошибка');
        if (error.response && error.response.status === 422) {
          alert(error.response.data);
        }
      })
  }

</script>