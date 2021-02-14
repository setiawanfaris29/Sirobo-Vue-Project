<template>
  <div id="app">
    <!-- <CardView/> -->
    <!-- <CreateKTP/> -->
    <!-- <Nikah/> -->
    <!-- <SnapToGrid/> -->
    <!-- <CreateBangunan/> -->
    <Umkm/>
  </div>
</template>

<script>
// import CardView from './components/CardView.vue'
// import CreateKTP from './components/CreateKTP.vue'
// import Nikah from './components/CreateMenikah.vue'
// import SnapToGrid from './components/SnapToGrid.vue'
// import CreateBangunan from './components/CreateBangunan.vue'
import Umkm from './components/CreateUmkm.vue'

export default {
  name: 'App',
  components: {
    // CardView,
    // CreateKTP
    // SnapToGrid
    // Nikah
    // CreateBangunan
    Umkm    
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
