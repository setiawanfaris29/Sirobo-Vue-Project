<template>
  <div id="app">
    <!-- <CardView/> -->
    <Alur/>
    <!-- <Tugas/> -->
    <!-- <SnapToGrid/> -->
    <!-- <Sejarah/> -->
    <!-- <VisiMisi/> -->
  </div>
</template>

<script>
// import CardView from './components/CardView.vue'
import Alur from './components/CreateAlur.vue'
// import Tugas from './components/CreateTugas.vue'
// import SnapToGrid from './components/SnapToGrid.vue'
// import Sejarah from './components/CreateSejarah.vue'
// import VisiMisi from './components/CreateVisiMisi.vue'

export default {
  name: 'App',
  components: {
    // CardView,
    Alur
    // SnapToGrid
    // Tugas
    // Sejarah
    // VisiMisi    
  }
}
</script>

<style>
#app {
  font-family: "Open Sans", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: #ffff;
  font-weight: bolder;
  margin-bottom: 60px;
}
</style>
