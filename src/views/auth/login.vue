<template>
  <!-- container -->
  <div class="h-screen text-white">
    <!-- Header -->
    <div class="w-full lg:w-8/12 h-16 px-4 mx-auto mb-10 flex justify-between items-center">
      <span>Leek</span>
      <span>Hello</span>
    </div>
    <!-- Main -->
    <div class="w-full pt-16 sm:pt-0">
      <div class="max-w-2xl mx-auto">
        <div class="mx-4 px-4 py-6 bg-gray-800 rounded-lg">
          <nav class="text-center mb-4">Welcome to Leek.</nav>
          <div class="flex flex-col mb-4">
            <label class="flex flex-col text-purple-500">Enter your email or username</label>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <input class="w-full bg-transparent outline-none" type="text" v-model="test" />
            </div>
          </div>
          <div class="flex flex-col mb-4">
            <label class="flex flex-col text-purple-500">Password</label>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input class="w-full bg-transparent outline-none" type="password" />
            </div>
          </div>
          <div>
            <button
              class="w-full border border-gray-400 rounded-lg px-4 py-1 text-gray-400"
              @click="login"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="w-full fixed bottom-10">
      <div class="w-full flex justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          height="32"
          width="32"
          class="fill-current text-white"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Alert from '@/components/Alerts'
import { ref } from 'vue'

const test = ref<any>('info')

const login = () => {
  Alert.success('Welcome back!')
}
</script>
