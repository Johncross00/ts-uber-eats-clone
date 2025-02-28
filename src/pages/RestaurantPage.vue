<template>
  <RouterLink to="/"><div id="return">Retour</div></RouterLink>
  <div class="restaurant--name" v-if="restaurant">
    <div>
      <img :src="restaurant.image" alt="" />
    </div>
    <p>Nom du restaurant: {{ restaurant.name }}</p>
    <p>Note du restaurant: {{ restaurant.note }}</p>
    <p>Temps de trajet: {{ restaurant.drive_time }}</p>
  </div>
  <div v-else>
    <p>Restaurant non trouvé</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import bd from "../../bd";

// Déclaration du type du restaurant
interface RestaurantType {
  name: string;
  note: string;
  image: string;
  drive_time: string;
}

// Utilisation de `useRoute` pour obtenir les paramètres de la route
const route = useRoute();
const restaurantName = ref<string>(route.params.name as string);

// Recherche du restaurant correspondant au nom passé en paramètre
const restaurant = ref<RestaurantType | undefined>(
  bd.find((restaurant) => restaurant.name === restaurantName.value)
);
</script>

<style scoped lang="scss">
#return {
  margin: 25px 45px;
  font-weight: 700;
  cursor: pointer;

  text-decoration: none!important;
  color: black;

  &:hover {
    text-decoration: underline;
    font-weight: 900;
  }
}
.restaurant--name {
  font-size: 2rem;
  font-weight: bold;
  margin: 20px;
}
</style>
