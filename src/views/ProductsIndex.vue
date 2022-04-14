<template>
  <div class="container">
    <div>
      <button @click="this.$router.push('/products/new')">add product</button>
      <p>Serch <input v-model="filter" type="text"></p>

    </div>
    <div v-for="product in filterProducts()" :key="product.id">
      <hr>
      <hr>
      <button @click="this.$router.push(`/products/${product.id}`)">more info</button>
      <p>{{ product.name }}<small> (ID: {{ product.id }})</small></p>
      <div v-for="image in product.images" :key="image">
        <img v-if="image.url" class="product-img" :src="image.url">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data() {
      return {
        errors: [],
        filter: "",
        products: [],
      }
    },
    created() {
      this.indexProducts();
    },
    methods: {
      indexProducts() {
        axios
          .get("products.json")
          .then((res)=> {
            this.products = res.data;
          })
          .catch((error)=> {
            this.errors = error.response.data.errors
          })
      },
      filterProducts() {
        return this.products.filter(product => {
          var lowerTitle = product.name.toLowerCase();
          var lowerSerchTerm = this.filter.toLowerCase();
          return lowerTitle.includes(lowerSerchTerm)
        })
      },
    },
  }
</script>

<style>
  .product-img {
    max-width: 300px;
  }
</style>