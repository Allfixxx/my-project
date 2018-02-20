import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Collection from '@/components/Collection'
import Contact from '@/components/Contact'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
