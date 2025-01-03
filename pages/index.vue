<script setup>
import "maz-ui/styles";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";

definePageMeta({
  layout: 'default'
})

const formData = ref({
  name: "",
  gender: "",
  birthday: null,
  phone: null,
  documentId: null,
  email: "",
  allergy: false,
  day: "",
  country: ""
});
const formRules = {
  name: [{ required: true, message: "Name is required" }],
  gender: [{ required: true, message: "What is your gender?" }],
};
const countries = ref([])
onMounted(async () => {
  try{
    const response = await fetch('https://api.dev.app.camporganizer.app/users/references/countries')
    if(!response.ok) throw new Error('Failed to fetch data')
    countries.value = await response.json()
  } catch (err) {
    console.log(err)
  }
})
const filterCountry = (input, option) => {
  return option.value.toLowerCase().includes(input.toLowerCase());
};

</script>

<template>
  <a-form
    :layout="'vertical'"
    :model="formData"
    :rules="formRules"
    @submit.prevent=""
  >
    <a-form-item label="Upload photo of your kinder">
      <a-upload action="/upload.do" list-type="picture-card">
        <div>
          <PlusOutlined />
          <div style="margin-top: 8px">Upload</div>
        </div>
      </a-upload>
    </a-form-item>

    <a-form-item label="Name" name="name" :rules="formRules.name">
      <a-input
        v-model:value="formData.name"
        placeholder="Enter your child name"
      />
    </a-form-item>

    <a-form-item label="Your chado birthday">
      <a-date-picker
        v-model:value="formData.birthday"
        placeholder="Select a day"
      />
    </a-form-item>

    <a-form-item label="What is your gender" name="gender">
      <a-radio-group v-model:value="formData.gender">
        <a-radio value="male">Male</a-radio>
        <a-radio value="female">Female</a-radio>
        <a-radio value="mechanic">Ama mechanic</a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item name="phone" label="Chado's phone">
      <MazPhoneNumberInput
        v-model="formData.number"
        show-code-on-list
        :preferred-countries="['FR', 'BE', 'DE', 'GB', 'US', 'CA']"
        :ignored-countries="['AC']"
        @update="results = $event"
      />
    </a-form-item>

    <a-form-item>
      <a-input-number v-model:value="formData.documentId" />
    </a-form-item>

    <a-form-item name="email" label="Email ">
      <a-input
        :model="formData.email"
        placeholder="Enter your email"
        type="email"
      />
    </a-form-item>

    <a-form-item name="allergy" label="Your have allergy?">
      <a-switch v-model:checked="formData.allergy" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>

    <a-form-item>
      <a-select v-model="formData.day" placeholder="Select a day">
        <a-select-option
          v-for="(day, index) in [
            'Понедельник - бездельник',
            'Вторник - повторник',
            'Среда - тамада',
          ]"
          :value="day"
          :key="index"
        />{{ day }}</a-select
      >
    </a-form-item>

    <a-form-item name="country" label="Select a country">
      <a-select 
      show-search
      allow-clear
      :filter-option="filterCountry" 
      v-model="formData.country" placeholder="Select a country">
        <a-select-option
          v-for="(country, index) in countries"
          :value="country.title"
          :key="index"
        />{{ country }}
      </a-select>
    </a-form-item>
  </a-form>
</template>
