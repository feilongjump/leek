<template>
  <SunIcon
    v-show="darkMode == 'light'"
    class="stroke-yellow-300"
    :class="props.class"
    @click="change('dark')"
  />

  <MoonIcon
    v-show="darkMode == 'dark'"
    class="stroke-slate-500"
    :class="props.class"
    @click="change('light')"
  />
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

type Mode = 'dark' | 'light'

const darkMode = ref<Mode>('dark')

const change = (mode: Mode) => {
  darkMode.value = mode

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = mode
}

const props = defineProps({
  class: {
    type: Array,
    default() {
      return ['h-6', 'w-6']
    }
  }
})
</script>
