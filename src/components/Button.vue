<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true, // Le lien cible est obligatoire
  },
});

const router = useRouter(); // Accès au routeur de Vue.js

const handleClick = () => {
  router.push(to); // Redirection vers la route définie par "to"
};
</script>

<template>
  <button
    @click="handleClick"
    class="bg-blue-600 hover:bg-blue-700 text-white text-center text-[18px] px-4 py-2 rounded-lg"
  >
    {{ content }}
  </button>
</template>
