<template>
  <div class="container">
    <div>
      <p>
        <button @click="this.$router.push(`/products/${product.id}/edit`)">edit</button>
        <button @click="destroyProduct()">delete</button>
        <button @click="this.$router.push('/products')">Go back to index</button>
      </p>
      <div>
        <hr>
        <hr>
        <p>{{ product.name }}<small> (ID: {{ product.id }}, UID: {{ product.user_id }})</small></p>
        <p>$ {{ product.price }}</p>
        <p>{{ product.description }}</p>
        <!-- <p>{{ product.supplier.name }}</p> -->
        <div v-for="image in product.images" :key="image">
          <img v-if="image.url" class="product-img" :src="image.url">
        </div>
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
        product: {},
        isLoggedin: false,
        getUserId: 0,
      }
    },
    created() {
      axios
        .get(`products/${this.$route.params.id}.json`)
        .then((res)=> {
          this.product = res.data
        })
        .catch((error)=> {
          this.errors = error.response.data.errors
        })
    },
    watch: {
      $route() {
        this.isLoggedin = !!localStorage.jwt;
        this.getUserId = localStorage.user_id;
      }
    },
    methods: {
      destroyProduct() {
        axios.delete(`products/${this.product.id}`)
        .then(()=> {
          this.$router.push("/products")
        })
      }
    },
  }
</script>

<style>
  
</style>