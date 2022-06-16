<template>
  <div class="w-full flex justify-center text-2xl font-bold dark:text-gray-200">
    <h1 ref="chapterDom">{{ data.title }}</h1>
  </div>
  <div class="mt-4 w-full flex justify-center">
    <button
      v-for="(item, index) in data.links"
      :key="index"
      class="ml-2 first:ml-0 bg-white dark:bg-slate-900 dark:text-gray-300 px-2 py-1 rounded-md text-sm"
      @click="jump(item)"
    >
      {{ item.title }}
    </button>
  </div>
  <section
    class="w-full text-xl mt-4 flex flex-col space-y-4 tracking-widest dark:text-gray-300"
    v-html="data.content"
  ></section>

  <div class="mt-4 w-full flex justify-center">
    <button
      v-for="(item, index) in data.links"
      :key="index"
      class="ml-2 first:ml-0 bg-white dark:bg-slate-900 dark:text-gray-300 px-2 py-1 rounded-md text-sm"
      @click="jump(item)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch, ref } from 'vue'
import Novel from '@/api/novel/index'
import { NovelParams, NovelChapterResponse, ChapterLinksDetails } from '@/api/novel/types'
import router from '@/router'

class NovelChapterResponseDefault implements NovelChapterResponse {
  title = ''

  links = {
    previous: {
      title: '',
      link: '',
      is_novel_link: false
    },
    show: {
      title: '',
      link: '',
      is_novel_link: false
    },
    next: {
      title: '',
      link: '',
      is_novel_link: false
    }
  }

  content = ''
}

const roll = ref<boolean>(false)
const chapterDom = ref<HTMLElement>()
const { novel, chapter } = router.currentRoute.value.params
const data = reactive<NovelChapterResponse>(new NovelChapterResponseDefault())
const params = reactive<NovelParams>({
  novel,
  chapter
})

const getChapter = () => {
  const NovelRequest = new Novel()
  NovelRequest.chapter(params).then((response) => {
    data.title = response.title
    data.links = response.links
    data.content = response.content

    if (roll.value) {
      chapterDom.value?.scrollIntoView()
    }
  })
}

const jump = (linkItem: ChapterLinksDetails) => {
  params.novel = novel
  params.chapter = linkItem.link
  const name = linkItem.is_novel_link ? 'Backstage.Novel.Show' : 'Backstage.Novel.Chapter'

  router.push({ name, params })
}

watch(
  () => router.currentRoute.value.params,
  (toParams) => {
    params.novel = toParams.novel
    params.chapter = toParams.chapter
    roll.value = true

    getChapter()
  }
)

onMounted(() => {
  getChapter()
})
</script>
