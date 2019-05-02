<template>
  <div class="navigation"> <!--Navigation links at top of page-->

  <span class="p-2">
    <router-link to="/employees">Employee Management</router-link>
  </span>

  <span class="p-2">
    <router-link to="/laptops">Laptop Management</router-link>
  </span>

  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.navigation {
    text-align: center
}
</style>
