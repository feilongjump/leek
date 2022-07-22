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
        <button class="w-16 hollow-indigo-btn" @click="openDraft">草稿</button>
        <button class="w-16 solid-indigo-btn" @click="publish">发布</button>
        <router-link
          class="hollow-indigo-btn flex justify-center items-center"
          :to="{ name: 'Backstage.Article' }"
        >
          <ReplyIcon class="w-4 h-4 mr-1" />Return
        </router-link>
      </div>
    </div>
    <Editor v-model:value="article.content.markdown" @update:value="receive" />

    <DraftBox ref="draftDom" @update:replace="replace" />
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
import dayjs from 'dayjs'
import DraftBox from './DraftBox.vue'

interface DraftComponent {
  open: () => {}
}
const draftDom = ref<null | DraftComponent>(null)
const openDraft = () => {
  draftDom.value?.open()
}

const article = ref<ArticleResponse>({
  id: 0,
  title: '',
  created_at: '',
  updated_at: '',
  type: 'markdown',
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
  // 固定提交 markdown
  article.value.type = 'markdown'

  if (props.isEdit) {
    ArticleRequest.update(article.value.id, article.value).then(() => {
      ElMessage.success('修改成功')
    })
  }
  ArticleRequest.store(article.value).then(() => {
    ElMessage.success('发布成功')

    router.push({ name: 'Backstage.Article' })
  })
}

/**
 * 本地缓存文章草稿
 */
const setArticleKey = (articleKey: string) => {
  const articleKeyStr = localStorage.getItem('article_keys') || '[]'
  const articleKeyArr: string[] = JSON.parse(articleKeyStr)
  let existed = []

  if (articleKeyArr.length !== 0) {
    // 校验是否存在
    existed = articleKeyArr.filter((item) => {
      return item === articleKey
    })
  }
  if (existed.length === 0) {
    articleKeyArr.push(articleKey)
    localStorage.setItem('article_keys', JSON.stringify(articleKeyArr))
  }
}

/**
 * 接收 markdown 内容 并且存储到本地
 *
 * @param markdown string
 */
const receive = (markdown: string) => {
  article.value.content.markdown = markdown

  // 本地缓存数据
  const id = article.value.id ? article.value.id : 0
  const type = id === 0 ? 'draft' : 'published'
  const articleKey = `article_${id}_${type}`

  setArticleKey(articleKey)

  article.value.drafted_at = dayjs().format('YYYY-MM-DD HH:mm:ss')
  localStorage.setItem(articleKey, JSON.stringify(article.value))
}

const replace = (value: ArticleResponse) => {
  article.value.content.markdown = value.content.markdown
}
</script>

<style>
.title-input {
  width: calc(theme('width.screen') - theme('width.64'));
}
</style>
