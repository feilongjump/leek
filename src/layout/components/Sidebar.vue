<script setup lang="ts">
import logo from '@/assets/logo.png'
import sidebarImg from '@/assets/sidebar.png'
</script>

<template>
  <div id="sidebar-container">
    <!-- logo and menus -->
    <div class="h-2/3">
      <!-- logo -->
      <div class="h-20 flex items-center justify-center">
        <img class="w-12" :src="logo" />
      </div>
      <div
        id="sidebar-menu"
        class="h-full lg:px-10 flex justify-center lg:justify-start overflow-y-scroll"
      >
        <ul class="w-full first-line:text-indigo-400 first-line:font-bold">
          <li
            v-for="(item, index) in 15"
            :key="index"
            class="w-full py-4 text-gray-400 cursor-pointer hover:text-indigo-400 hover:font-bold flex justify-center lg:justify-start"
          >
            Menu - {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- bottom -->
    <div>
      <div class="w-0 lg:w-full">
        <img class="w-full" :src="sidebarImg" />
      </div>
      <div class="flex justify-center items-center my-8">
        <router-link
          class="px-2 lg:px-5 py-1 lg:py-2 bg-indigo-500 rounded-lg text-white"
          :to="{ name: 'Login' }"
        >
          Log out
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sidebar-container {
  @apply h-screen w-0 md:w-24 lg:w-64
      fixed -left-24 md:left-0
      transition-all duration-500 ease-in-out
      flex flex-col justify-between;
}
#sidebar-menu {
  height: calc(100% - 80px - 2rem);
  @apply w-full;
}
</style>
