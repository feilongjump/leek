<template>
  <div class="w-screen h-screen bg-white fixed top-0 left-0">
    <div class="h-14 w-full px-8 border-b border-gray-200 flex justify-between items-center">
      <input
        v-model="article.title"
        type="text"
        class="title-input h-full text-3xl outline-none placeholder:text-xl placeholder:align-middle"
        placeholder="Give me a title !"
      />
      <div class="w-64 h-full flex justify-between items-center">
        <button class="w-16 hollow-indigo-btn">草稿</button>
        <button class="w-16 solid-indigo-btn" @click="publish">发布</button>
        <router-link
          class="hollow-indigo-btn flex justify-center items-center"
          :back="{ path: '', go: '-1' }"
        >
          <ReplyIcon class="w-4 h-4 mr-1" />Return
        </router-link>
      </div>
    </div>
    <Editor v-model:value="article.content.markdown" />
  </div>
</template>

<script setup lang="ts">
import { ReplyIcon } from '@heroicons/vue/outline'
import Editor from '@/components/Markdown/Editor.vue'
import { onMounted, ref } from 'vue'
import router from '@/router'
import Article from '@/api/article/index'
import { ArticleResponse } from '@/api/article/types'
import { ElMessage } from 'element-plus'

const article = ref<ArticleResponse>({
  id: 0,
  title: '',
  created_at: '',
  updated_at: '',
  content: {
    body: '',
    markdown: '> 写点什么，好好的提升自己。'
  }
})

const props = defineProps({
  isEdit: {
    type: Boolean,
    default: false
  }
})
const ArticleRequest = new Article()

onMounted(() => {
  if (props.isEdit) {
    const { id } = router.currentRoute.value.params
    ArticleRequest.show(id).then((response) => {
      article.value = response
    })
  }
})

const publish = () => {
  if (props.isEdit) {
    ArticleRequest.update(article.value.id, article.value).then(() => {
      ElMessage.success('修改成功')
    })
  } else {
    ArticleRequest.store(article.value).then(() => {
      ElMessage.success('发布成功')

      router.push({ name: 'Backstage.Article' })
    })
  }
}
</script>

<style>
.title-input {
  width: calc(theme('width.screen') - theme('width.64'));
}
</style>
