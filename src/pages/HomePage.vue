<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import RestaurantRow from '../components/RestaurantRow.vue'
import bd from '../../bd'
import { RestaurantType } from '../types/restaurant'

const data_restaurant = ref<RestaurantType[][]>([])
const all_restaurants: RestaurantType[] = []

const makeDataRestaurant = () => {
  let three_restaurant: RestaurantType[] = []

  for (const restaurant of bd) {
    const new_restaurant: RestaurantType = {
      name: restaurant.name,
      note: restaurant.note,
      image: restaurant.image,
      drive_time: restaurant.drive_time,
    }

    all_restaurants.push(new_restaurant)

    if (three_restaurant.length === 2) {
      three_restaurant.push(new_restaurant)
      data_restaurant.value.push(three_restaurant)
      three_restaurant = []
    } else {
      three_restaurant.push(new_restaurant)
    }
  }
  console.log(data_restaurant)
}

const user_search = ref<string>('')
const search_restaurant = ref<RestaurantType[]>([])

watch(user_search, (newValue) => {
  const regex = new RegExp(newValue, 'i')
  const new_search_restaurant = all_restaurants.filter((restaurant) => regex.test(restaurant.name))

  search_restaurant.value = newValue ? new_search_restaurant : []
})

onMounted(makeDataRestaurant)
</script>

<template>
  <div class="home">
    <div class="header">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt="Logo de Uber Eats"
      />
      <div class="wrapper--input">
        <input type="text" placeholder="De quoi avez vous envie?" v-model="user_search" />
        <div class="search">
          <RouterLink
            v-for="restaurant in search_restaurant"
            :key="restaurant.name"
            :to="`/restaurant/${restaurant.name}`"
          >
            <div class="container--restaurant--search">
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="" />
              </div>
              <p>{{ restaurant.name }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <RestaurantRow v-for="(data, index) in data_restaurant" :key="index" :three_restaurent="data" />
  </div>
</template>

<style scoped lang="scss">
.home {
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 200px;
      background-color: #eeeeee;
      padding: 5px;
      height: 60px;
      border-radius: 15px;
    }

    .wrapper--input {
      position: relative;

      input {
        background-color: #f6f6f6;
        border-radius: 15px;
        border: none;
        height: 60px;
        width: 400px;
        padding-left: 20px;
        box-shadow: 0px 0px 5px #ffffff;
        font-size: 1.2rem;
        outline: none;
      }

      .search {
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: var(--search-bg-color);
      }

      .container--restaurant--search {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: var(--search-bg-color);
        color: var(--text-color);

        &:hover {
          background-color: var(--search-hover-bg-color);
        }

        .wrapper--img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 25px;

          img {
            width: auto;
            height: 100%;
          }
        }
      }
    }
  }

  .banner {
    height: 245px;
    width: 100%;
    background-image: url('https://th.bing.com/th/id/R.9c14304ad1375a3c79d400e0c7743646?rik=Z0Q98S4KyhOwLA&pid=ImgRaw&r=0');
    background-size: full;
    background-position: center;
    border-radius: 150px;
    transition: transform 0.5s;

    &:hover {
      transform: scale3d(1.02, 1.08, 1);
    }
  }
}
</style>
