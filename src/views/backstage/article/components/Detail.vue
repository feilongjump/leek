<template>
  <div class="w-screen h-screen bg-white fixed top-0 left-0">
    <div class="h-14 w-full px-8 border-b border-gray-200 flex justify-between items-center">
      <input
        type="text"
        class="title-input h-full text-3xl outline-none placeholder:text-xl placeholder:align-middle"
        placeholder="Give me a title !"
      />
      <div class="w-64 h-full flex justify-between items-center">
        <button class="w-16 hollow-indigo-btn">草稿</button>
        <button class="w-16 solid-indigo-btn">发布</button>
        <router-link
          class="hollow-indigo-btn flex justify-center items-center"
          :to="{ name: 'Backstage.Article' }"
        >
          <ReplyIcon class="w-4 h-4 mr-1" />Return
        </router-link>
      </div>
    </div>
    <div id="vditor" />
  </div>
</template>

<script setup lang="ts">
import { ReplyIcon } from '@heroicons/vue/outline'
import { ref, onMounted } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const vditor = ref<Vditor | null>(null)

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    // sv - 分屏预览，ir - 即时渲染，wysiwyg - 所见即所得
    mode: 'sv',
    minHeight: 873,
    counter: {
      // 启用计数器
      enable: true
    },
    cache: {
      // 缓存后的回调
      after: (content) => {
        console.info(content)
      }
    },
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value!.setValue('> ### Write something well and try to improve yourself.')
    }
  })
})

defineProps({
  isEdit: {
    type: Boolean,
    default: true
  }
})
</script>

<style>
.title-input {
  width: calc(theme('width.screen') - theme('width.64'));
}
</style>
