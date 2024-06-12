<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>

  
</template>


<script setup>
import { ref } from 'vue';
import { useMyStore } from '../stores/store.js';


    const formStore = useMyStore();
    
    // Define refs for name and email
    const name = ref('');
    const email = ref('');

    const submitForm = () => {
      
      if (!name.value.trim() || !email.value.trim()) {
        alert('Please fill in all fields');
        return;
      }

      
      formStore.addPerson({ 
        name: name.value, 
        email: email.value });

      name.value = '';
      email.value = '';
    };

</script>
