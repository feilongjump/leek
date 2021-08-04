<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border-separate table-border-spacing overflow-hidden">
      <thead>
        <tr>
          <th
            v-for="(item, index) in theadList"
            :key="index"
            scope="col"
            class="
              px-6
              py-3
              text-left text-xs
              font-semibold
              text-gray-400
              uppercase
              tracking-wider
              align-bottom
            "
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-300">
        <tr
          v-for="stock in stocks"
          :key="stock.code"
          class="
            bg-module
            cursor-pointer
            rounded-xl
            transition
            duration-500
            ease-in-out
            transform
            hover:-translate-y-1 hover:scale-105
          "
        >
          <td class="px-6 py-4 rounded-l-xl">
            <div class="flex items-center">
              <div class="w-36 h-16">
                <ListLineChartVue :color="stock.color" :data="stock.data" />
              </div>
              <div class="flex flex-col ml-2">
                <span>{{ stock.name }}</span>
                <span class="text-sm text-gray-400">{{ stock.code }}</span>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            {{ stock.price }}
          </td>
          <td class="px-6 py-4">
            {{ stock.float }}
          </td>
          <td class="px-6 py-4">
            {{ stock.scope }}
          </td>
          <td class="px-6 py-4">
            {{ stock.after_joining }}
          </td>
          <td class="px-6 py-4 rounded-r-xl">
            <span>More</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import ListLineChartVue from './ListLineChart.vue'

const theadList = ['name', 'price', 'float', 'scope', 'after joining', 'view']

const stocks = [
  {
    name: 'Nice',
    code: 888888,
    price: 18.88,
    float: 8.88,
    scope: 8,
    after_joining: 8,
    color: '#F87171',
    data: [8200, 9320, 9010, 9340, 12900, 13300, 13200]
  },
  {
    name: 'Garbage',
    code: 9438,
    price: 18.88,
    float: 8.88,
    scope: 8,
    after_joining: 8,
    color: '#10B981',
    data: [13200, 8425, 6214, 3122, 1500, 0]
  }
]
</script>
