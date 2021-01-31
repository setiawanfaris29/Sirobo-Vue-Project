<template>
  <div id="app">
    <CardView/>
    <!-- <SnapToGrid/> -->
  </div>
</template>

<script>
import CardView from './components/CardView.vue'
// import SnapToGrid from './components/SnapToGrid.vue'

export default {
  name: 'App',
  components: {
    CardView,
    // SnapToGrid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
