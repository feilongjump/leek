<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <div>
      <router-link class="text-xl font-bold" :to="{ name: 'Backstage.Project' }">
        Project
      </router-link>
      <span class="mx-2">/</span>
      <span class="">Detail</span>
    </div>
  </div>
  <div class="flex">
    <div
      v-for="(column, index) in columns"
      :key="index"
      class="w-80 min-h-[8rem] bg-white border shadow-xl rounded-lg mr-4 last:mr-0"
    >
      {{ column.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const columns = [
  {
    id: 1,
    name: 'Test'
  },
  {
    id: 2,
    name: 'Done'
  }
]
</script>
