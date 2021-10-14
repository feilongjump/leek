<template>
  <Header />
  <div class="flex justify-center">
    <div id="content" class="prose w-full" v-html="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import markdown from '@/utils/markdown.js'
import Header from './components/Header.vue'
import Articles from '@/api/articles'

const { id } = useRoute().params

const content = ref(null)

onMounted(() => {
  new Articles().show(id).then((response) => {
    const contentResult = markdown.marked(response.content.markdown)
    contentResult.then((contentResponse: any) => {
      content.value = contentResponse.content
    })
  })
})
</script>
