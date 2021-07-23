<template>
  <div
    class="
      h-screen
      w-0
      md:w-24
      lg:w-64
      fixed
      -left-24
      md:left-0
      bg-tra
      pt-8
      px-4
      transition-all
      duration-500
      ease-in-out
      shadow-xl
      border-r border-gray-500
    "
  >
    <div>
      <span class="text-gray-300 text-3xl">Leek</span>
    </div>
    <div class="mt-8">
      <div class="mb-4 px-2 text-gray-400">Admin Tools</div>
      <ul class="text-gray-300">
        <li class="my-2 py-3 px-6 flex items-center activate-menu">
          <FireIcon class="h-5 w-5 mr-3 group-hover:h-6 group-hover:w-6 group-hover:mr-4" />
          <span>Overview</span>
        </li>
        <li
          class="
            my-2
            py-3
            px-6
            flex
            items-center
            transition-all
            duration-500
            ease-in-out
            hover:activate-menu
            group
          "
        >
          <LibraryIcon class="h-5 w-5 mr-3 group-hover:h-6 group-hover:w-6 group-hover:mr-4" />
          <span>blog</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FireIcon, LibraryIcon } from '@heroicons/vue/outline'
</script>
