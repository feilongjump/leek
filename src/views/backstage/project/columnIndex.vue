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
    <div v-for="(column, index) in columns" :key="index" class="w-80 min-h-[2rem] mr-8">
      <div class="text-center mb-4">
        <span>{{ column.name }}</span>
      </div>

      <draggable :list="column.cards" item-key="id" group="{{column.name}}">
        <template #item="{ element }">
          <div
            class="w-full min-h-[8rem] bg-white rounded-xl border p-5 mb-4 hover:shadow-md cursor-pointer"
          >
            {{ element.name }}
          </div>
        </template>
      </draggable>
      <div
        class="w-full h-12 rounded-xl border border-dashed border-indigo-300 flex justify-center items-center cursor-pointer"
      >
        <span> + Add Columns </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const columns = ref([
  {
    id: 1,
    name: 'Test',
    cards: [
      {
        id: 3,
        name: 'Test'
      },
      {
        id: 4,
        name: 'Test'
      },
      {
        id: 5,
        name: 'Test'
      }
    ]
  },
  {
    id: 2,
    name: 'Done',
    cards: [
      {
        id: 1,
        name: 'Test-Done'
      },
      {
        id: 2,
        name: 'Test-Done'
      }
    ]
  }
])
</script>
