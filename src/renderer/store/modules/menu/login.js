/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './lazyLoading'

export default {
  name: 'Login',
  path: '/login',
  component: lazyLoading('login/Login'),
  meta: {
    default: false,
    title: 'Login',
    iconClass: 'i-menu-login'
  }
}
