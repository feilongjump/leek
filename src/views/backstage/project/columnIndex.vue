<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <div>
      <router-link class="text-xl font-bold" :to="{ name: 'Backstage.Project' }">
        Project
      </router-link>
      <span class="mx-2">/</span>
      <span class="">Detail</span>
    </div>
  </div>
  <div class="flex">
    <div v-for="(column, index) in columns" :key="index" class="w-80 min-h-[2rem] mr-8">
      <div class="h-16 mb-4 flex justify-center items-center">
        <span class="">{{ column.name }}</span>
      </div>

      <draggable
        :list="column.cards"
        item-key="id"
        group="{{column.name}}"
        @change="handle($event, column.id)"
      >
        <template #item="{ element }">
          <div
            class="w-full min-h-[8rem] bg-white rounded-xl border p-5 mb-4 hover:shadow-md cursor-pointer"
          >
            {{ element.name }}
          </div>
        </template>
      </draggable>
      <div
        v-show="showColumnCardDom !== 0 && showColumnCardDom === column.id"
        class="w-full min-h-[8rem] bg-white rounded-xl border p-5 mb-4 hover:shadow-md cursor-pointer"
      >
        <textarea
          v-model="card.name"
          class="w-full outline-none border rounded border-indigo-300 px-3 py-2"
          rows="3"
        ></textarea>
        <div class="w-full mt-4 flex justify-end">
          <button class="hollow-base-btn hollow-indigo-btn mr-2" @click="showCardDom(0)">
            Cancel
          </button>
          <button class="solid-base-btn solid-indigo-btn" @click="createCard">Create</button>
        </div>
      </div>
      <div
        v-show="showColumnCardDom === 0 || card.project_column_id !== column.id"
        class="w-full h-12 rounded-xl border border-dashed border-indigo-300 flex justify-center items-center cursor-pointer"
        @click="showCardDom(column.id)"
      >
        <span> + Add Card </span>
      </div>
    </div>
    <div class="w-80 h-16 bg-white border rounded-xl p-4">
      <div class="w-full h-full relative">
        <input
          v-model="column.name"
          class="w-full h-full outline-none border-b-2 border-gray-300 py-1 pl-2 pr-8 focus:border-indigo-400"
          type="text"
          placeholder="Create Column"
          @keyup.enter="createColumn"
        />
        <PencilIcon class="h-5 w-5 absolute top-1 right-1 cursor-pointer" @click="createColumn" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/outline'
import { onMounted, ref, reactive } from 'vue'
import draggable from 'vuedraggable'
import ProjectColumn from '@/api/project/column'
import ProjectColumnCard from '@/api/project/card'
import {
  ProjectColumnParams,
  ProjectColumnResponse,
  ProjectColumnCardResponse
} from '@/api/project/types'
import router from '@/router'
import { ListParams } from '@/api/common'

const { id } = router.currentRoute.value.params
const params = reactive<ProjectColumnParams | ListParams>({
  project: id,
  include: 'cards'
})
const columns = ref<ProjectColumnResponse[]>([])
const column = ref<ProjectColumnResponse>({
  project_id: Number(id),
  name: ''
})
const columnParams = ref({
  project: id,
  include: 'cards'
})
const card = ref<ProjectColumnCardResponse>({
  project_column_id: 0,
  name: ''
})
const showColumnCardDom = ref<number>(0)
const cardParams = ref({
  project: id,
  column: 0
})
const ProjectColumnRequest = new ProjectColumn()
const ProjectColumnCardRequest = new ProjectColumnCard()

/**
 * 获取 columns
 */
const getColumns = () => {
  ProjectColumnRequest.index(params).then((response: ProjectColumnResponse[]) => {
    columns.value = response
  })
}

/**
 * 重置 card 默认值 & 对添加 card dom 元素进行初始化
 */
const resetCardValue = () => {
  card.value.project_column_id = 0
  card.value.name = ''

  showColumnCardDom.value = 0
}

/**
 * 更新 card 所属 column
 */
const handle = (evt: any, columnId: number | undefined) => {
  if (evt.added) {
    card.value.project_column_id = columnId ?? 0
    card.value.id = evt.added.element.id
    card.value.name = evt.added.element.name

    cardParams.value.project = id
    cardParams.value.column = columnId ?? 0

    ProjectColumnCardRequest.update(evt.added.element.id, cardParams.value, card.value).then(
      () => {}
    )

    // 重置其默认值
    resetCardValue()
  }

  return true
}

/**
 * 显示添加 card dom 元素
 */
const showCardDom = (columnId: number | undefined) => {
  card.value.project_column_id = columnId ?? 0

  showColumnCardDom.value = columnId ?? 0
}

/**
 * 创建 card
 */
const createCard = () => {
  cardParams.value.project = id
  cardParams.value.column = card.value.project_column_id

  ProjectColumnCardRequest.store(cardParams.value, card.value).then((response) => {
    columns.value?.forEach((columnItem, index) => {
      if (columnItem.id === card.value.project_column_id) {
        columns.value[index].cards?.push(response)
      }
    })

    resetCardValue()
  })
}

/**
 * 创建 Column
 */
const createColumn = () => {
  ProjectColumnRequest.store(columnParams.value, column.value).then((response) => {
    columns.value.push(response)

    column.value.name = ''
  })
}

onMounted(() => {
  getColumns()
})
</script>
