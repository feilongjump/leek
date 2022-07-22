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
                <RadioGroup v-model="selected">
                  <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                  <div class="space-y-2">
                    <RadioGroupOption
                      v-for="article in articles"
                      :key="article.id"
                      v-slot="{ checked }"
                      as="template"
                      :value="article"
                    >
                      <div
                        :class="[checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white ']"
                        class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
                      >
                        <div class="flex w-full items-center justify-between">
                          <div class="flex items-center">
                            <div class="text-sm">
                              <RadioGroupLabel
                                as="p"
                                :class="checked ? 'text-white' : 'text-gray-900'"
                                class="font-medium"
                              >
                                {{ article.title }}
                              </RadioGroupLabel>
                              <RadioGroupDescription
                                as="span"
                                :class="checked ? 'text-sky-100' : 'text-gray-500'"
                                class="inline"
                              >
                                <span> {{ article.drafted_at }}</span>
                              </RadioGroupDescription>
                            </div>
                          </div>
                          <div v-show="checked" class="shrink-0 text-white">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                              <path
                                d="M7 13l3 3 7-7"
                                stroke="#fff"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </RadioGroupOption>
                  </div>
                </RadioGroup>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="apply"
                >
                  Apply
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption
} from '@headlessui/vue'
import { ArticleResponse } from '@/api/article/types'

const emit = defineEmits(['update:replace'])

const isOpen = ref(false)

const articles = ref<ArticleResponse[]>([])

const selected = ref(articles.value[0])

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

const apply = () => {
  close()

  emit('update:replace', selected.value)
}

const open = () => {
  isOpen.value = true

  getDrafts()
}

defineExpose({
  open
})
</script>
