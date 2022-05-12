<template>
  <div id="sidebar-container">
    <!-- logo and menus -->
    <div class="h-2/3">
      <!-- logo -->
      <div class="h-20 flex items-center justify-center">
        <img class="w-12" :src="logo" />
      </div>
      <div
        class="w-full sidebar-menu-height xl:px-10 flex justify-center xl:justify-start overflow-y-scroll"
      >
        <ul class="w-full">
          <li
            v-for="(item, index) in menus"
            :key="index"
            class="w-full py-4 text-gray-400 cursor-pointer hover:activate-menu"
          >
            <router-link
              class="w-full h-full flex justify-center xl:justify-start"
              :to="{ name: item.pathName }"
            >
              <component :is="item.icon" class="h-6 w-6 mr-0 xl:mr-4"></component>
              <span class="hidden xl:inline">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- bottom -->
    <div>
      <div class="w-0 xl:w-full">
        <img class="w-full" :src="sidebarImg" />
      </div>
      <div class="flex justify-center items-center my-8">
        <router-link
          class="px-2 xl:px-5 py-1 xl:py-2 bg-indigo-500 rounded-lg text-white flex justify-center"
          :to="{ name: 'Login' }"
        >
          <LogoutIcon class="h-6 w-6 mr-0 xl:mr-4" /><span class="hidden xl:inline">Log out</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
import sidebarImg from '@/assets/sidebar.png'
import { ChartPieIcon, LogoutIcon, PencilIcon } from '@heroicons/vue/outline'

const menus = [
  {
    name: 'Dashboard',
    icon: ChartPieIcon,
    pathName: 'Backstage.Dashboard'
  },
  {
    name: 'Article',
    icon: PencilIcon,
    pathName: 'Backstage.Article'
  }
]
</script>

<style scoped>
#sidebar-container {
  @apply h-screen w-0 md:w-24 xl:w-64
      fixed top-4 -left-24 md:left-4
      border bg-white rounded-xl shadow-xl
      transition-all duration-500 ease-in-out
      flex flex-col justify-between;
}
.sidebar-menu-height {
  height: calc(theme('height.full') - theme('height.20') - theme('height.8'));
}
</style>
