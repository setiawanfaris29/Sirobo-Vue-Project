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

 <div class="header">
        <h1 style="color:#fff;">
       <strong style="color:#dc3545;">Sejarah</strong> <strong style="color:#AAE003;">Singkat</strong> 
        </h1>
      </div>

<div class="containers">
<p style="font-weight: lighter;">Mengacu pada Peraturan Walikota Semarang Nomor 53 Tahun 2008 tentang Penjabaran Tugas Pokok dan Fungsi Badan Pelayanan Perijinan Terpadu Kota Semarang, unit organisasi ini mempunyai tugas pokok merencanakan, memimpin, mengkoordinasikan, membina, mengawasi dan mengendalikan serta mengevaluasi penyelenggaraan pelayanan perijinan terpadu.

Untuk melaksanakan tugas pokok tersebut di atas, Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kota Semarang, antara lain mempunyai fungsi.

</p>

      <img width="100%" class="img-fluid mb-2" src="@/assets/tugas.png">
</div>

      

      <!-- <b-button style="font-weight:bold;" variant="primary">Kembali</b-button> -->

      <!-- <h1 style="font-weight:bold;" class="mb-5 mt-5">SYARAT PEMBUATAN KTP</h1> -->
      <!-- <div role="tablist">
        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-1
            variant="danger"
            >Syarat penerbitan KTP lama atau e-KTP baru</b-button
          >
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card>
              <ul>
                <li>Telah berusia 17 tahun.</li>
                <li>Surat Pengantar RT/RW.</li>
                <li>Fotokopi KK.</li>
                <li>Fotokopi Akta Kelahiran.</li>
                <li>
                  Surat Keterangan Pindah yang diterbitkan oleh pemerintah
                  Kabupaten/Kota dari daerah asal.
                </li>
                <li>
                  Surat Keterangan Datang dari Luar Negeri yang diterbitkan oleh
                  Instansi Pelaksana bagi WNI yang datang dari Luar Negeri
                  karena pindah.
                </li>
                <li>
                  Datang langsung untuk di foto (E-KTP) atau melampirkan pas
                  foto terbaru ukuran 3×4 sebanyak 2 lembar (KTP Lama).
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
            >Syarat perpanjang KTP</b-button
          >

          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>KTP yang telah habis masa berlakunya.</li>
                <li>
                  Surat pengantar RT/ RW. <br />
                  Contoh :
                  <br />
                  <img
                    width="250px"
                    src="../assets/suratpengantar.jpg"
                    class="zoomIn"
                  />
                </li>
                <li>Fotokopi KK.</li>
                <li>Formulir permohonan perpanjang KTP.</li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-3
            variant="danger"
            >Apa saja data yang akan di isi?</b-button
          >
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>Nama.</li>
                <li>Tempat/Tgl Lahir.</li>
                <li>Jenis Kelamin.</li>
                <li>Alamat.</li>
                <li>Agama.</li>
                <li>Status Pekerjaan.</li>
                <li>Kewarganegaraan.</li>
                <li>Berlaku Hingga.</li>
                <li>Foto.</li>
                <li>Tanda Tangan.</li>
                <li>NIK.</li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-4
            variant="danger"
            >Prosedur pembuatan dan perpanjang e-KTP</b-button
          >
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>
                  Datanglah ke kecamatan / kelurahan pada pagi hari : untuk
                  menghindari antrian saat membuat atau memperpanjang KTP kamu
                  dapat datang lebih pagi ke kelurahan.<br />
                  Lalu berikan berkas dokumen ke petugas di loket dan kamu akan
                  mendapatkan nomor antrian.
                </li>
                <li>
                  Pengambilan data : Setelah nomor antrian dipanggil maka inilah
                  saatnya pengambilan data kamu, awal biasanya kamu akan
                  difoto,<br />
                  pengambilan tanda tangan digital, perekam data sidik jari,
                  scan retina mata.
                  <br />
                  <vue-plyr>
                    <video controls crossorigin playsinline>
                      <source src="../assets/e_ktp.mp4" type="video/mp4" />
                    </video>
                  </vue-plyr>
                </li>
                <li>
                  Proses pelengkapan data akan berlangsung selama 15 menit dan
                  <br />
                  proses pembuatan akan berlangsung paling lama 14 hari atau 2
                  minggu setelah kamu mengikuti semua persyaratan di atas.
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
            v-b-toggle.accordion-5
            variant="danger"
            >Syarat dokumen yang di bawa saat mengurus KTP yang hilang</b-button
          >
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>
                  Surat keterangan kehilangan kepolisian.
                </li>
                <li>
                  Fotocopy kartu keluarga.
                </li>
                <li>
                  Surat pengantar RT/RW.
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
export default {
    
};
</script>

<style>
.div1 {
  display: block;
}

li {
  margin: 20px 20px 30px;
}

h1 {
  text-align: center;
}

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

.header{
  display: flex;
  justify-content: left;
  padding: 25px;
  background-color: #171717;
}

.carousel{
  display: flex;
  justify-content: center;
  margin: 10px 20px 20px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 60px !important;
  width: 60px !important;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}
.containers{
   display: block;
   margin: 25px;
}
</style>
