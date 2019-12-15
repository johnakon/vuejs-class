<template>
  <div id="app" class="text-center">
    <!-- create nav bar here -->
    <span><router-link to="/home">Home </router-link></span>
    <span><router-link to="/products">Products</router-link></span>
    <span><router-link to="/services">Services</router-link></span>
    <span><router-link to="/about-us">About</router-link></span>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
 
  }
}
</script>

<style>

</style>
