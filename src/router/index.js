import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Collection from '@/components/Collection'
import Contact from '@/components/Contact'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/list',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
