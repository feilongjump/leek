<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen w-screen flex">
    <Sidebar />

    <Navbar />

    <div
      id="backstage-container"
      class="ml-0 md:ml-24 lg:ml-64 mt-12 md:mt-20 pt-4 px-2 md:px-4 transition-all duration-500 ease-in-out w-full"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
