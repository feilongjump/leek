<template>
  <div id="navbar-container">
    <div>
      <ul class="flex">
        <li
          v-for="(item, index) in 5"
          :key="index"
          class="w-8 h-8 rounded-full p-3 mr-3 bg-gray-200 first-line:text-indigo-400 first-line:font-bold text-white flex justify-center items-center"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="flex">
      <div>search</div>
      <div>user</div>
    </div>
  </div>
</template>

<style scoped>
#navbar-container {
  @apply h-12 md:h-20 px-2 md:px-4 ml-0 md:ml-24 lg:ml-64 fixed
    transition-all duration-500 ease-in-out
    flex justify-between items-center;
}
</style>
