import { ChartPieIcon, PencilIcon, ClipboardListIcon, BookOpenIcon } from '@heroicons/vue/outline'

const menus = [
  {
    name: 'Dashboard',
    icon: ChartPieIcon,
    pathName: 'Backstage.Dashboard',
    bgColor: 'bg-indigo-100',
    strokeColor: 'stroke-indigo-400'
  },
  {
    name: 'Article',
    icon: PencilIcon,
    pathName: 'Backstage.Article',
    bgColor: 'bg-indigo-100',
    strokeColor: 'stroke-indigo-400'
  },
  {
    name: 'Novel',
    icon: BookOpenIcon,
    pathName: 'Backstage.Novel',
    bgColor: 'bg-indigo-100',
    strokeColor: 'stroke-indigo-400'
  },
  {
    name: 'Project',
    icon: ClipboardListIcon,
    pathName: 'Backstage.Project',
    bgColor: 'bg-indigo-100',
    strokeColor: 'stroke-indigo-400'
  }
]
export default menus
