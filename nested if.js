// Rafi Antaresa (WebDev_C_Morning)

var usia = 18;
var tiket = true;
// keterangan tiket, true = Ada tiket dan false = Tidak Ada tiket

if (usia >= 18) {
  console.log("Selamat, Anda Cukup Usia Untuk Menonton Film.");
  if (tiket) {
    console.log("Dan Anda Memiliki Tiket.");
  } else {
    console.log("Namun Anda Tidak Memiliki Tiket.");
  }
} else {
  console.log("Maaf, Anda Belum Cukup Usia Untuk Menonton.");
}