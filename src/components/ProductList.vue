<template>
  <section>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <router-link :to="'/product/' + product.id">
          <hl> {{ product.title}} </hl>
          <p> {{ product.description }} </p>
          <p> {{ product.price }} </p>
          <img :src="'/static/product-images/' + product.image_url" :alt="product.title">
        </router-link>
      </li>
    </ul>
  </section>
  
</template>

<script>
import axios from 'axios';


export default {
  name: 'product-list',
  data: function() {
    return {
      products: []
    }
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts: function() {
      axios
          .get("/static/products.json")
          .then(response => {this.products = response.data})
          .catch(error => {
            console.log(error);
        })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
