<template>
  <div>
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
       <strong style="color:#dc3545;">Visi</strong> dan <strong style="color:#AAE003;">Misi</strong> 
        </h1>
      </div>
      
      <div class="carousel">
      <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      background="#ababab"
      img-width="200"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333;"
    >

      <!-- Slides with image only -->
       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0001.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0002.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0003.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0004.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0005.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

       <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/0006.jpeg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
            </b-carousel>
      </div>

  <!-- <b-button style="font-weight:bold;" variant="primary">Kembali</b-button>

      <h1 style="font-weight:bold;" class="mb-5 mt-5">
        SYARAT PEMBUATAN SURAT IZIN USAHA MIKRO KECIL (IUMK)
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
                  Mengisi formulir yang memuat tentang:
                  <br />
                  <ul>
                    <li>Nama</li>
                    <li>Nomor KTP</li>
                    <li>Nomor telepon</li>
                    <li>Alamat</li>
                    <li>Kegiatan usaha</li>
                    <li>Sarana usaha yang digunakan</li>
                    <li>Jumlah modal usaha</li>
                  </ul>
                </li>
                <li>
                  Surat pengantar dari RT atau RW terkait lokasi usaha
                </li>
                <li>
                  Fotokopi Kartu Tanda Penduduk (KTP)
                </li>
                <li>
                  Fotokopi Kartu keluarga (KK)
                </li>
                <li>
                  Pas foto terbaru berwarna ukuran 4 x 6 (2 lembar)
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
            >Bagaimana cara melakukan permohonan perizinan di kantor
            kecamatan?</b-button
          >

          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card>
              <ul>
                <li>
                  Pemohon mengisi formulir dan melengkapi dokumen persyaratan
                </li>
                <li>
                  Pemohon membawa formulir dan dokumen persyaratan ke kantor
                  kecamatan setempat
                </li>
                <li>
                  Camat menerima dan memeriksa kelengkapan dan kebenaran dari
                  formulir dan dokumen persyaratan
                  <br />
                  <ul>
                    <li>
                      Apabila sudah lengkap dan benar, Camat akan memberikan
                      naskah 1 lembar IUMK.
                    </li>
                    <li>
                      Jika masih belum lengkap, Camat mengembalikan formulir dan
                      dokumen persyaratan untuk dilengkapi oleh pemohon
                    </li>
                  </ul>
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
            v-b-toggle.accordion-3
            variant="danger"
            >Bagaimana cara melakukan permohonan perizinan secara
            online?</b-button
          >

          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card>
              <h3><b>Tahap 1: Membuat akun OSS</b></h3>
              <br />
              <ul>
                <li>
                  Pemohon mengunjungi website
                  <a href="https://www.oss.go.id/oss/"
                    >https://www.oss.go.id/oss/</a
                  >.
                </li>
                <li>
                  Klik tombol “Daftar” di kanan atas
                  <br />
                  <img
                    width="250px"
                    src="../assets/daftar.png"
                    class="zoomIn"
                  />
                </li>
                <li>
                  Mengisi formulir yang ada di layar
                  <br />
                  <p>Data yang harus diisi adalah</p>
                  <ul>
                    <li>Jenis Identitas</li>
                    <li>Nomor Induk Kependudukan (NIK)</li>
                    <li>E-mail</li>
                    <li>Jenis Pelaku Usaha</li>
                    <li>Nama (sesuai KTP)</li>
                    <li>Negara asal</li>
                    <li>No telepon</li>
                    <li>Website usaha</li>
                  </ul>
                </li>
                <li>Masukkan Kode Captcha</li>
                <li>Klik tombol “Daftar” di bawah</li>
                <li>Cek E-mail</li>
                <li>Buka E-mail registrasi dari OSS</li>
                <li>Klik tombol “Aktivasi”</li>
                <li>Akun di OSS sudah aktif</li>
              </ul>

              <br />
              <h3><b>Tahap 2: Masuk ke akun OSS dan mengisi data</b></h3>
              <br />
              <ul>
                <li>Cek E-mail</li>
                <li>Buka E-mail verifikasi dari OSS</li>
                <li>Lihat password yang dikirimkan</li>
                <li>Salin/copy password tersebut</li>
                <li>
                  Pemohon mengunjungi website
                  <a href="https://www.oss.go.id/oss/"
                    >https://www.oss.go.id/oss/</a
                  >
                </li>
                <li>Klik tombol “Login”</li>
                <li>Masukkan alamat E-mail pemohon pada isian “Username”</li>
                <li>Tempel/paste password pada isian“Password”</li>
                <li>Masukkan Kode Captcha</li>
                <li>Klik tombol “Login”</li>
                <li>
                  Klik “Perizinan Mikro” pada menu di sisi kiri
                  <br />
                  <img
                    width="250px"
                    src="../assets/daftar.png"
                    class="zoomIn"
                  />
                </li>
                <li>Klik tombol “Lanjutkan”</li>
                <li>Klik tombol “Pengajuan Baru”</li>
                <li>
                  Mengisi dan melengkapi data
                  <br />
                  Data yang harus diisi:
                  <ul>
                    <li>No.Telepon</li>
                    <li>Nomor Pokok Wajib Pajak (NPWP)</li>
                    <li>Pendidikan Terakhir</li>
                    <li>Modal/Kekayaan Bersih</li>
                  </ul>
                </li>
                <li>Klik tombol “Simpan dan Lanjutkan”</li>
                <li>Klik tombol “Tambah Data”</li>
                <li>
                  Mengisi dan melengkapi data mengenai usaha pemohon
                  <br />
                  Data yang harus diisi:
                  <ul>
                    <li>Nama usaha</li>
                    <li>Sektor usaha</li>
                    <li>Bidang/Kegiatan usaha</li>
                    <li>Sarana usaha yang digunakan</li>
                    <li>
                      Alamat usaha (Provinsi, Kabupaten/Kota, Kecamatan,
                      Kelurahan/Desa)
                    </li>
                    <li>Status tempat usaha</li>
                    <li>Jumlah tenaga kerja</li>
                    <li>Perkiraan hasil penjualan pertahun</li>
                  </ul>
                </li>
                <li>Klik tombol “Simpan Data Usaha”</li>
              </ul>
              <br />
              <h3><b>Tahap 3: Mengunduh NIB dan IUMK</b></h3>
              <br />
              <ul>
                <li>Klik data usaha yang telah dilengkapi</li>
                <li>Klik tombol “Simpan dan Lanjutkan”</li>
                <li>Klik data usaha</li>
                <li>Klik tombol “Proses NIB”</li>
                <li>Klik tombol “Lanjutkan”</li>
                <li>
                  Klik tombol “NIB” untuk menerbitkan NIB. Bisa diunduh dan
                  disimpan
                </li>
                <li>
                  Klik tombol “Cetak Izin Usaha” untuk menerbitkan IUMK. Bisa
                  diunduh dan disimpan
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
            v-b-toggle.accordion-4
            variant="danger"
            >Apakah melakukan permohonan perizinan Usaha Mikro Kecil ini berbayar?</b-button
          >

          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card>
              <b>Gratis</b>
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
</style>
