<template>
  <div class="h-screen pb-16 bg-gray-50 flex">
    <!-- left -->
    <div class="w-8/12">
      <div class="w-full h-full flex justify-center items-center">
        <div class="relative pr-64 pb-64">
          <span class="text-3xl font-bold">Welcome to Leek</span>
          <div class="mt-16">
            <p>If you don't have an account</p>
            <p>
              You can
              <span class="ml-2 font-semibold text-blue-500 cursor-pointer">Register here!</span>
            </p>
          </div>
          <img class="auth-img" :src="auth" />
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="h-full w-4/12 flex items-center flex-col">
      <!-- header -->
      <div class="h-24 font-semibold flex justify-center items-center">
        <div class="relative mr-4">
          <span class="px-6 py-2 text-blue-600 active">Sign In</span>
        </div>
        <div class="relative">
          <span class="px-6 py-2 bg-white rounded-full shadow-2xl text-blue-800 cursor-pointer">
            Register
          </span>
        </div>
      </div>
      <div class="h-full flex justify-center items-center flex-col">
        <!-- form -->
        <div class="flex justify-center items-center flex-col">
          <input
            class="w-64 px-6 py-3 rounded-xl bg-blue-100 placeholder-gray-600 outline-none"
            type="text"
            placeholder="Enter email or username"
          />
          <div class="w-64 my-8 flex flex-col">
            <input
              class="px-6 py-3 rounded-xl bg-blue-100 placeholder-gray-600 outline-none"
              type="password"
              placeholder="Password"
            />
            <span class="mt-1 text-gray-300 cursor-pointer text-right text-sm">
              Recovery password
            </span>
          </div>
          <button class="w-64 py-3 bg-blue-600 rounded-xl shadow-2xl text-white">Sign In</button>
        </div>
        <!-- cut apart -->
        <div class="cut-apart-span mt-12 text-center relative align-middle">
          <span class="text-gray-500 text-sm"> or continue with </span>
        </div>
        <!-- OAuth -->
        <div class="mt-6">
          <div
            class="
              mx-2
              px-6
              py-2
              border
              broder-gray-200
              rounded-2xl
              transition-all
              duration-500
              ease-in-out
              hover:bg-white hover:shadow-2xl hover:border-0 hover:border-transparent
              cursor-pointer
            "
          >
            <svg
              height="32"
              class="octicon octicon-mark-github color-text-white"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import auth from '@/assets/auth.png'
</script>

<style scoped>
.auth-img {
  @apply max-w-none w-96 absolute -right-96 top-32;
}

.cut-apart-span span:before,
.cut-apart-span span:after {
  content: '';
  @apply absolute w-1/2 h-px bg-gray-500;
  top: 52%;
}
.cut-apart-span span:before {
  left: -60%;
}
.cut-apart-span span:after {
  right: -60%;
}

.active:after {
  content: '';
  @apply absolute h-1 w-5 rounded-2xl bg-blue-600 -bottom-2.5;
  left: 47%;
}
</style>
