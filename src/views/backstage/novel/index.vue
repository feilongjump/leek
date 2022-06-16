<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold dark:text-gray-300">Chapter</span>
  </div>

  <div
    class="w-full border bg-white dark:bg-slate-900 dark:border-slate-900 rounded-xl shadow-xl py-2"
  >
    <div class="px-4 py-4 w-full flex justify-between flex-wrap items-center">
      <div class="w-full sm:w-72 relative">
        <SearchIcon class="w-4 h-4 text-gray-400 absolute top-[3px]" />
        <input
          v-model="params.keyword"
          class="w-full pl-7 pb-1 border-b outline-none focus:border-indigo-500 transition ease-in-out duration-300 dark:bg-slate-900 dark:focus:border-indigo-500 dark:text-gray-300"
          placeholder="Search ..."
          @keyup.enter="getList"
        />
      </div>
    </div>
    <div v-show="!isEmpty(data)" class="border-t-2 dark:border-slate-800">
      <div class="w-full overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-300"
          >
            <tr>
              <th v-for="(header, index) in data.header" :key="index" scope="col" class="px-4 py-4">
                {{ header }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data.body" :key="index" class="bg-white dark:bg-slate-900">
              <th class="px-4 py-4">{{ item.category }}</th>
              <td class="px-4 py-4 font-medium text-gray-900">{{ item.title }}</td>
              <td class="px-4 py-4">{{ item.latestChapter }}</td>
              <td class="px-4 py-4">{{ item.author }}</td>
              <td class="px-4 py-4">{{ item.updated_at }}</td>
              <td class="px-4 py-4">{{ item.status }}</td>
              <td class="px-4 py-4 flex justify-end">
                <router-link
                  :to="{ name: 'Backstage.Novel.Show', params: { novel: item.link } }"
                  class="flex hollow-indigo-btn"
                >
                  <DocumentTextIcon class="w-4 h-4 mr-1" />Detail
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchIcon, DocumentTextIcon } from '@heroicons/vue/outline'
import { reactive, onMounted, watch } from 'vue'
import Novel from '@/api/novel/index'
import { NovelParams, NovelSearchResponse } from '@/api/novel/types'
import { isEmpty } from 'lodash'

const data = reactive<NovelSearchResponse>({})
const params = reactive<NovelParams>({
  keyword: ''
})

const getList = () => {
  if (!params.keyword) return

  const NovelRequest = new Novel()
  NovelRequest.search(params).then((response) => {
    data.header = response.header
    data.body = response.body
  })
}

watch(
  () => params.keyword,
  () => {
    getList()
  }
)

onMounted(() => {
  getList()
})
</script>
