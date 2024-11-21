<script setup>
import Button from '../components/Button.vue';
</script>

<template>
  <div class="container flex-grow pl-20  p-7 space-y-8 ">
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-16">
  <div class="p-10 flex-1">
    <h1 class="text-3xl font-bold p-5">
      Bienvenue <span class="text-blue-700">[Nom_Etudiant]</span> sur la plateforme de Gestion de requêtes étudiantes.
    </h1>
    <p class="text-gray-600 font-bold pl-5 text-xl mt-3">
      Soumettez vos demandes, suivez leur évolution en toute simplicité.
    </p>
  </div>
  <template>
  <div class="space-y-4">
    <!-- Bouton pour Nouvelles requêtes -->
    <Button content="Nouvelle requête" to="/submit" />

    <!-- Bouton pour Suivi des matières -->
    <Button content="Suivi des matières" to="/subject" />
  </div>
</template>



</section>


    <!-- Cartes des fonctionnalités principales -->
    <section>
      <h2 class="text-3xl pl-10 font-bold mb-4 ">Fonctionnalités principales</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pl-10 mb-5">
        <!-- Carte 1 -->
        <div class="bg-white shadow-lg text-center w-full rounded-lg p-10 ">
          <h3 class="text-lg text-gray-600 font-semibold">Soumission des requêtes</h3>
          <p class="text-gray-800 mt-2 ">
            Permettez aux étudiants de soumettre facilement leurs demandes via un formulaire intuitif.
          </p>
        </div>
        <!-- Carte 2 -->
        <div class="bg-white shadow-lg text-center w-full rounded-lg p-10">
          <h3 class="text-lg text-gray-600 font-semibold">Suivi des requêtes</h3>
          <p class="text-gray-800 mt-2">
            Consultez l'état d'avancement des requêtes en temps réel (en attente, en cours, traitée, rejetée).
          </p>
        </div>
        <!-- Carte 3 -->
        <div class="bg-white shadow-lg text-center w-full rounded-lg p-10">
          <h3 class="text-lg text-gray-600 font-semibold">Matières et Statuts</h3>
          <p class="text-gray-800 mt-2">
            Visualisez un résumé des requêtes soumises pour une meilleure gestion.
          </p>
        </div>
      </div>
    </section>

    <!-- Liste des matières et statuts -->
    <section>
      <div class=" pl-10 flex flex-row justify-between ">
        <h2 class="text-2xl font-bold mb-4">Matières et Statuts</h2>
        <router-link to="/Subject" class="text-gray-400 py-2">Voir plus</router-link>
      </div>
      <div class="flex flex-grow justify-around gap-7">
        <div class=" pl-10 w-full md:w-[48%] lg:w-[48%]">
          <table class="w-full text-center border-gray-200 shadow-md rounded-lg overflow-auto">
            <thead>
              <tr>
                <th class="border-gray-200 px-4 py-2">Code UE</th>
                <th class="border-gray-200 px-4 py-2">Matière</th>
                <th class="border-gray-200 px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-gray-200 px-4 py-2">HSE-5011</td>
                <td class="border-gray-200 px-4 py-2">Conception de SE</td>
                <td class="border-gray-200 px-4 py-2">En attente</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">HSE-5012</td>
                <td class="border-gray-200 px-4 py-2">Ethique professionnelle</td>
                <td class="border-gray-200 px-4 py-2">En cours</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">GIT-5081</td>
                <td class="border-gray-200 px-4 py-2">Ingénierie des Modèles</td>
                <td class="border-gray-200 px-4 py-2">En cours</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">GIT-5052</td>
                <td class="border-gray-200 px-4 py-2">Gestion de Projets</td>
                <td class="border-gray-200 px-4 py-2">Succès</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pl-10 w-full md:w-[48%] lg:w-[48%]">
          <table class="w-full text-center border-gray-200 shadow-md rounded-lg overflow-auto">
            <tbody>
              <tr>
                <td class="border-gray-200 px-4 py-2">HSE-5011</td>
                <td class="border-gray-200 px-4 py-2">Conception de SE</td>
                <td class="border-gray-200 px-4 py-2">En attente</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">HSE-5012</td>
                <td class="border-gray-200 px-4 py-2">Ethique professionnelle</td>
                <td class="border-gray-200 px-4 py-2">En cours</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">GIT-5081</td>
                <td class="border-gray-200 px-4 py-2">Ingénierie des Modèles</td>
                <td class="border-gray-200 px-4 py-2">En cours</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">GIT-5052</td>
                <td class="border-gray-200 px-4 py-2">Gestion de Projets</td>
                <td class="border-gray-200 px-4 py-2">Succès</td>
              </tr>
              <tr>
                <td class="border-gray-200 px-4 py-2">GIT-5052</td>
                <td class="border-gray-200 px-4 py-2">Gestion de Projets</td>
                <td class="border-gray-200 px-4 py-2">Succès</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
