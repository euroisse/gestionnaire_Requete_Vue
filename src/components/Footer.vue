<script>
  export default {
    name: "Footer",
  };
</script>

<template>
    <footer class="bg-blue-800 text-white py-6 mt-7 w-full">
      <div class="container mx-auto px-4 flex flex-wrap gap-6 justify-between">
        
        <!-- Informations de contact -->
        <div class="flex-1 text-center">
          <p>
            Rendez-vous sur votre tableau de bord étudiant, puis cliquez sur “Soumettre une requête.” Remplissez le formulaire et validez.
          </p>
        </div>
        
        <!-- Informations de contact supplémentaires -->
        <div class="flex-1 text-center">
          <p>
            Adresse: ENSPD-DOUALA, Campus, Logbessou <br />
            Téléphone: +237 6 XX XX XX XX <br />
            Email: contact@polytechnique-douala.cm
          </p>
        </div>
        
        <!-- Site officiel et portail -->
        <div class="flex-1 text-center">
          <p>
            Site officiel: Polytechnique Douala <br />
            Portail étudiant: Portail étudiant Polytechnique Douala
          </p>
        </div>
        
        <!-- Réseaux sociaux -->
        <div class="flex-1 text-center">
          <p>
            Réseaux sociaux: Facebook, Twitter, LinkedIn, YouTube
          </p>
        </div>
        
      </div>
    </footer>
  </template>
  
  <style scoped>
    /* Vous pouvez personnaliser davantage le style si nécessaire */
    footer p {
      font-size: 0.9rem; /* Ajustez la taille de la police si nécessaire */
    }
  </style>
  