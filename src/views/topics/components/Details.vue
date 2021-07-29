<template>
  <div class="text-white w-full md:w-4/5 lg:w-10/12 xl:w-8/12 mx-auto">
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

    <div id="vditor" class="vditor mt-8"></div>
  </div>
</template>

<script lang="ts" setup>
import Vditor from 'vditor'
import router from '@/router'
import Alert from '@/components/Alerts'
import { computed, defineProps, onMounted } from 'vue'
import type { Details } from './types'

const { id } = router.currentRoute.value.params
const vditorCacheId = `topic-vditor-${id}`

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})

const details = computed((): Details => {
  if (props.isEdit) {
    // API, Get topic details
    return {}
  }

  return {}
})

onMounted(() => {
  // 由于不知道怎么去获取 contentEditor，暂时使用缓存的方式获取内容
  const contentEditor = new Vditor('vditor', {
    after() {
      contentEditor.setValue('# Hello leek')
    },
    height: 680,
    theme: 'classic',
    cache: {
      enable: true,
      id: vditorCacheId
    },
    toolbarConfig: {
      pin: true
    },
    resize: {
      enable: true
    }
  })
})

const submit = () => {
  Alert.success('Success')
  router.push({ name: 'Backstage.Topic' })
}
</script>

<style>
@import 'vditor/dist/index.css';
</style>
