<template>
  <div>
    <div class="divFixed divLogo">
      <img
        width="100px"
        class="center-image mb-3"
        src="@/assets/Lambang_Kota_Semarang.png"
      />
    </div>

    <div class="div1">
      <b-button style="font-weight:bold;" variant="primary">Kembali</b-button>

      <h1 style="font-weight:bold;" class="mb-5 mt-5">
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
  padding: 120px;
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
  background-color: #dc3545;
  justify-content: center;
  padding: 20px;
}

.zoomIn {
  transition: transform 0.2s; /* Animation */
  margin: 0 auto;
  cursor: zoom-in;
}
.zoomIn:hover {
  transform: scale(1.5); /* (150% zoom)*/
}
</style>
