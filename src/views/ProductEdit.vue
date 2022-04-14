<template>
  <div class="container">
    <div>
      <p>
        <button>delete</button>
        <button @click="this.$router.push('/products')">Go back to index</button>
      </p>
    </div>
    <hr>
    <div>
      <form v-on:submit.prevent="submit()">
        <p>
          name: 
          <input v-model="updatingProduct.name" type="text">
          <small v-if="updatingProduct.name.length <= 20">{{ updatingProduct.name.length }}</small>
          <small v-if="updatingProduct.name.length > 20" class="validation-red">characters should eb below 20</small>
        </p>
        <p>
          price: 
          <input v-model="updatingProduct.price" type="">
        </p>
        <p>description: 
          <input v-model="updatingProduct.description" type="text">
        </p>
        <p>
          quantity: 
          <input v-model="updatingProduct.quantity" type="number">
        </p>
        <p v-for="image in updatingProduct.images" :key="image">
          <img class="product-image" :src="image.url" alt="">
          <br>
          <input v-model="image.url" type="text">
        </p>
        <p v-for="image in addingImages" :key="image">
          Add Image
          <input v-model="image.url" type="text">
        </p>
          <button @click="addImage()">add another image</button>
        <p>
          supplier_id: 
          <input v-model="updatingProduct.supplier.id" type="text">
        </p>
        <label for="supplier">Choose a supplier:</label>
        <select name="supplier" id="supplier" v-model="updatingProduct.supplier.id">
            <option
              :value="supplier.id"
              v-for="supplier in suppliers"
              :key="supplier.id"
            >
              {{ supplier.name }}
            </option>
        </select>
        <p>
          <input type="submit" value="submit">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    data() {
      return {
        errors: [],
        updatingProduct: {},
        suppliers: [],
        addingImages: [{
          url: "",
          product_id: 0
        }],
      }
    },
    created() {
      axios.get(`products/${this.$route.params.id}.json`)
      .then((res) => {
        this.updatingProduct = res.data;
      });
      axios.get(`suppliers.json`)
      .then((res) => {
        this.suppliers = res.data;
      });
    },
    methods: {
      submit() {
        axios
          .patch(`products/${this.$route.params.id}.json`, this.updatingProduct)
          .then((res)=> {
            this.$router.push(`/products/${res.data.id}`)
          })
          .catch((error)=> {
            this.errors = error.response.data.errors
          })
      },
      addImage() {
        this.addingImages.push({});
      },
    },
  }
</script>

<style>
  .validation-red {
    color: red;
  }

  .product-image {
    max-width: 200px;
  }
</style>