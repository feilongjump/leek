import { createVNode, render } from 'vue'
import AlertConstructor from './index.vue'

import { IAlert, AlertParams, AlertQueue } from './types'

const instances: AlertQueue = []
let seed = 1

const close = (id: string): void => {
  const idx = instances.findIndex(({ vm }) => {
    if (vm.component) {
      const { id: _id } = vm.component.props
      return id === _id
    }
    return -1
  })
  if (idx === -1) return

  const { vm } = instances[idx]
  if (!vm) return
  if (!vm.el) return

  const removedHeight = vm.el.offsetHeight
  instances.splice(idx, 1)

  const len = instances.length
  if (len < 1) return
  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].vm.el?.style.top, 10) - removedHeight - 16

    const { component } = instances[i].vm
    if (component) component.props.offset = pos
    instances[i].vm.component = component
  }
}

const Alert: IAlert = (options: AlertParams = {} as AlertParams) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  const id = `alert_${seed++}`
  const container = document.createElement('div')

  let verticalOffset = options.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += vm.el ? vm.el.offsetHeight + 16 : 0
  })
  verticalOffset += 16

  options = {
    ...options,
    id,
    onClose: () => {
      close(id)
    },
    offset: verticalOffset
  }

  container.className = `container_${id}`

  const vm = createVNode(AlertConstructor, options)

  render(vm, container)

  instances.push({ vm })

  document.body.appendChild(container)
}

// TODO: 我也不明白为啥就不能直接循环定义，需要先占坑。
// https://github.com/element-plus/element-plus/blob/dev/packages/message/src/message.ts
Alert.success = () => {}
Alert.warning = () => {}
Alert.info = () => {}
Alert.error = () => {}
;(['success', 'warning', 'info', 'error'] as const).forEach((type) => {
  Alert[type] = (options: AlertParams = {} as AlertParams) => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type
      }
    } else {
      options.type = type
    }
    return Alert(options)
  }
})

export default Alert
