<script setup lang="ts">
import {
  DownloadIcon,
  TrashIcon,
  DocumentAddIcon,
  SearchIcon,
  FilterIcon
} from '@heroicons/vue/outline'
</script>

<template>
  <div class="w-full mb-6 flex justify-between items-center">
    <span class="text-2xl font-bold">Article</span>
    <button
      class="flex justify-center items-center bg-indigo-400 text-sm text-white rounded-lg px-4 py-2 hover:bg-indigo-500"
    >
      <DocumentAddIcon class="w-5 h-5 mr-1" />Add
    </button>
  </div>

  <div class="w-full bg-white rounded-xl shadow-xl py-2">
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
          class="flex justify-center items-center text-xs text-red-500 border border-gray-200 rounded-lg px-3 py-2 mr-4 hover:shadow-xl transition-all duration-500 ease-in-out"
        >
          <TrashIcon class="w-4 h-4 mr-1" />Delete
        </button>
        <button
          class="flex justify-center items-center text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-2 mr-4 hover:shadow-xl hover:text-indigo-400 transition-all duration-500 ease-in-out"
        >
          <DownloadIcon class="w-4 h-4 mr-1" />Export
        </button>
        <button
          class="flex justify-center items-center text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-2 mr-4 hover:shadow-xl hover:text-indigo-400 transition-all duration-500 ease-in-out"
        >
          <FilterIcon class="w-4 h-4 mr-1" />Filter
        </button>
      </div>
    </div>
    <div class="w-full border-t">
      <table class="w-full px-4 text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">Sliver</td>
            <td class="px-6 py-4">Laptop</td>
            <td class="px-6 py-4">$2999</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
            </td>
          </tr>
          <tr class="bg-white">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
            <td class="px-6 py-4 text-right">
              <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="px-4 border-t">pages</div>
  </div>
</template>
