import lazyLoading from './lazyLoading'

export default {
  name: 'Images',
  path: '/images',
  component: lazyLoading('images/Images'),
  meta: {
    default: true,
    title: 'Images',
    iconClass: 'i-menu-images'
  }
}
