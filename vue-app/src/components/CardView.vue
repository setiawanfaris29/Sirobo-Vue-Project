<template>
  <div>
  
  <b-img width="150px" class="mb-3" src="https://images.solopos.com/2015/08/logo-jateng-1200x900.png" fluid rounded center/>

    <b-container fluid="sm">
    <b-row class="mb-3">
      <b-col sm="6">
        <div
          class="card"
          style="background-color:#00b3ff;"
        @click="$bvModal.show('modal-scoped')"
        >
          Pendafataran Anggota Baru
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col  sm="6">
        <audio ref="audio" src="../assets/ES_Multimedia Alarm 24_SFX_Producer.mp3" preload id="audio" muted></audio>
        <div class="card toggle-sound" style="background-color:#00b3ff;" @click="playSound()">
          Coworking Space
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col  sm="6">
        <div class="card" style="background-color:#00b3ff;">
          Buku
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-3">
      <b-col sm="6">
        <div class="card" style="background-color:#00b3ff;">
          Anak-anak
        </div>
      </b-col>
    </b-row>

    <b-modal v-model="show" id="modal-scoped" centered>
      <template #modal-header>
        <h5 class="text-center">Perpustakaan Kota Semarang</h5>
      </template>

      <template #default>
        <h3 class="text-center">Sudah ditempat</h3>
        <h2 class="text-center">Pendafataran Anggota Baru ?</h2>
      </template>

      <template #modal-footer="ok">
        <b-button size="lg" class=" btn mr-auto" variant="success" @click="ok()"
          >Ya</b-button
        >
        <b-button
          size="lg"
          class="btn ml-auto"
          variant="danger"
          @click="show = false"
          >Tidak</b-button
        >
      </template>
    </b-modal>

    <vue-plyr>
        <video
        controls
        crossorigin
        playsinline
        poster="../assets/posters.png" :videos="this.videos">
           <source src="../assets/Selamat_Datang_di_Kota_Semarang.mp4" type="video/mp4" />
        </video>
    </vue-plyr>

    <!-- <b-embed controls controlsList="nodownload" class="video mb-3 embed-responsive-1by1" type="video"  preload="none" poster="/">
      <source src="../assets/Selamat_Datang_di_Kota_Semarang.mp4" type="video/mp4">
    </b-embed> -->

 </b-container>
  </div>
</template>

<script>
export default {
  name: "CardView",
  data() {
    return {
      show: false,
    }
    
  },
  methods: {
     playSound() {
        let audio = this.$refs.audio;
        console.log("play it")
        audio.play();
        document.querySelector(".toggle-sound")
      //   if (
      //     audio.paused &&
      //     document.querySelector(".toggle-sound").classList.contains("paused")
      //   ) {
      //     console.log("play it")
      //     audio.play();
      //     document.querySelector(".toggle-sound").classList.remove("paused");
      //   } else {
      //     console.log("pause it")
      //     audio.pause();
      //     document.querySelector(".toggle-sound").classList.add("paused");
      //   }
      }
  }
};
</script>

<style>
div{
  display: block;
  justify-content: center;
}

video{
  max-width: 100%;
  object-fit: cover;

}

.plyr{
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.plyr .plyr__video-wrapper {
  height: 1080px;
}


.card {
  width: auto;
  height: 100%;
  padding: 50px;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
