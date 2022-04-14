<template>
  <div class="container">
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        errors: [],
        newProduct: {},
      }
    },
    methods: {
      createProduct() {
        axios.post("products.json", this.newProduct)
        .then((res)=> {
          this.$router.push(`/product/${res.data.id}`)
        })
        .cathch((error)=> {
          this.errors = error.response.data.errors
        })
      },
    },
  }
</script>

<style>
  
</style>