<template>
  <div ref="editorDom"></div>
</template>

<script lang="ts" setup>
import { defineEmits, ref, onMounted, defineProps, watch } from 'vue'
import { Editor } from 'bytemd'
import highlight from '@bytemd/plugin-highlight'
import zhHans from 'bytemd/locales/zh_Hans.json'
import breaks from '@bytemd/plugin-breaks'
import footnotes from '@bytemd/plugin-footnotes'
import frontmatter from '@bytemd/plugin-frontmatter'
import gfm from '@bytemd/plugin-gfm'
import mediumZoom from '@bytemd/plugin-medium-zoom'
import gemoji from '@bytemd/plugin-gemoji'
import mermaid from '@bytemd/plugin-mermaid'
import 'bytemd/dist/index.css'
import 'juejin-markdown-themes/dist/juejin.min.css'

const editorDom = ref()
const editor = ref<Editor>(null)

const emit = defineEmits(['update:value'])

interface Props {
  value?: string
  placeholder?: string
  locale?: any
  previewDebounce?: number
  plugins?: any
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
  placeholder: '',
  locale: zhHans,
  previewDebounce: 100,
  plugins: [
    breaks(),
    highlight(),
    footnotes(),
    frontmatter(),
    gfm(),
    mediumZoom(),
    gemoji(),
    mermaid()
  ]
})

const editorInit = () => {
  editor.value = new Editor({
    target: editorDom.value,
    props
  })

  editor.value.$on('change', (e: any) => {
    emit('update:value', e.detail.value)
  })
}

onMounted(() => {
  editorInit()
})

watch(props, (newValue) => {
  editor.value.$set(newValue)
})
</script>

<style>
.bytemd {
  height: calc(theme('height.screen') - theme('height.14'));
}
</style>
