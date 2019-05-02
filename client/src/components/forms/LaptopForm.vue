<template>

<div>

    <div class="form-group">
        <div class="form-group">

          <label for="laptopBrand">Brand</label>
          <input id="laptopBrand" class="form-control" required v-model.trim="brand">

          <label for="laptopModel">Model</label>
          <input id="laptopModel" class="form-control" required v-model.trim="model">

          <label for="laptopSerialNumber">Serial Number</label>
          <input id="laptopSerialNumber" class="form-control" required v-model.trim="serialNumber">

          <button class="btn btn-primary mt-3 mr-4" v-on:click="laptopFormSubmit">
            <slot></slot>
          </button>
          <button class="btn btn-outline-secondary mt-3" v-on:click="cancel">Cancel</button>

        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'CreateLaptop',
    props: {
        laptop: Object
    },
    data() {
        return {
            id: '',
            brand: '',
            model: '',
            serialNumber: ''
        }
    },
    watch: {
        laptop() {
          this.id = this.laptop.id
          this.brand = this.laptop.brand
          this.model = this.laptop.model
          this.serialNumber = this.laptop.serialNumber
        }
    },
    methods:{
        laptopFormSubmit() {
          let laptopData = { id: this.id, brand: this.brand, model: this.model, serialNumber: this.serialNumber }

          if (this.brand && this.model && this.serialNumber) {
            this.$emit('laptopFormSubmit', laptopData)
          } else {
            alert('Enter a brand, model, and serial number')
          }
        },
        cancel() {
          this.$router.push('/laptops')
        }
    }
}

</script>

<style>
</style>
