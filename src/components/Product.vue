<template>

  <main class="wrapper">

    <div class="topBanner">
      <img src="static/product-images/slider5.jpg" alt="#" />
    </div>
    <div class="firstBlock">
      <div class="productPicture">
        <section class="productAngles">
          <ul>
            <li v-for="product in products.slice(4)" v-bind:key="product.id">
              <router-link :to="'/product/' + product.id">
                <img :src="'/static/products/' + product.image_url" :alt="product.title">
              </router-link>
            </li>
          </ul>
        </section>

        <section class="singleProduct">
          <div v-for="product in products.slice(8)" v-bind:key="product.id">
            <router-link :to="'/product/' + product.id">
              <img :src="'/static/products/' + product.image_url" :alt="product.title">
            </router-link>
          </div>
        </section>
      </div>


      <div class="infoBlock">

        <div class="prodTitle">
          <h2 v-for="product in products.slice(8)" v-bind:key="product.id">
            <router-link :to="'/product/' + product.id">
              {{ product.title}}
            </router-link>
          </h2>
        </div>

        <div class="priceBlock">
          <div class="prodPrice">
            <p v-for="product in products.slice(8)" v-bind:key="product.id">
              <router-link :to="'/product/' + product.id">
                {{ '$' + product.price }}
              </router-link>
            </p>
          </div>

          <p class="prodShipping"><a href="#"><i class="fas fa-globe"></i>Free Shipping Wordwide</a></p>
        </div>

        <div class="selections">
          <select class="selection1" name="subject" id="subject" v-model="subject">
            <option>Black</option>
            <option>White</option>
            <option>Pink</option>
          </select>

          <select class="selection2" name="subject" id="subject" v-model="subject">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <div class="selection3">
            <a href="#"><i class="fab fa-osi"></i>Size Guide</a>
          </div>
        </div>

        <div class="infoButtons">
          <div class="addBag"><i class="fas fa-shopping-bag"></i> ADD TO BAG</div>
          <div class="later">SAVE FOR LATER</div>
          <div class="share"><a href="#"><i class="fas fa-share-alt"></i>Share this product</a></div>
        </div>

      </div>



      <vue-tabs class="details">
        <v-tab title="Description" class="details__description">
          Description Text Description Text Description Text Description Text Description Text Description Text Description Text
        </v-tab>

        <v-tab title="Brands" class="details__brands">
          Brand Text
        </v-tab>

        <v-tab title="Info" class="details__info">
          Info Text
        </v-tab>
      </vue-tabs>

    </div>

    <div class="middleBlock">
      <h2> Sharpen Your Look </h2>
      <div class="middleLineProduct"></div>
      <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
    </div>
    
    <section class="designSection">

        <div class="designSection1">
          <img src="static/product-images/look1.jpg" alt="#" />
        </div>

        <div class="designSection2">
          <h2> Extrodenary Design </h2>
          <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>

          <div class="circlesWithText">
            <div class="circles">
              <div class="singleCircle"><i class="fas fa-cut"></i></div>
              <div class="singleCircle"><i class="fas fa-heart"></i></div>
              <div class="singleCircle"><i class="fas fa-gem"></i></div>
            </div>
            <div class="circleText">
              <div>Elegant Style</div>
              <div>Elegant Style</div>
              <div>Elegant Style</div>
            </div>
          </div>

          <div class="moreButton">
            <a href="https://google.com/"> READ MORE </a>
          </div>

        </div>

        <div class="designSection3">
          <h2> Extrodenary Design </h2>
          <p> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
          <div class="circlesWithText">
            <div class="circles">
              <div class="singleCircle"><i class="fas fa-cut"></i></div>
              <div class="singleCircle"><i class="fas fa-heart"></i></div>
              <div class="singleCircle"><i class="fas fa-gem"></i></div>
            </div>
            <div class="circleText">
              <div>Elegant Style</div>
              <div>Elegant Style</div>
              <div>Elegant Style</div>
            </div>
          </div>
          <div class="moreButton">
            Button 2 goes here
          </div>
        </div>

        <div class="designSection4">
          <img src="static/product-images/look2.jpg" alt="#" />
        </div>

    </section>

    <div class="bottomBanner">
      <img src="static/product-images/slider7-text.jpg" alt="#" />
    </div>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
