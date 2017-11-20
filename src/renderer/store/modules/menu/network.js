import lazyLoading from './lazyLoading'

export default {
  name: 'Network',
  path: '/network',
  component: lazyLoading('network/Network'),
  meta: {
    default: true,
    title: 'Network',
    iconClass: 'i-menu-network'
  }
}
