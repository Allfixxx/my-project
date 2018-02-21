<template>


  <div id="app">

    <router-view />

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
      <div class="menu__search">
        <i class="fas fa-search"></i>
      </div>
      <input class="burger-check" id="burger-check" type="checkbox"><label for="burger-check" class="burger"></label>
      <nav id="navigation1" class="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Stuffs</a></li>
          <li><a href="#">Other stuffs</a></li>
          <li><a href="#">Cats</a></li>
        </ul>
      </nav>
    </div>


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

  </div>

</template>

<script>

</script>

<style lang="scss">
  @import 'scss/styles.scss';
  @import '../node_modules/bulma/css/bulma.css';
</style>
