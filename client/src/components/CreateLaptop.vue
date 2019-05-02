<template>

<div>

    <h2>Create new laptop</h2>

    <LaptopForm v-on:laptopFormSubmit="laptopFormSubmit">
      Create
    </LaptopForm>

</div>
</template>

<script>

import LaptopForm from '@/components/forms/LaptopForm'

export default {
    name: 'CreateLaptop',
    components: {
        LaptopForm
    },
    methods:{
        laptopFormSubmit(laptop) {
          this.$services.laptops.addLaptop(laptop).then( data => {
            this.$router.push('/laptops')
          }).catch( err => {
            if (err.response.status == 400) {
              alert('Error creating laptop because ' + err.response.data)
            } else {
              alert('Error creating laptop.')
            }
          })
        },
        cancel() {
          this.$router.push('/laptops')
        }
    }
}

</script>

<style>
</style>
