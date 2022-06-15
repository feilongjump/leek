<template>
  <div class="ranking w-full overflow-x-auto pt-12">
    <table class="w-full text-sm text-left text-gray-500">
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
</template>

<style>
.ranking {
  height: calc(theme('height.full') - theme('height.96') - theme('height.20'));
}
</style>
