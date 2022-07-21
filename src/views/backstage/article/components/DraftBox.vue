<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="close">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                草稿箱
              </DialogTitle>
              <div class="mt-2">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th>标题</th>
                      <th>更新时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(article, index) in articles" :key="index">
                      <td>{{ article.title }}</td>
                      <td>{{ article.drafted_at }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="close"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { ArticleResponse } from '@/api/article/types'

const isOpen = ref(false)

const articles = ref<ArticleResponse[]>([])

const getDrafts = () => {
  // 每次都重置储存数据
  articles.value = []

  const articleKeyStr = localStorage.getItem('article_keys') || '[]'
  const articleKeyArr: string[] = JSON.parse(articleKeyStr)

  articleKeyArr.forEach((item) => {
    const articleStr = localStorage.getItem(item) || '{}'
    const article: ArticleResponse = JSON.parse(articleStr)

    articles.value?.push(article)
  })
}

const close = () => {
  isOpen.value = false
}

const open = () => {
  isOpen.value = true

  getDrafts()
}

defineExpose({
  open
})
</script>
