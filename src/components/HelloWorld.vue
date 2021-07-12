<template>
  <h1>{{ msg }}</h1>

  <button
    class="
      mt-4
      px-4
      py-2
      bg-white
      border
      rounded-xl
      transition
      duration-500
      ease-in-out
      focus:ring-4
    "
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})

const count = ref(0)
</script>
