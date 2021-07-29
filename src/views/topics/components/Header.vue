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
  const { id } = currentRoute.params

  const routeName = currentRoute.name?.toString().split('.')?.pop()

  switch (routeName) {
    case 'Topic':
      router.push({ name: 'Backstage.Topic.Add' })
      break
    case 'Show':
      router.push({ name: 'Backstage.Topic.Edit', params: { id } })
      break
    default:
      router.push({ name: 'Backstage.Topic' })
      break
  }
}
</script>
