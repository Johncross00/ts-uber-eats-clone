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

<script setup lang="ts">
import RestaurantCard from "./RestaurantCard.vue";

// Définition de l'interface pour le type du restaurant
interface RestaurantType {
    name: string;
    note: string;
    image: string;
    drive_time: string;
}

// Définition des props avec TypeScript
defineProps<{
    three_restaurent: RestaurantType[];
}>();
</script>

<style scoped lang="scss">
.restaurant--row {
    .restaurant--wrapper {
        width: 32%;
        text-decoration: none!important;
    }

    .title {
        font-size: 2rem;
    }

    .wrapper--card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
