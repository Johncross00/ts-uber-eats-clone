<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RestaurantType } from '../types/restaurant'

const props = defineProps<{ info_restaurant: RestaurantType }>()

const backgroundStyle = ref<Record<string, string>>({})

onMounted(() => {
  backgroundStyle.value = {
    backgroundImage: `url(${props.info_restaurant.image})`,
  }
})
</script>

<template>
  <div class="restaurant--card">
    <div :style="backgroundStyle" class="restaurant--image"></div>
    <div class="restaurant--informations">
      <div class="top">
        <p class="name">{{ info_restaurant.name }}</p>
        <p class="note">
          <span>{{ info_restaurant.note }}</span>
        </p>
      </div>
      <p class="time">{{ info_restaurant.drive_time }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.restaurant--card {
  width: 100%;
  height: 30vh;
  padding: 5px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: var(--text-color);
  font-size: 20px;
  font-weight: bold;

  p {
    margin: 0;
  }

  .restaurant--image {
    height: 85%;
    background-size: cover;
    background-position: center;
    border-radius: 50px;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:hover {
      transform: scale(1.08);
      box-shadow: 0px 0px 40px var(--box-shadow-color);
    }
  }

  .restaurant--informations {
    .top {
      margin: 10px 0px;
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
