<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold">Project</span>
    <router-link
      :to="{ name: 'Backstage.Project.Add' }"
      class="flex justify-center items-center bg-indigo-400 text-sm text-white rounded-lg px-4 py-2 hover:bg-indigo-500"
    >
      <DocumentAddIcon class="w-5 h-5 mr-1" />Add
    </router-link>
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
      <div class="w-full overflow-x-auto">
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
            <tr v-for="(item, index) in data.data" :key="index" class="bg-white">
              <th scope="row" class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap">
                {{ item.name }}
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
      <div class="w-full border-t px-4 py-4 flex justify-between items-center">
        <div class="text-gray-400 text-sm">
          <span>Showing:</span>
          <select
            v-model="params.per_page"
            class="text-black mx-3 outline-none"
            @change="handleFilter()"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span> of {{ data.meta.total }}</span>
        </div>
        <div class="flex">
          <ul class="flex items-center">
            <li
              class="w-12 h-9 mr-2 flex justify-center items-center"
              :class="[
                data.meta.current_page === 1
                  ? 'cursor-default'
                  : 'cursor-pointer hover:bg-indigo-100 hover:text-indigo-400'
              ]"
              @click="handleFilter(data.meta.current_page - 1)"
            >
              Prev
            </li>
            <li
              v-for="index of data.meta.last_page"
              :key="index"
              class="w-9 h-9 flex justify-center items-center mr-2 rounded-lg"
              :class="[
                index === data.meta.current_page
                  ? ' cursor-default bg-indigo-400 text-white'
                  : 'hover:bg-indigo-100 hover:text-indigo-400 cursor-pointer'
              ]"
              @click="handleFilter(index)"
            >
              {{ index }}
            </li>
            <li
              class="w-12 h-9 flex justify-center items-center p-2 rounded-lg"
              :class="[
                data.meta.current_page === data.meta.last_page
                  ? 'cursor-default'
                  : 'cursor-pointer hover:bg-indigo-100 hover:text-indigo-400'
              ]"
              @click="handleFilter(data.meta.current_page + 1)"
            >
              Next
            </li>
          </ul>
          <button></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DownloadIcon,
  TrashIcon,
  DocumentAddIcon,
  SearchIcon,
  FilterIcon,
  DocumentTextIcon
} from '@heroicons/vue/outline'
import { PencilIcon } from '@heroicons/vue/solid'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ref, reactive, onMounted } from 'vue'
import Project from '@/api/project/index'
import type { ListParams, ListResponse } from '@/api/common'
import { ListResponseDefault } from '@/api/common'
import { ProjectResponse } from '@/api/project/types'

const data = reactive<ListResponse<ProjectResponse>>(new ListResponseDefault())
const params = reactive<ListParams>({
  page: 1,
  per_page: 10
})

const getList = () => {
  const ProjectRequest = new Project()
  ProjectRequest.index(params).then((response) => {
    data.data = response.data
    data.links = response.links
    data.meta = response.meta
  })
}

const handleFilter = (page?: number) => {
  if (page && typeof page === 'number') {
    if (page < 1 || page > data.meta.last_page) return
    params.page = page
  }
  if (params.per_page !== data.meta.per_page) {
    // 处理跳转页数，当每页显示数量与当前页的乘积大于总数时，跳转至最后一页
    if (params.page * params.per_page > data.meta.total) {
      params.page = Math.ceil(data.meta.total / params.per_page)
    }
  }
  getList()
}

onMounted(() => {
  getList()
})

const status = ref([])
const apply = async (close: () => void) => {
  await getList()
  close()
}
</script>
