<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="min-h-screen w-screen">
    <Sidebar />

    <div id="backstage-container" class="ml-64">
      <router-view></router-view>
    </div>
  </div>
</template>
