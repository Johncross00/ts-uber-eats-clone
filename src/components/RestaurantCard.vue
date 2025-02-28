<template>
  <div class="restaurant--card">
    <div :style="backgroundStyle" class="restaurant--image"></div>
    <div class="restaurant--informations">
      <div class="top">
        <p class="name">{{ info_restaurant.name }}</p>
        <p class="note"><span>{{ info_restaurant.note }}</span></p>
      </div>
      <p class="time">{{ info_restaurant.drive_time }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Définition du type pour les informations du restaurant
interface RestaurantType {
  name: string;
  note: string;
  image: string;
  drive_time: string;
}

// Définition des props avec TypeScript
const props = defineProps<{ info_restaurant: RestaurantType }>();

const backgroundStyle = ref<Record<string, string>>({});

onMounted(() => {
  backgroundStyle.value = {
    backgroundImage: `url(${props.info_restaurant.image})`,
  };
});
</script>

<style scoped lang="scss">
:root {
  --note-bg-color: #eeeeee;
  --note-size: 30px;
  --note-font-size: 0.8rem;
  --time-font-size: 0.9rem;
  --text-color: #000;
  --background-color: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --note-bg-color: #444;
    --text-color: #fff;
    --background-color: #333;
  }
}

.restaurant--card {
  width: 100%;
  height: 30vh;
  margin-bottom: 30px;
  margin-top: 10px;
  background-color: var(--background-color);
  color: var(--text-color);

  p {
    margin: 0;
  }

  .restaurant--image {
    height: 70%;
    background-size: cover;
    background-position: center;
    border-radius: 25px;
  }

  .restaurant--informations {
    .top {
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .note {
        background-color: var(--note-bg-color);
        height: var(--note-size);
        width: var(--note-size);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--note-font-size);
        border-radius: 50%;
      }
    }

    .time {
      font-size: var(--time-font-size);
    }
  }
}
</style>
