<template>
  <p>
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
  </p>
  <textarea v-model="text" />
  <ul>
    <li v-for="entry in history" :key="entry.timestamp">{{ entry }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useRefHistory } from '@vueuse/core';
const text = ref('');
const { history, undo, redo } = useRefHistory(text, {
  deep: true,
  capacity: 5,
});
</script>
