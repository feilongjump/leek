<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold">Chapter</span>
  </div>

  <div class="w-full border bg-white rounded-xl shadow-xl py-2">
    <div class="px-4 py-4 w-full flex justify-between flex-wrap items-center">
      <div class="w-full sm:w-72 relative">
        <SearchIcon class="w-4 h-4 text-gray-400 absolute top-[3px]" />
        <input
          class="w-full pl-7 pb-1 border-b outline-none focus:border-indigo-500 transition ease-in-out duration-300"
          placeholder="Search ..."
        />
      </div>
      <div class="flex flex-wrap items-center mt-4 sm:mt-0">
        <button
          class="flex justify-center items-center hollow-error-btn mr-4 transition-all duration-500 ease-in-out"
        >
          <TrashIcon class="w-4 h-4 mr-1" />Delete
        </button>
        <button
          class="flex justify-center items-center hollow-indigo-btn mr-4 transition-all duration-500 ease-in-out"
        >
          <DownloadIcon class="w-4 h-4 mr-1" />Export
        </button>
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            class="flex justify-center items-center hollow-indigo-btn transition-all duration-500 ease-in-out"
          >
            <FilterIcon class="w-4 h-4 mr-1" />Filter
          </PopoverButton>

          <div v-if="open">
            <PopoverPanel
              v-slot="{ close }"
              class="w-64 absolute z-10 top-12 right-0 bg-white rounded-xl py-4 shadow-xl border border-gray-200"
            >
              <div class="border-b px-4 pb-4">
                <span class="font-bold">Filter</span>
              </div>
              <div class="px-4 pt-4">
                <div class="mb-4">
                  <div class="text-sm font-semibold mb-2 text-gray-400"><span>Status</span></div>
                  <div class="w-full flex justify-between">
                    <div class="flex items-center relative">
                      <input
                        id="published-status"
                        v-model="status"
                        value="published"
                        type="checkbox"
                        class="cursor-pointer peer"
                      />
                      <label
                        for="published-status"
                        class="text-sm cursor-pointer ml-4 text-gray-500 before:w-5 before:h-5 before:bg-white before:rounded-md before:absolute before:border before:border-gray-300 before:left-0 before:top-0 peer-checked:before:bg-indigo-400 peer-checked:before:border-indigo-400 after:block after:w-5 after:h-5 after:absolute after:left-0 after:top-0 after:bg-check after:bg-cover after:bg-no-repeat"
                      >
                        Published
                      </label>
                    </div>
                    <div class="flex items-center relative">
                      <input
                        id="draft-status"
                        v-model="status"
                        value="draft"
                        type="checkbox"
                        class="cursor-pointer peer"
                      />
                      <label
                        for="draft-status"
                        class="text-sm cursor-pointer ml-4 text-gray-500 before:w-5 before:h-5 before:bg-white before:rounded-md before:absolute before:border before:border-gray-300 before:left-0 before:top-0 peer-checked:before:bg-indigo-400 peer-checked:before:border-indigo-400 after:block after:w-5 after:h-5 after:absolute after:left-0 after:top-0 after:bg-check after:bg-cover after:bg-no-repeat"
                      >
                        Draft
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  class="w-full bg-indigo-400 text-white rounded-lg py-2"
                  @click="apply(close)"
                >
                  Apply
                </button>
              </div>
            </PopoverPanel>
          </div>
        </Popover>
      </div>
    </div>
    <div class="border-t-2">
      <div class="w-full">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-slate-50">
            <tr>
              <th scope="col" class="px-4 py-4">Name</th>
              <th scope="col" class="px-4 py-4">Created Time</th>
              <th scope="col" class="px-4 py-4">Updated Time</th>
              <th scope="col" class="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data.body" :key="index" class="bg-white">
              <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                {{ item.title }}
              </th>
              <td class="px-4 py-4">{{ item.created_at }}</td>
              <td class="px-4 py-4">{{ item.updated_at }}</td>
              <td class="px-4 py-4 flex justify-end">
                <router-link
                  :to="{ name: 'Backstage.Project.Edit', params: { id: item.id } }"
                  class="flex hollow-indigo-btn"
                >
                  <PencilIcon class="w-4 h-4 mr-1" />Edit
                </router-link>
                <router-link
                  :to="{ name: 'Backstage.Project.Column', params: { id: item.id } }"
                  class="flex hollow-indigo-btn ml-2"
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
import {
  DownloadIcon,
  TrashIcon,
  SearchIcon,
  FilterIcon,
  DocumentTextIcon
} from '@heroicons/vue/outline'
import { PencilIcon } from '@heroicons/vue/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { reactive, onMounted } from 'vue'
import Novel from '@/api/novel/index'
import { NovelParams, NovelSearchResponse } from '@/api/novel/types'

const data = reactive<NovelSearchResponse>({})
const params = reactive<NovelParams>({
  keyword: ''
})

const getList = () => {
  const NovelRequest = new Novel()
  NovelRequest.search(params).then((response) => {
    data.header = response.header
    data.body = response.body
  })
}

onMounted(() => {
  getList()
})
</script>
