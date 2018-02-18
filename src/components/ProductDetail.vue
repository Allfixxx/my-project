<template>
  <div>
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'product-detail',
  data: function() {
    return {
      product: ''
    }
  },

  created: function() {
    let id = this.$route.params.id;
    this.getProductById(id);
  },

  methods: {
    getProductById: function(id) {
      axios
        .get("/static/products.json")
        .then(response => {this.product = response.data.filter(product => product.id == id)[0]})
        .catch(error => {
          console.log(error);
        })
    }
  }

}

</script>
