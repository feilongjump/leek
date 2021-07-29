<template>
  <Header />

  <div class="text-white w-full md:w-4/5 lg:w-10/12 xl:w-6/12 mx-auto">
    <router-link
      class="block w-full p-4 mt-8 group"
      v-for="topic in topics"
      :key="topic.id"
      :to="{ name: 'Backstage.Topic.Edit', params: { id: topic.id } }"
    >
      <span class="text-2xl font-semibold">{{ topic.title }}</span>
      <p class="my-4">{{ topic.markdown }}</p>
      <div class="flex justify-end relative">
        <span class="text-sm text-gray-400">{{ topic.created_at }}</span>
        <span class="split-line group-hover:w-full"></span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'

const topics = [
  {
    id: 1,
    title: 'Title',
    markdown: 'Content',
    created_at: '2021.07.28'
  },
  {
    id: 2,
    title: 'Title',
    markdown: 'Content',
    created_at: '2021.07.28'
  }
]
</script>

<style scoped>
.split-line {
  content: '';
  @apply w-1/3 h-px bg-gray-500 absolute bottom-0 transition-all duration-500 ease-in-out;
}
</style>
