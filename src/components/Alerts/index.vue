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
      <!-- success svg -->
      <svg
        v-if="type === 'success'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- warning svg -->
      <svg
        v-else-if="type === 'warning'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- error svg -->
      <svg
        v-else-if="type === 'error'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"
        />
      </svg>
      <!-- info svg -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="ml-2">{{ message }}</span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
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
