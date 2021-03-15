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
      <!-- <b-button style="font-weight:bold;" variant="primary">Kembali</b-button> -->
      <!-- <h1 style="font-weight:bold;" class="mb-5 mt-5">
        SYARAT PEMBUATAN SURAT IZIN MENIKAH
      </h1>
      <div role="tablist">
        <b-card no-body class="mb-2">
          <b-button
            size="lg"
            style="font-weight:bold; text-align:left;"
            block
            v-b-toggle.accordion-1
            variant="danger"
            >Persyaratan Membuat Surat Nikah</b-button
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
                  Mengisi formulir dikeluarkan langsung oleh <br />
                  pihak kelurahan domisili masing-masing mempelai.
                </li>
                <li>Surat Pengantar Perkawinan (Formulir N1).</li>
                <li>Surat Permohonan Kehendak Perkawinan (Formulir N2).</li>
                <li>Surat Persetujuan Mempelai (Formulir N3).</li>
                <li>
                  Surat Izin Orang Tua (Formulir N4).
                </li>
                <li>
                  Surat Rekomendasi Perkawinan (Formulir N7) yang dibuatkan oleh
                  pihak KUA.
                </li>
                <li>
                  Surat Keterangan Kematian Suami/Istri (Formulir N6), <br />
                  hanya diperuntukkan untuk janda/duda yang akan menikah
                  kembali.
                </li>
                <li>
                  Surat keterangan kesehatan yang berfungsi sebagai berkas
                  pendukung pembuatan Sertifikat Layak Nikah calon istri dan
                  suami telah melakukan imunisasi TT (Tetanus Toksoid) dari
                  puskesmas atau rumah sakit. <br />
                  Catatan yang perlu diingat, vaksin TT ini wajib dilakukan
                  setidaknya satu sebelum menikah, dengan tambahan empat
                  imunisasi lanjutan yang bersifat opsional.
                </li>
                <li>
                  Surat izin dari pengadilan apabila mempelai tidak bisa
                  memperoleh izin dari orangtua/wali.
                </li>
                <li>
                  Pas foto ukuran 3×2 sebanyak 3 lembar warna.
                </li>
                <li>
                  Surat izin dari atasan masing-masing, jika mempelai adalah
                  anggota TNI/POLRI.
                </li>
                <li>
                  Keterangan dispensasi resmi yang dikeluarkan oleh pengadilan
                  bagi <br />
                  calon mempelai pria yang berusia kurang dari 19 tahun dan bagi
                  calon mempelai wanita yang berusia kurang dari 16 tahun.
                </li>
                <li>
                  Akta cerai atau kutipan buku pendaftaran talak/cerai, untuk
                  pasangan yang perceraiannya terjadi sebelum berlakunya
                  Undang-Undang Nomor 7 tahun 1989.
                </li>
                <li>
                  Membayar biaya pencatatan pernikahan sebesar Rp30.000.
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
            >Bagaimana Cara Mengurus Surat Nikah?</b-button
          >

          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card>
              <h3><b>Untuk Calon Suami</b></h3>
              <br />
              <p><b>Tata cara:</b></p>

              <ul>
                <li>
                  Mengumpulkan Surat Pengantar RT/RW ke pihak kelurahan untuk
                  mendapatkan lembar formulir N1, N2, N3, dan N4.
                </li>
                <li>
                  Pergi ke KUA untuk membuat Surat Rekomendasi Perkawinan (N7),
                  apabila calon istri beralamat lain daerah/kecamatan).
                </li>
                <li>
                  Kumpulkan berkas ke pihak calon istri, apabila calon istri
                  beralamat sama dengan anda.
                </li>
              </ul>

              <br />

              <p><b>Kelengkapan berkas:</b></p>
              <ul>
                <li>Fotokopi KTP.</li>
                <li>
                  Fotokopi akta kelahiran dan Kartu Keluarga (KK).
                </li>
                <li>
                  Pas foto 3×4 berlatar belakang biru sebanyak 2 lembar (jika
                  calon istri luar daerah).
                </li>
                <li>
                  Pas foto 2×3 berlatar belakang biru sebanyak 5 lembar (jika
                  calon istri berdomisili di daerah yang sama).
                </li>
              </ul>
              <br />

              <h3><b>Untuk Calon Istri</b></h3>
              <br />
              <p><b>Tata cara:</b></p>

              <ul>
                <li>
                  Surat pengantar RT/RW dikumpulkan ke pihak kelurahan setempat
                  untuk mendapatkan isian formulir N1, N2, N3, dan N4.
                </li>
                <li>
                  Pergi ke KUA setempat untuk mendaftarkan nikah dan pemeriksaan
                  administrasi (bersama wali dan calon suami).
                </li>
                <li>
                  Calon suami dan calon istri sebelum pelaksanaan nikah akan
                  mendapatkan nasihat perkawinan dari BP4 (Badan Penasihatan
                  Pembinaan dan Pelestarian Perkawinan.
                </li>
              </ul>

              <br />
              <p><b>Kelengkapan berkas:</b></p>
              <ul>
                <li>Fotokopi KTP.</li>
                <li>
                  Fotokopi akta kelahiran dan Kartu Keluarga (KK).
                </li>
                <li>
                  Pas foto 2×3 berlatar belakang biru sebanyak 5 lembar.
                </li>
                <li>
                  Fotokopi kartu imunisasi TT (Tetanus Toksoid).
                </li>
                <li>
                  Surat Keterangan Kematian ayah (sebagai wali) apabila yang
                  bersangkutan sudah meninggal dunia.
                </li>
                <li>
                  Surat Keterangan wali (jika tempat tinggal wali tidak
                  se-daerah). Itu dia berbagai persyaratan dan cara mengurus
                  surat nikah yang perlu kamu ikuti hingga selesai.
                </li>
              </ul>
            </b-card>
          </b-collapse>
        </b-card>
      </div> -->
       <div class="header">
        <h1 style="color:#fff;">
       <strong style="color:#dc3545;">Sejarah</strong> <strong style="color:#AAE003;">Singkat</strong> 
        </h1>
      </div>
      <div class="containers">
        <h2 class="mb-4"><strong>LATAR</strong> BELAKANG</h2>
        <p style="font-weight: lighter;">Inpres Nomor 5 Tahun 2004 tentang Percepatan Pemberantasan Korupsi, dimana dari hasil studi yang dilakukan pihak luar negeri maupun Indonesia, menunjukkan bahwa dalam proses perizinan di Indonesia :</p>
        <ol style="font-weight: lighter;">
          <li>
            Biaya untuk pengurusan izin cukup tinggi
          </li>
          <li>
           Prosedur perizinan yang berbelit-belit
          </li><li>
            Persyaratan perizinan cukup banyak dan rumit
          </li><li>
            Waktu dan penyelesaian izin yang cukup lama dan tidak pas
          </li>
        </ol>
        <p style="font-weight: lighter;">Dalam rangka mendorong pertumbuhan ekonomi melalui peningkatan investasi, dengan memberikan perhatian yang lebih besar pada urusan mikro, kecil dan menengah, perlu dilakukan penyederhanaan penyelenggaraan pelayanan terpadu sesuai Instruksi Presiden Nomor 3 Tahun 2006 tentang Paket Kebijakan Perbaikan Iklim Investasi.</p>

     <h2 class="mt-4 mb-4"><strong>DASAR</strong> HUKUM</h2>
     <ol style="font-weight: lighter;">
          <li>
            UU Nomor 25 Tahun 2007 tentang Penanaman Modal
          </li>
          <li>
           UU Nomor 25 Tahun 2009 tentang Pelayanan Publik
          </li>
          <li>
            Peraturan Pemerintah Nomor 41 tahun 2007 tentang Organisasi Perangkat Daerah
          </li>
          <li>
            Peraturan Menteri Pendayagunaan Aparatur Negara Nomor 20 Tahun 2006 tentang Pedoman Penyusunan Standar Pelayanan Publik
          </li>
          <li>
            Permendagri Nomor 24 Tahun 2006 tentang Pedoman Penyelenggaraan Pelayanan Terpadu Satu Pintu
          </li>
          <li>
            Permendagri Nomor 20 Tahun 2008 tentang Pedoman Organisasi dan Tata Kerja Unit Pelayanan Perizinan Terpadu di Daerah
          </li>
          <li>
            Kepmenpan Nomor 63 Tahun 2003 tentang Pedoman Umum Penyelenggaraan Pelayanan Publik
          </li>
          <li>
            Perda Kota Semarang Nomor 10 Tahun 2013 tentang Perubahan Peraturan Daerah Kota Semarang Nomor 9 Tahun 2008 tentang Pembentukan Susunan Organisasi, Kedudukan dan Tugas Pokok Lembaga Teknis Daerah di Lingkungan Pemerintah Kota Semarang
          </li>
          <li>
           Peraturan Walikota Semarang Nomor 85 Tahun 2013 tentang Perubahan atas Peraturan Walikota Semarang Nomor 18 Tahun 2008 tentang Rincian Tugas, Fungsi dan Tata Kerja Lembaga Teknis Daerah di Lingkungan Pemerintah Kota Semarang
          </li>
        </ol>
         <h2 class="mt-4 mb-4"><strong>SEJARAH</strong> SINGKAT</h2>
         <img width="100%" class="img-fluid mb-2" src="@/assets/sejarah_01.png">
         <img width="100%" class="img-fluid mb-2" src="@/assets/sejarah_02.png">
         <img width="100%" class="img-fluid mb-2" src="@/assets/sejarah_03.png">
         <img width="100%" class="img-fluid mb-2" src="@/assets/sejarah_04.png">
         <img width="100%" class="img-fluid mb-2" src="@/assets/sejarah_05.png">
      </div>
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

/* li {
  margin: 20px 20px 30px;
} */

ol li{
  margin: 5px;
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
