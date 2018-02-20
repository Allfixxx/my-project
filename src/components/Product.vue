<template>

  <main class="wrapper">

    <div class="topBanner">
      <img src="static/product-images/slider5.jpg" alt="#" />
    </div>

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

    <div class="chosenPic">

    </div>

    <div class="infoBlock">

      <h2 v-for="product in products.slice(8)" v-bind:key="product.id">
        <router-link :to="'/product/' + product.id">
          {{ product.title}}
        </router-link>
      </h2>

      <p v-for="product in products.slice(8)" v-bind:key="product.id">
        <router-link :to="'/product/' + product.id">
          {{ '$' + product.price }}
        </router-link></p>

      <p> (fa icon) and text</p>

      <div class="selections">
        <div class="selection1">
          <select name="subject" id="subject" v-model="subject">
            <option>Black</option>
            <option>White</option>
            <option>Pink</option>
          </select>
        </div>

        <div class="selection2">
          <select name="subject" id="subject" v-model="subject">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div class="selection3">
          <p>(fa icon) Size Guide</p>
        </div>
      </div>

      <div class="infoBlock2">
        <div class="addBag">Bag</div>
        <div class="later">Later</div>
        <div class="share">Share</div>
      </div>

      <div class="infoblock3">
        <div class="productDescription"></div>
        <div class="productBrand"></div>
        <div class="productInfo"></div>
      </div>

    </div>

    <div class="middleBlock">
      <h2> Sharpen Your Look </h2>
      <div class="midtLineProduct"> --- Line --- </div>
      <p> Text </p>
    </div>
    
    <section class="designSection">
      <ul>
        <li class="designSection1">
          <img src="static/product-images/look1.jpg" alt="#" />
        </li>

        <li class="designSection2">
          <h2> Extrodenaru Design </h2>
          <p> Lorem ipsum </p>

          <div class="circles">
            <ul>
              <li>circle 1</li>
              <li>circle 2</li>
              <li>circle 3</li>
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
            </ul>
          </div>

          <div class="moreButton1">
            Button 1 goes here
          </div>

        </li>

        <li class="designSection3">
          <h2> Extrodenaru Design </h2>
          <p> Lorem ipsum </p>
          <div class="circles">
            <ul>
              <li>circle 1</li>
              <li>circle 2</li>
              <li>circle 3</li>
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
            </ul>
          </div>
          <div class="moreButton1">
            Button 2 goes here
          </div>
        </li>

        <li class="designSection4">
          <img src="static/product-images/look2.jpg" alt="#" />
        </li>
      </ul>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
