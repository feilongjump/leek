<template>
  <div class="h-screen sm:flex sm:justify-center sm:items-center bg-gray-50">
    <div
      class="w-full h-full bg-white sm:h-auto sm:w-11/12 xl:w-2/3 pt-4 sm:pt-12 pb-12 flex flex-col sm:flex-row sm:rounded-md sm:shadow-lg"
    >
      <!-- auth image -->
      <img class="w-full sm:w-1/2 sm:mx-2 lg:mx-4" :src="authImage" />
      <!-- auth container -->
      <div
        class="w-full sm:w-1/2 sm:border-l-2 px-6 lg:px-8 flex flex-col items-center justify-between"
      >
        <div class="w-full flex flex-col items-center">
          <!-- logo -->
          <img class="h-16 w-16" :src="logo" />
          <!-- form -->
          <div class="w-full lg:w-72 mt-12 lg:mt-16 flex justify-center">
            <div class="w-full flex flex-col items-start">
              <span class="text-slate-300 text-sm">Username</span>
              <input
                v-model="params.username"
                class="w-full border-b-2 outline-none transition ease-in-out duration-300 focus:border-indigo-500"
                type="text"
              />
            </div>
          </div>
          <div class="w-full lg:w-72 mt-6 flex justify-center">
            <div class="w-full flex flex-col items-start">
              <span class="text-slate-300 text-sm">Password</span>
              <input
                v-model="params.password"
                class="w-full border-b-2 outline-none transition ease-in-out duration-300 focus:border-indigo-500"
                type="password"
                @keyup.enter="login"
              />
              <router-link
                class="w-full flex justify-end mt-2 text-sm text-indigo-400 hover:text-indigo-500"
                to="#"
              >
                Forgot Password ?
              </router-link>
            </div>
          </div>
          <!-- actions -->
          <button
            class="mt-12 bg-indigo-500 px-12 py-2 rounded-full shadow-lg shadow-indigo-300 text-white tracking-wider"
            @click="login"
          >
            LOGIN
          </button>
        </div>
        <span class="mt-12 text-sm text-gray-400">
          Doesn't have account ?
          <router-link class="text-indigo-300 hover:text-indigo-400 font-semibold" to="#">
            Register
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import logo from '@/assets/logo.png'
import authImage from '@/assets/auth.png'
import Auth from '@/api/auth/index'
import { reactive } from 'vue'
import { LoginParams } from '@/api/auth/types'
import { ElMessage } from 'element-plus'

const params = reactive<LoginParams>({
  username: '',
  password: ''
})

const login = () => {
  const AuthRequest = new Auth()
  AuthRequest.login(params)
    .then((response) => {
      localStorage.setItem('token_type', response.token_type)
      localStorage.setItem('token', response.access_token)
    })
    .then(() => {
      ElMessage.success('登录成功！')

      router.push({ name: 'Backstage' })
    })
}
</script>
