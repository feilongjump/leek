<script setup lang="ts">
import logo from '@/assets/logo.png'
import sidebarImg from '@/assets/sidebar.png'
import {
  ChartPieIcon,
  ClipboardCheckIcon,
  CogIcon,
  LogoutIcon,
  PencilIcon,
  ShoppingCartIcon,
  TemplateIcon
} from '@heroicons/vue/outline'

const menus = [
  {
    name: 'Dashboard',
    icon: ChartPieIcon
  },
  {
    name: 'Blog',
    icon: PencilIcon
  },
  {
    name: 'Product',
    icon: ShoppingCartIcon
  },
  {
    name: 'Order',
    icon: ClipboardCheckIcon
  },
  {
    name: 'Setting',
    icon: CogIcon
  },
  {
    name: 'Todo',
    icon: TemplateIcon
  }
]
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
        class="w-full sidebar-menu-height lg:px-10 flex justify-center lg:justify-start overflow-y-scroll"
      >
        <ul class="w-full">
          <li
            v-for="(item, index) in menus"
            :key="index"
            class="w-full py-4 text-gray-400 cursor-pointer hover:text-indigo-400 hover:font-bold flex justify-center lg:justify-start first:text-indigo-400 first:font-bold"
          >
            <component :is="item.icon" class="h-6 w-6 mr-0 lg:mr-4"></component>
            <span class="hidden lg:inline">{{ item.name }}</span>
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
          class="px-2 lg:px-5 py-1 lg:py-2 bg-indigo-500 rounded-lg text-white flex justify-center"
          :to="{ name: 'Login' }"
        >
          <LogoutIcon class="h-6 w-6 mr-0 lg:mr-4" /><span class="hidden lg:inline">Log out</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sidebar-container {
  @apply h-screen w-0 md:w-24 lg:w-64
      fixed top-4 -left-24 md:left-4
      bg-white rounded-xl shadow-xl
      transition-all duration-500 ease-in-out
      flex flex-col justify-between;
}
.sidebar-menu-height {
  height: calc(theme('height.full') - theme('height.20') - theme('height.8'));
}
</style>
