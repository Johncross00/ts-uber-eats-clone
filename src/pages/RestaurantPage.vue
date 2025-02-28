<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import bd from '../../bd'
import { RestaurantType } from '../types/restaurant'

const route = useRoute()
const restaurantName = ref<string>(route.params.name as string)

const restaurant = ref<RestaurantType | undefined>(
  bd.find((restaurant) => restaurant.name === restaurantName.value),
)
</script>

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

<style scoped lang="scss">
#return {
  margin: 25px 45px;
  font-weight: 700;
  cursor: pointer;

  text-decoration: none !important;
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
