<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen w-screen flex bg-gray-50">
    <Sidebar />

    <Navbar />

    <div
      id="backstage-container"
      class="w-full ml-0 md:ml-32 lg:ml-72 mt-12 md:mt-24 pt-4 px-2 md:pr-4 md:pl-0 transition-all duration-500 ease-in-out"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
