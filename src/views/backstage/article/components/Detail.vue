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
    <Editor v-model:value="markdown" />
  </div>
</template>

<script setup lang="ts">
import { ReplyIcon } from '@heroicons/vue/outline'
import Editor from '@/components/Markdown/Editor.vue'
import { ref } from 'vue'

const markdown = ref<string>('')
</script>

<style>
.title-input {
  width: calc(theme('width.screen') - theme('width.64'));
}
</style>
