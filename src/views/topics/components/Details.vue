<template>
  <div class="text-white w-full md:w-4/5 lg:w-10/12 xl:w-6/12 mx-auto">
    <div class="py-2 flex items-center">
      <input
        class="w-52 bg-transparent border-b border-gray-400 outline-none"
        type="text"
        :value="details.title"
      />
      <span
        class="text-sm px-4 py-1 border border-gray-400 rounded-lg cursor-pointer ml-4"
        @click="submit"
        >提交</span
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Alert from '@/components/Alerts'
import router from '@/router'
import { computed, defineProps } from 'vue'
import type { Details } from './types'

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})

const details = computed((): Details => {
  const { id } = router.currentRoute.value.params
  if (props.isEdit) {
    // API, Get topic details
    return {}
  }

  return {}
})

const submit = () => {
  Alert.success('Success')
  router.push({ name: 'Backstage.Topic' })
}
</script>
