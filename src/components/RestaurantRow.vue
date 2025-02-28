<script setup lang="ts">
import { RestaurantType } from '../types/restaurant'
import RestaurantCard from './RestaurantCard.vue'

defineProps<{
  three_restaurent: RestaurantType[]
}>()
</script>

<template>
  <div class="restaurant--row">
    <h2 class="title">Nos restaurants</h2>
    <div class="wrapper--card">
      <RouterLink
        v-for="(restaurant, index) in three_restaurent"
        :key="index"
        :to="`/restaurant/${restaurant.name}`"
        class="restaurant--wrapper"
      >
        <RestaurantCard :info_restaurant="restaurant" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.restaurant--row {
  .restaurant--wrapper {
    width: 32%;
    text-decoration: none !important;
  }

  .title {
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .wrapper--card {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
