<template>
  <div class="w-full flex justify-center text-lg font-bold">
    <h1 ref="rollDom">{{ data.title }}</h1>
  </div>
  <div class="mt-4 w-full flex justify-center">
    <button
      v-for="(item, index) in data.links"
      :key="index"
      class="ml-2 first:ml-0 bg-white px-2 py-1 rounded-md text-sm"
      @click="jump(item)"
    >
      {{ item.title }}
    </button>
  </div>
  <section
    class="w-full mt-4 flex flex-col space-y-4 tracking-widest"
    v-html="data.content"
  ></section>

  <div class="mt-4 w-full flex justify-center">
    <button
      v-for="(item, index) in data.links"
      :key="index"
      class="ml-2 first:ml-0 bg-white px-2 py-1 rounded-md text-sm"
      @click="jump(item)"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
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
const rollDom = ref<HTMLElement>()
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
      rollDom.value?.scrollIntoView()
    }
  })
}

const jump = (linkItem: ChapterLinksDetails) => {
  if (linkItem.is_novel_link) {
    router.push({ name: 'Backstage.Novel.Show', params: { novel } })
  } else {
    params.chapter = linkItem.link
    roll.value = true
    getChapter()
  }
}

onMounted(() => {
  getChapter()
})
</script>
