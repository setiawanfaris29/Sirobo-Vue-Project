<template>
  <div>
    <!-- <div class="divFixed divLogo">
      <img
        width="100px"
        class="center-image mb-3"
        src="@/assets/Lambang_Kota_Semarang.png"
      />
    </div> -->
 <div class="divLogo">
      <div class="m-3">
      <img
        width="300px"
        src="@/assets/dpmptsplogo3.png"
      />
    </div>
  <div class="m-3 mr-5">
      <img
        width="100px"
        src="@/assets/Lambang_Kota_Semarang.png"
      />
    </div>
    </div>
  
    <div class="div1">

<div class="containers">
  <h1 >
       <strong >Alur Perizinan </strong> DPMPTSP 
        </h1>
  <p style="font-weight: lighter;">
    DPMPTSP sangat mengharapkan pelayanan kepada masyarakat beroperasi dan berjalan secara efektif dan efesien. Untuk mewujudkan hal tersebut, DPMPTSP Kota Semarang menerapkan mekanisme pelayanan yang mudah diikuti.
</p>
<img width="100%" class="img-fluid" src="@/assets/alur.jpeg">
</div>
      <!-- <b-button style="font-weight:bold;" variant="primary">Kembali</b-button>

      <h1 style="font-weight:bold;" class="mb-5 mt-5">
        SYARAT PEMBUATAN SURAT IZIN IMB
      </h1>
      
      <div role="tablist">
        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-1
            variant="danger"
            >Syarat Administrasi</b-button
          >
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card>
              <ul>
                <li>
                  Formulir Permohonan Izin IA untuk IMB rumah tinggal yang sudah
                  diisi dan ditandatangani di atas materai Rp6.000,-
                </li>
                <li>
                  <b>Fotokopi bukti kepemilikan tanah.</b> <br />
                  Untuk surat tanah, perlu dilampirkan juga surat pernyataan
                  bahwa tanah yang dikuasai dan/atau dimiliki tidak dalam
                  sengketa.
                </li>
                <li>
                  Fotokopi Kartu Tanda Penduduk (KTP) dari pemohon sebanyak satu
                  lembar. Bagi pemohon berbadan hukum dilampirkan akta pendirian
                  usaha. Jika tidak diurus sendiri maka wajib melampirkan surat
                  kuasa kepada yang diwakilkan dengan dilengkapi fotokopi KTP.
                </li>
                <li>
                  Gambar konstruksi bangunan minimal tujuh set terdiri dari
                  denah, tampak muka, samping, belakang, dan rencana utilitas.
                  <br />
                  <b>Contoh :</b>
                  <br />
                  <img
                    width="250px"
                    src="../assets/denahrumah.jpg"
                    class="zoomIn"
                  />
                </li>
                <li>
                  Surat pemberitahuan kepada tetangga sekitar yang ditembuskan
                  kepada pengurus Rukun Tetangga dan Rukun Warga dilampiri surat
                  jaminan kesanggupan penanggulangan dampak. (khusus untuk
                  bangunan posisi berhimpit dengan batas persil).
                </li>
                <li>
                  Bukti pelunasan Pajak Bumi dan Bangunan (PBB) terbaru.
                </li>
                <li>
                  Surat perjanjian penggunaan lahan (jika tanah bukan milik
                  pemohon IMB).
                </li>
                <li>
                  Formulir permohonan yang telah dilegalisir pihak kelurahan dan
                  kecamatan tempat bangunan akan didirikan.
                </li>
                <li>
                  Dilampiri Surat Perintah Kerja (SPK) apabila pembangunan
                  dikerjakan dengan sistem borongan.
                </li>
                <li>
                  Data hasil penyelidikan tanah bagi yang disyaratkan.
                </li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-2
            variant="danger"
            >Syarat Teknis</b-button
          >

          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>
                  Gambar rencana arsitektur (gambar denah, tampak, potongan, dan
                  detail bangunan) dan gambar rencana struktur (pondasi, kolom,
                  balok, lantai, atap).
                  <br />
                  Contoh <br />
                  <img
                    width="250px"
                    src="../assets/denahrumah.jpg"
                    class="zoomIn"
                  />
                </li>
                <li>
                  Rekomendasi teknis IPPL dan siteplan.
                </li>
                <li>
                  Perhitungan konstruksi bangunan yang dibuat oleh tenaga ahli
                  bersertifikasi (SIPB) untuk bangunan di atas dua lantai
                  dan/atau bangunan konstruksi beton yang memiliki bentangan
                  lebih dari 10 meter.
                </li>
                <li>
                  Gambar bangunan terdahulu jika bermaksud mengubah bentuk atau
                  memperluas bangunan.
                </li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.div1 {
  display: block;
 
}

li {
  margin: 20px 20px 30px;
}
/* 
h1 {
  text-align: center;
} */

.plyr {
  width: 550px;
}

.plyr--full-ui input[type="range"] {
  color: #dc3545;
}

.plyr__control--overlaid {
  background: rgb(220, 53, 70);
}

.plyr--video .plyr__control.plyr__tab-focus,
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded="true"] {
  background: #dc3545;
}

.plyr__control.plyr__tab-focus {
  box-shadow: 0 0 0 5px rgb(220, 53, 70);
}

.plyr__menu__container
  .plyr__control[role="menuitemradio"][aria-checked="true"]::before {
  background: #dc3545;
}

video {
  max-width: 100%;
  object-fit: cover;
}

.divLogo {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 5px 2px 60px #2a2a2a25;
  border-bottom: 8px solid #dc3545;
  position: -webkit-sticky; /* Safari & IE */
  position: sticky;
  top: 0;
}

.zoomIn {
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
  cursor: zoom-in;
}
.zoomIn:hover {
  transform: scale(1.5); /* (150% zoom)*/
}
.containers{
   display: block;
   margin: 25px;
}
</style>
