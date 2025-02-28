<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import bd from '../../bd'
import { RestaurantType } from '../types/restaurant'

const route = useRoute()
const restaurantName = ref<string>(route.params.name as string)

const restaurant = ref<RestaurantType | undefined>(
  bd.find((restaurant) => restaurant.name === restaurantName.value),
)
</script>

<template>
  <div class="page-container">
    <RouterLink to="/">
      <div class="return-button">
        <span>←</span> Retour
      </div>
    </RouterLink>
    <div v-if="restaurant" class="restaurant-card">
      <div class="image-container">
        <img :src="restaurant.image" alt="Image du restaurant" />
        <div class="overlay"></div>
      </div>
      <div class="info">
        <h1 class="name">{{ restaurant.name }}</h1>
        <p class="note">Note : {{ restaurant.note }} ⭐</p>
        <p class="time">Temps de trajet : {{ restaurant.drive_time }} 🏍️</p>
        <div class="detail-item">
          <div class="icon-wrapper">
            <span class="material-icons">⌚</span>
          </div>
          <span class="label">Ouvert jusqu'à 22h</span>
        </div>
      </div>
    </div>
    <div v-else class="not-found">
      <p>Restaurant non trouvé</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1e1e2f, #2d2d44);
  min-height: 100vh;
  // width: 100%;
}

.return-button {
  position: fixed;
  top: 2rem;
  left: 2rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
}

.restaurant-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  margin-top: 6rem;
  color: #ffffff;
}

.image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 16px 16px 0 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
}

.info {
  padding: 1.5rem;
  text-align: center;

  .name {
    font-size: 2rem;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .note,
  .time {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
}

.detail-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 0.8rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  .icon-wrapper {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.8rem;
    display: inline-flex;
    padding: 0.3rem;

    .material-icons {
      color: white;
      font-size: 1.8rem;
    }
  }

  .label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
}

.not-found {
  color: #ff6b6b;
  font-size: 1.5rem;
  margin-top: 4rem;
  text-align: center;
}
</style>
