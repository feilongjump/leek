<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold">Article</span>
  </div>
  Details
</template>

<script setup lang="ts">
defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})
</script>
