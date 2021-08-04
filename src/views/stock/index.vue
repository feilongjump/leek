<template>
  <div class="mr-96">
    <div class="pt-8">
      <p class="text-white text-xl">Hi Leek,</p>
      <p class="text-white text-3xl font-semibold">Welcome to stock page📈</p>
    </div>

    <div class="mt-6">
      <List />
    </div>

    <Sidebar />
  </div>
</template>

<script lang="ts" setup>
import List from './components/List.vue'
import Sidebar from './components/Sidebar.vue'
</script>
