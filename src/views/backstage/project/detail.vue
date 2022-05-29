<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <div>
      <router-link class="text-xl font-bold" :to="{ name: 'Backstage.Project' }">
        Project
      </router-link>
      <span class="mx-2">/</span>
      <span class="">Detail</span>
    </div>
    <router-link
      :to="{ name: 'Backstage.Project.Add' }"
      class="flex justify-center items-center bg-indigo-400 text-sm text-white rounded-lg px-4 py-2 hover:bg-indigo-500"
    >
      <DocumentAddIcon class="w-5 h-5 mr-1" />Add
    </router-link>
  </div>
</template>
