import lazyLoading from './lazyLoading'

export default {
  name: 'Events',
  path: '/events',
  component: lazyLoading('events/Events'),
  meta: {
    default: true,
    title: 'Events',
    iconClass: 'i-menu-events'
  }
}
