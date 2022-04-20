<script setup lang="ts">
import logo from '@/assets/logo.png'
import avatar from '@/assets/avatar.jpg'
import { BellIcon, ChatIcon, TemplateIcon } from '@heroicons/vue/outline'
</script>

<template>
  <footer class="w-screen h-12 fixed bottom-0 px-6 flex md:hidden rounded-t-xl">
    <div
      class="w-12 h-12 rounded-full fixed bottom-6 inset-x-1/2 bg-white -ml-6 flex items-center justify-center shadow-xl"
    >
      <img class="w-8 h-8" :src="logo" />
    </div>
    <div class="w-full flex justify-between">
      <div class="w-1/2 pr-12 flex justify-between items-center">
        <div class="w-1/2 flex justify-center">
          <BellIcon class="h-6 w-6 stroke-blue-400" />
        </div>
        <div class="w-1/2 flex justify-center">
          <ChatIcon class="h-6 w-6 stroke-indigo-400" />
        </div>
      </div>
      <div class="w-1/2 pl-12 flex justify-between items-center">
        <div class="w-1/2 flex justify-center">
          <TemplateIcon class="h-6 w-6 stroke-indigo-400" />
        </div>
        <div class="w-1/2 flex justify-center">
          <img class="h-8 w-8 rounded-full" :src="avatar" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: radial-gradient(circle at 50% 0%, transparent, transparent 32px, #fff 33px);
}
</style>
