<template>
  <div class="mt-16 text-center">
    <img class="mx-auto" alt="Vue logo" src="@/assets/logo.png" />
    <p>
      <router-link to="/" class="pr-2 text-blue-500"> Home </router-link>
      <router-link to="/hello-world" class="text-blue-500"> Hello World </router-link>
      <router-link to="/login" class="text-blue-500"> Login </router-link>
    </p>
    <router-view />
  </div>
</template>
