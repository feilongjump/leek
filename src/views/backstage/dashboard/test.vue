<script lang="ts" setup>
import { ref } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline'

const calendar = ref()
const selectDate = (val: string) => {
  calendar.value.selectDate(val)
}
</script>

<template>
  <div class="w-1/3 h-96 p-6 bg-white rounded-xl shadow-xl">
    <el-config-provider :locale="zhCn">
      <el-calendar id="calendar-container" ref="calendar" class="h-full w-full">
        <template #header="{ date }">
          <span class="text-xl font-bold">{{ date }}</span>
          <div class="flex">
            <div
              class="w-7 h-7 rounded-full bg-indigo-500 flex justify-center items-center cursor-pointer mr-4"
              @click="selectDate('prev-month')"
            >
              <ChevronLeftIcon class="h-5 w-5 mr-0 stroke-white" />
            </div>
            <div
              class="w-7 h-7 rounded-full bg-indigo-500 flex justify-center items-center cursor-pointer"
              @click="selectDate('next-month')"
            >
              <ChevronRightIcon class="h-5 w-5 mr-0 stroke-white" />
            </div>
          </div>
        </template>
      </el-calendar>
    </el-config-provider>
  </div>
</template>

<style>
#calendar-container .el-calendar__header {
  @apply px-2 mb-6;
}
#calendar-container .el-calendar-table thead th {
  @apply p-0;
}
#calendar-container .el-calendar__body {
  @apply p-0;
}
#calendar-container .el-calendar-table tr td:first-child {
  @apply border-t-0 border-l-0;
}
#calendar-container .el-calendar-table td {
  @apply border-0;
}
#calendar-container .el-calendar-table .el-calendar-day {
  @apply h-10 p-0 flex justify-center items-center;
}
#calendar-container .el-calendar-table td.is-selected {
  @apply bg-indigo-500 rounded-full;
  color: white !important;
}
#calendar-container .el-calendar-table td.is-today {
  @apply text-indigo-500;
}
#calendar-container .el-calendar-table .el-calendar-day {
  @apply hover:bg-indigo-500 hover:rounded-full hover:text-white;
}
</style>
