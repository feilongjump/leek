<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold dark:text-gray-300">Chapter</span>
  </div>

  <div
    class="bg-white dark:bg-slate-900 dark:border-slate-900 w-full py-4 px-6 flex rounded-xl border shadow-xl"
  >
    <img class="h-full w-36 rounded-lg" :src="data.info.image" alt="" />
    <div class="ml-4 flex flex-col justify-between dark:text-gray-300">
      <p>
        <span class="text-xl font-semibold">{{ data.info.title }}</span>
        <br />
        <span class="text-sm">{{ data.info.author }}</span>
        <br />
        <span class="text-sm">{{ data.info.introduce }}</span>
      </p>
      <p class="flex flex-col text-sm text-gray-400">
        <span>{{ data.info.category }}</span>
        <span>{{ data.info.progress }}</span>
        <span>{{ data.info.updated_at }}</span>
      </p>
    </div>
  </div>
  <div class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-8">
    <div
      v-for="(chapter, index) in data.chapters"
      :key="index"
      class="bg-white dark:bg-slate-900 dark:border-slate-800 dark:text-gray-300 border rounded-lg mb-2 p-2 shadow-md"
      @click="toChapterDetails(chapter.link)"
    >
      {{ chapter.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import Novel from '@/api/novel/index'
import { NovelParams, NovelResponse, NovelResponseDefault } from '@/api/novel/types'
import router from '@/router'

const { novel } = router.currentRoute.value.params
const data = reactive<NovelResponse>(new NovelResponseDefault())
const params = reactive<NovelParams>({
  novel
})

const getShow = () => {
  const NovelRequest = new Novel()
  NovelRequest.show(params).then((response) => {
    data.info = response.info
    data.chapters = response.chapters
  })
}

const toChapterDetails = (chapter: string) => {
  router.push({ name: 'Backstage.Novel.Chapter', params: { novel, chapter } })
}

onMounted(() => {
  getShow()
})
</script>
