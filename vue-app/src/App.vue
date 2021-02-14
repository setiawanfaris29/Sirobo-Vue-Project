<template>
  <div id="app">
    <!-- <CardView/> -->
    <CreateKTP/>
    <!-- <SnapToGrid/> -->
  </div>
</template>

<script>
// import CardView from './components/CardView.vue'
import CreateKTP from './components/CreateKTP.vue'
// import SnapToGrid from './components/SnapToGrid.vue'

export default {
  name: 'App',
  components: {
    // CardView,
    CreateKTP
    // SnapToGrid
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: #ffff;
  font-weight: bolder;
  margin-bottom: 60px;
}
</style>
