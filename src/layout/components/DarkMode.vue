<template>
  <SunIcon
    v-show="darkMode == 'dark'"
    class="stroke-yellow-300 cursor-pointer"
    :class="props.class"
    @click="change('light')"
  />

  <MoonIcon
    v-show="darkMode == 'light'"
    class="stroke-slate-500 cursor-pointer"
    :class="props.class"
    @click="change('dark')"
  />
</template>

<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

type Mode = 'dark' | 'light'

const darkMode = ref<Mode>('light')

const change = (mode: Mode) => {
  darkMode.value = mode

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (mode === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
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
