<template>
  <div class="min-h-screen w-screen flex bg-gray-100 dark:bg-slate-800">
    <Sidebar />

    <Navbar />

    <div
      id="backstage-container"
      class="w-full ml-0 md:ml-32 xl:ml-72 mt-12 md:mt-24 pt-4 px-2 pb-20 md:pr-4 md:pl-0 md:pb-8 transition-all duration-500 ease-in-out"
    >
      <router-view></router-view>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
