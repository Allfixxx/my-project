<template>

  <main class="wrapper">

    <div class="topBanner">
    <img src="static/product-images/slider4.jpg" alt="#" />
    </div>
    <div class="bannerText">
      <div class="line1"></div>
      <p> most wanted </p>
      <div class="line2"></div>
    </div>
    <div class="bannerText__big"> NEW COLLECTION </div>
    <div class="bannerButton"> <a href="https://google.com/"> <p> BROWSE COLLECTION </p> </a> </div>

    <div class="sorting">
      <ul>
        <li class="sorting1"> NEW COLLECTION (1-32 of 58) </li>
        <li class="sorting2"> SORT BY <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting3"> FEATURES <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting4"> SIZE <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting5"> COLOUR <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting6"> PRICE <i class="fas fa-sort-down"> </i> </li>
      </ul>
    </div>

    <section class="items">
      <ul>
        <li v-for="product in products.slice(1)" v-bind:key="product.id">
          <router-link :to="'/product/' + product.id">
            <img :src="'/static/products/' + product.image_url" :alt="product.title">
            <h2 class="items__title"> {{ product.title}} </h2>
            <p class="items__desciption"> {{ product.description }} </p>
            <div class="items__bag">
              <p class="items__price"> {{ '$' + product.price }} </p>
              <p class="items__add"> <i class="fas fa-shopping-bag"></i> ADD TO BAG </p>
            </div>
          </router-link>
        </li>
      </ul>

      <div class="numbers">
        <ul>
          <li class="numbers1"> 1 </li>
          <li class="numbers2"> 2 </li>
          <li class="numbers3"> 3 </li>
          <li class="numbers4"> 4 </li>
          <li class="numbers5"> 5 </li>
        </ul>
      </div>

    </section>

    <section class="subscription_buttons">
      <div class="button1">
        <p> YOUR EMAIL </p>
      </div>
      <div class="button2">
        <p> SUBSCRIBE TO OUR NEWSLETTER </p>
      </div>
    </section>

    <section class="medias">
      <h2> ---------- GET US ON ---------- </h2>
      <ul>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        <li><a href="#"><i class="fab fa-tumblr"></i></a></li>
      </ul>

    </section>

    </main>

</template>

<script>
  import axios from 'axios';

  export default {
    name: 'product-list',
    data: function () {
      return {
        products: []
      }
    },
    created: function () {
      this.getProducts();
    },
    methods: {
      getProducts: function () {
        axios
          .get("/static/products.json")
          .then(response => { this.products = response.data })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>


<style lang="scss">
  @import '../scss/styles.scss';
</style>
