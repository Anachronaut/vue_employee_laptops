<template>
  <div class="laptop-list">

  <h2>Laptops</h2>

  <router-link to="/create_laptop">
    <button class="btn btn-secondary mt-2 mb-2">Create new laptop</button>
  </router-link>

  <table class="table table-hover">
    <tr>
        <th>id</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Serial Number</th>
        <th>Employee ID</th>
        <th>Edit</th>
    </tr>
    <tr v-for="laptop in laptops" v-bind:key="laptop.id">
        <td>{{ laptop.id }}</td>
        <td>{{ laptop.brand }}</td>
        <td>{{ laptop.model }}</td>
        <td>{{ laptop.serialNumber }}</td>
        <td>
          <router-link v-if="laptop.employeeId" :to="{ name: 'employee', params: {id: laptop.employeeId } }">
            {{ laptop.employeeId }} <!--Displays EmployeeID that currently has Laptop in table-->
          </router-link>
        </td>
        <td>
          <router-link :to="{ name: 'laptop', params: { id: laptop.id } }">
            <img src="@/assets/edit.png"> <!--Edit icon-->
          </router-link>
        </td>
    </tr>
  </table>

  </div>
</template>

<script>

export default {
  name: 'LaptopList',
  data() {
      return {
          laptops: []
      }
  },
  mounted() { //Returns laptop db to table
    this.$services.laptops.getAllLaptops().then( data => {
      this.laptops = data
    })
  }
}
</script>

<style scoped>
</style>
