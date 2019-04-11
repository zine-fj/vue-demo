<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
export default {
  name: 'app',
  components: {
    BlogHeader
  }
}
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */
</style>
