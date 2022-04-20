<script setup lang="ts">
import avatar from '@/assets/avatar.jpg'
import {
  BeakerIcon,
  ArchiveIcon,
  CakeIcon,
  ColorSwatchIcon,
  FireIcon,
  BellIcon,
  ChatIcon
} from '@heroicons/vue/outline'

const menus = [
  {
    icon: BeakerIcon,
    bgColor: 'bg-indigo-100',
    strokeColor: 'stroke-indigo-400'
  },
  {
    icon: ArchiveIcon,
    bgColor: 'bg-gray-100',
    strokeColor: 'stroke-gray-400'
  },
  {
    icon: CakeIcon,
    bgColor: 'bg-gray-100',
    strokeColor: 'stroke-gray-400'
  },
  {
    icon: ColorSwatchIcon,
    bgColor: 'bg-gray-100',
    strokeColor: 'stroke-gray-400'
  },
  {
    icon: FireIcon,
    bgColor: 'bg-gray-100',
    strokeColor: 'stroke-gray-400'
  }
]
</script>

<template>
  <div id="navbar-container">
    <div class="w-full md:w-1/3 xl:max-w-sm">
      <ul class="flex">
        <li
          v-for="(item, index) in menus"
          :key="index"
          class="w-8 h-8 rounded-full p-1 mr-6 text-white flex justify-center items-center"
          :class="item.bgColor"
        >
          <component :is="item.icon" class="h-6 w-6 stroke-2" :class="item.strokeColor"></component>
        </li>
      </ul>
    </div>
    <div class="hidden md:flex items-center">
      <div class="mr-6">
        <input
          class="pl-2 border-b-2 outline-none transition ease-in-out duration-300 focus:border-indigo-500"
          placeholder="Search ..."
        />
      </div>
      <div class="flex items-center">
        <BellIcon class="h-6 w-6 stroke-blue-400 mr-6" />
        <ChatIcon class="h-6 w-6 stroke-indigo-400 mr-6" />
        <img class="h-8 w-8 rounded-full" :src="avatar" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#navbar-container {
  @apply h-12 w-screen md:h-20
    px-2 md:px-4 ml-0 md:ml-32 xl:ml-72
    fixed md:top-4
    bg-white rounded-b-xl md:rounded-xl shadow-xl
    transition-all duration-500 ease-in-out
    flex justify-between items-center;
}
@screen md {
  #navbar-container {
    width: calc(theme('width.screen') - theme('width.32') - theme('width.4'));
  }
}
@screen xl {
  #navbar-container {
    width: calc(theme('width.screen') - theme('width.72') - theme('width.4'));
  }
}
</style>
