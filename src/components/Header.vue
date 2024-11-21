<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false); // État pour afficher/masquer le menu

// Liste des items du menu
const items = ref([
  { name: "Accueil", path: "/" },
  { name: "Mes requêtes", path: "/requests" },
  { name: "Nouvelles requêtes", path: "/submit" },
  { name: "Suivi des matières", path: "/subject" },
]);

// Fonction pour basculer l'affichage du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-blue-900 text-white py-3 fixed w-full z-5">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="logo flex items-center gap-2">
        <img src="" alt="Logo" class="h-8" />
      </div>

      <!-- Hamburger Icon (visible sur petits écrans) -->
      <div @click="toggleMenu" class="md:hidden cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <!-- Menu principal -->
      <ul
        :class="[ 
          'md:flex md:items-center md:space-x-8 md:static md:bg-transparent md:w-auto bg-blue-800 absolute top-14 left-0 w-full px-4 py-6  transition-all duration-300',
          isMenuOpen ? 'block' : 'hidden md:block'
        ]"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="[ 
            'text-white px-4 py-2 hover:text-white transition-all duration-300',
            route.path === item.path 
              ? 'bg-blue-800 text-white text-[18px] rounded-md font-bold hover:font-normal' 
              : 'font-normal hover:bg-blue-800 hover:text-white hover:font-bold'
          ]"
        >
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>

      <!-- Profil utilisateur -->
      <div class="ml-4 hidden md:flex items-center">
        <img src="" alt="User Profile" class="h-8 w-8 rounded-full border-2 border-white" />
      </div>
    </div>
  </header>

  <!-- Ajout de l'espace en haut pour compenser le header -->
  <main class="pt-16">
    <div class="container mx-auto">
      <p></p>
    </div>
  </main>
</template>

<style>
/* Ajout d'un léger effet pour l'icône */
header svg:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}
</style>
