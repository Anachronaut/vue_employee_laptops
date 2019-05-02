<template>
  <div class="employee-list">

  <h2>Employees</h2>

  <router-link to="/create_employee">
    <button class="btn btn-secondary mt-2 mb-2">Create new employee</button>
  </router-link>

  <table class="table table-hover">
    <tr><th>id</th><th>Name</th><th>Edit</th></tr>
    <tr v-for="employee in employees" v-bind:key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>
            <router-link :to="{ name: 'employee', params: { id: employee.id } }">
                <img src="@/assets/edit.png"> <!--Edit icon-->
            </router-link>
        </td>
    </tr>
  </table>

  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data() {
      return {
          employees: []
      }
  },
  mounted() { //Returns employee db data
      this.$services.employees.getAllEmployees().then( data => {
          this.employees = data
      })
  }
}
</script>

<style scoped>
</style>
