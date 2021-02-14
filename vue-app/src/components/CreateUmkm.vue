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
