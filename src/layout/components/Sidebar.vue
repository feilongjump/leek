<script setup lang="ts">
import logo from '@/assets/logo.png'
import sidebarImg from '@/assets/sidebar.png'
</script>

<template>
  <div class="h-screen w-64 border-r fixed flex flex-col justify-between px-">
    <!-- logo and menus -->
    <div>
      <!-- logo -->
      <div class="h-20 flex items-center">
        <img class="w-12 ml-6" :src="logo" />
      </div>
      <div class="px-10 py-8">
        <ul class="first-line:text-indigo-400">
          <li
            v-for="(item, index) in 8"
            :key="index"
            class="py-4 text-gray-400 cursor-pointer hover:text-indigo-400"
          >
            Menu - {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <!-- bottom -->
    <div>
      <div class="w-full">
        <img class="w-full" :src="sidebarImg" />
      </div>
      <div class="flex justify-center items-center my-8">
        <router-link class="px-5 py-2 bg-indigo-500 rounded-lg text-white" :to="{ name: 'Login' }">
          Log out
        </router-link>
      </div>
    </div>
  </div>
</template>
