<template>

  <main class="wrapper">

    <!-- Slider start -->
    <ul class="slides">
      <input type="radio" name="radio-btn" id="img-1" checked />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-6" class="prev">&#x2039;</label>
          <label for="img-2" class="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-2" />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-1" class="prev">&#x2039;</label>
          <label for="img-3" class="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-3" />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-2" class="prev">&#x2039;</label>
          <label for="img-4" class="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-4" />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-3" class="prev">&#x2039;</label>
          <label for="img-5" class="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-5" />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-4" class="prev">&#x2039;</label>
          <label for="img-6" class="next">&#x203a;</label>
        </div>
      </li>

      <input type="radio" name="radio-btn" id="img-6" />
      <li class="slide-container">
        <div class="slide">
          <a href="https://google.com/"><img src="static/product-images/slider1.jpg" alt="#" /></a>
        </div>
        <div class="nav">
          <label for="img-5" class="prev">&#x2039;</label>
          <label for="img-1" class="next">&#x203a;</label>
        </div>
      </li>

      <li class="nav-dots">
        <label for="img-1" class="nav-dot" id="img-dot-1"></label>
        <label for="img-2" class="nav-dot" id="img-dot-2"></label>
        <label for="img-3" class="nav-dot" id="img-dot-3"></label>
        <label for="img-4" class="nav-dot" id="img-dot-4"></label>
        <label for="img-5" class="nav-dot" id="img-dot-5"></label>
        <label for="img-6" class="nav-dot" id="img-dot-6"></label>
      </li>
    </ul>
    <!-- Slider end -->

    <section class="category">

      <div class="category__men">
        <a href="https://google.com/"><img src="static/product-images/him2.jpg" alt="#" /></a>
      </div>
      <div class="category__newsletter">
        <img src="static/product-images/subscribe.jpg" alt="#" />
        <div class="button__subscribe"> <a href="https://google.com/"> <p> SUBSCRIBE </p> </a> </div>
      </div>
      <div class="category__women">
        <a href="https://google.com/"><img src="static/product-images/her2.jpg" alt="#" /></a>
      </div>

    </section>

    <section class="brands__slider">
      <h2> ---------- TOP BRANDS ---------- </h2>
        <img src="static/product-images/logos.png" alt="#" />
    </section>

    <section class="deals">

      <div class="deals__big">
        <a href="https://google.com/"><img src="static/product-images/big-deal.jpg" alt="#" /></a>
      </div>
      <div class="deals__flexer">
        <div class="deals__rightTop">
          <a href="https://google.com/"><img src="static/product-images/mid-sale1.jpg" alt="#" /></a>
        </div>
        <div class="deals__rightBot">
          <a href="https://google.com/"><img src="static/product-images/mid-sale2.jpg" alt="#" /></a>
        </div>
      </div>

    </section>

    <section class="suggestions">

      <div class="suggestions--first">
        <a href="https://google.com/"> NEW ARRIVALS </a>
        <hr />
      </div>
      <div class="suggestions--mid">
        <a href="https://google.com/"> TOP SELLERS </a>
      </div>
      <div class="suggestions--last">
        <a href="https://google.com/"> FEATURED </a>

      </div>

    </section>

    <section class="items">
      <ul>
        <li v-for="product in products.slice(5)" v-bind:key="product.id">
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

    </section>

    <section class="seasonDeal">
      <a href="https://google.com/"><img src="static/product-images/25-summer.jpg" alt="#" /></a>
    </section>

    <section class="commentSlider">
      <img src="static/product-images/jane.png" alt="#">
      <h2>Jane Smith</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
      the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
