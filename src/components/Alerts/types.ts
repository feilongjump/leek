import type { VNode } from 'vue'

export type AlertOptions = {
  id?: string
  message?: string
  offset?: number
  onClose?: () => void
  type?: 'success' | 'warning' | 'info' | 'error' | ''
}

export type AlertParams = AlertOptions | string

export interface IAlert {
  (options?: AlertParams): void
  success: (options?: AlertParams) => void
  warning: (options?: AlertParams) => void
  info: (options?: AlertParams) => void
  error: (options?: AlertParams) => void
}

type AlertQueueItem = {
  vm: VNode
}

export type AlertQueue = Array<AlertQueueItem>

export type TypeClass = {
  success: Array<string>
  warning: Array<string>
  info: Array<string>
  error: Array<string>
}
