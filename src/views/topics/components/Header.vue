<template>
  <div class="pt-8 mb-8">
    <p class="text-white text-xl">Hi Leek,</p>
    <p class="text-white text-3xl font-semibold">
      Welcome to topic page<span class="cursor-pointer" @click="jump">📚</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const jump = () => {
  const currentRoute = router.currentRoute.value

  if (currentRoute.name?.toString().split('.').length === 3) {
    router.push({ name: 'Backstage.Topic' })
  } else {
    router.push({ name: 'Backstage.Topic.Add' })
  }
}
</script>
