<template>
  <div class="photos-new">
    <h1>New Product</h1>
    <form v-on:submit.prevent="createProduct()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>
        Name:
        <input type="text" v-model="product.name" />
      </p>
      <p>
        Price:
        <input type="number" v-model="product.price" />
      </p>
      <p>
        Qantity:
        <input type="number" v-model="product.quantity" />
      </p>
      <p>
        Supplier ID:
        <input type="number" v-model="product.supplier_id" />
      </p>
      <p>
        Description:
        <input type="text" v-model="product.description" />
      </p>
      <p>
        Image:
        <input type="text" v-model="product.images" />
      </p>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data() {
      return {
        errors: [],
        product: {},
      }
    },
    created() {
    },
    methods: {
      createProduct() {
        axios
          .post("products.json", this.product)
          .then(()=> {
            this.$router.push("/products")
          })
          .catch((error)=> {
            this.errors = error.response.data.errors
          })
      },
    },
  }
</script>

<style>
  
</style>