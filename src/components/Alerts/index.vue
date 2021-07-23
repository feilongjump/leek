<template>
  <transition name="bounce" @before-leave="onClose">
    <div
      class="
        min-w-80
        h-12
        fixed
        top-0
        rounded-lg
        left-1/2
        transform
        -translate-x-1/2
        flex
        justify-start
        items-center
        px-4
        py-2
      "
      :class="customClass"
      :style="customStyle"
      v-show="visible"
    >
      <component :is="typeIcon[type]" class="h-5 w-5"></component>
      <span class="ml-2">{{ message }}</span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/vue/solid'
import { defineProps, computed, onMounted, ref } from 'vue'
// https://github.com/vuejs/rfcs/discussions/325
import type { PropType } from 'vue'
import type { TypeClass } from './types'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  message: { type: String },
  type: { type: String, default: 'info' },
  offset: { type: Number, default: 20 },
  onClose: {
    type: Function as PropType<() => void>,
    required: true
  }
})

const visible = ref(false)

const typeIcon = {
  success: CheckCircleIcon,
  warning: ExclamationCircleIcon,
  info: InformationCircleIcon,
  error: XCircleIcon
}

const typeClass: TypeClass = {
  success: ['bg-green-300', 'text-green-500'],
  warning: ['bg-yellow-300', 'text-yellow-600'],
  info: ['bg-blue-300', 'text-blue-500'],
  error: ['bg-red-300', 'text-red-400']
}

const customClass = computed(() => {
  const classArr = []
  classArr.push(typeClass[props.type])

  return classArr
})

const customStyle = computed(() => {
  return {
    top: `${props.offset}px`
  }
})

onMounted(() => {
  setTimeout(() => {
    if (visible.value) {
      visible.value = false
    }
  }, 3000)

  visible.value = true
})
</script>

<style scoped>
.bounce-enter-active,
.bounce-leave-active {
  @apply transition-all duration-1000 ease-in-out;
}

.bounce-enter-from,
.bounce-leave-to {
  @apply opacity-0 -translate-y-8;
}
</style>
