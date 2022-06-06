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
      <div class="text-center mb-4">
        <span>{{ column.name }}</span>
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
        class="w-full h-12 rounded-xl border border-dashed border-indigo-300 flex justify-center items-center cursor-pointer"
      >
        <span> + Add Columns </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
const columns = ref<ProjectColumnResponse[]>()
const card = ref<ProjectColumnCardResponse>({
  project_column_id: 0,
  name: ''
})
const ProjectColumnRequest = new ProjectColumn()
const ProjectColumnCardRequest = new ProjectColumnCard()

const getColumns = () => {
  ProjectColumnRequest.index(params).then((response: ProjectColumnResponse[]) => {
    columns.value = response
  })
}

const handle = (evt: any, columnId: number) => {
  if (evt.added) {
    card.value.project_column_id = columnId
    card.value.id = evt.added.element.id
    card.value.name = evt.added.element.name

    const cardParams = {
      project: id,
      column: columnId
    }

    ProjectColumnCardRequest.update(evt.added.element.id, cardParams, card.value).then(() => {})
  }

  return true
}

onMounted(() => {
  getColumns()
})
</script>
