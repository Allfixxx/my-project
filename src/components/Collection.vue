<template>

  <main class="wrapper">

    <div>
      <img class="main__logo" src="static/product-images/logo.png" alt="#" />
    </div>
    <div class="menu">
      <div class="menu__login">
        <i class="far fa-user"></i> LOGIN
      </div>
      <div class="menu__bag">
        <i class="fas fa-lock"></i> 3 ITEMS
      </div>
      <div class="menu__burger">
        <i class="fas fa-search"></i> <i class="fas fa-bars"></i>
      </div>
    </div>
    <div class="topBanner">
    <a href="https://google.com/"><img src="static/product-images/slider4.jpg" alt="#" /></a>
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
        <li class="sorting1"> NEW COLLECTION 216 <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting2"> SORT BY <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting3"> FEATURES <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting4"> SIZE <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting5"> COLOUR <i class="fas fa-sort-down"> </i> </li>
        <li class="sorting6"> PRICE <i class="fas fa-sort-down"> </i> </li>
      </ul>
    </div>

    <section class="items--collection">
      <ul>
        <li v-for="product in products" v-bind:key="product.id">
          <router-link :to="'/product/' + product.id">
            <img :src="'/static/product-images/' + product.image_url" :alt="product.title">
            <h2 class="items__title--collection"> {{ product.title}} </h2>
            <p class="items__desciption--collection"> {{ product.description }} </p>
            <div class="items__bag--collection">
              <p class="items__price--collection"> {{ '$' + product.price }} </p>
              <p class="items__add--collection"> <i class="fas fa-shopping-bag"></i> ADD TO BAG </p>
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

    <section class="commentSlider">
      <p> BUTTON </p>
      <p> BUTTON </p>
    </section>

    <section class="medias">
      <h2>GET US ON</h2>
      <ul>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        <li><a href="#"><i class="fab fa-tumblr"></i></a></li>
      </ul>

    </section>

    <footer>
      <div class="footer__faq1">
        <h2>Questions?</h2>
        <a href="https://google.com/"><p>Help</p></a>
        <a href="https://google.com/"><p>Track Order</p></a>
        <a href="https://google.com/"><p>Returns</p></a>
      </div>
      <div class="footer__faq2">
        <h2>Where to buy</h2>
        <a href="https://google.com/"><p>Store Locator</p></a>
        <a href="https://google.com/"><p>Whishlist</p></a>
        <a href="https://google.com/"><p>Gift Cards</p></a>
      </div>
      <div class="footer__faq3">
        <h2>About us</h2>
        <a href="https://google.com/"><p>Our Story</p></a>
        <a href="https://google.com/"><p>Careers</p></a>
        <a href="https://google.com/"><p>Affiliates</p></a>
      </div>
      <div class="footer__cards">
        <img src="static/product-images/cards.png" alt="#">
      </div>
      <div class="footer__logo">
        <img src="static/product-images/logo.png" alt="#">
      </div>
    </footer>

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
