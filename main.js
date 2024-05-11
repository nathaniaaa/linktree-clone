// console.log("hello world");

// const nama = "Nathania Ratnadewi";
// nama = "HAII";
// console.log(nama);

// let angka = "123";
// console.log(typeof angka);

// const pi = 3.14;
// const r1 = 10;
// const luas_lingkaran = pi * r1**2;
// console.log(luas_lingkaran);

// let pesanan = 15;
// const status_pengiriman = "terkirim";

// if(status_pengiriman == "terkirim"){
//     pesanan = pesanan + 2;
// }

// console.log(pesanan);

// let i = 0;
// for(i = 0; i <= 3; i++){
//  console.log(i);
// }

// const nama = "Nathania Ratnadewi";
// const nama2 = "Vee"
// const jurusan = "Teknologi Informasi";
// const bool = true;

// const perkenalan = "Hai, aku " + nama + ", aku prodi" + jurusan;
// console.log(perkenalan);

// const perkenalan2 = `Hai, aku ${bool ? nama2 : nama}, aku prodi ${jurusan}`;
// console.log(perkenalan2);


// const perkenalan = (nama, jurusan) => {
//     return `Hai, aku ${nama}, aku prodi ${jurusan}`;
// };

// console.log(perkenalan("Nathania", "TIF 23"));
// console.log(perkenalan("Vee", "TIF 23"));
// console.log(perkenalan("Nia", "TIF 23"));

// let angka = [1, 4, 5, 6, 7, 7, 9, 10];

// //mapping
// const hasil_angka = angka.map((angkas) => angkas*2);
// console.log(hasil_angka);

// //filter
// const angka_ganjil = angka.filter((angkas) => angkas%2 == 1);
// console.log(angka_ganjil);

// const data_diri = {
//     nama : "Nathania Ratnadewi",
//     prodi : "Teknologi Informasi",
//     umur : "20",
// };

// console.log(data_diri);
// console.log(data_diri.prodi);

const tugas = "Tugas1_522605_Nathania-Ratnadewi_Webdev.pdf";
const nama = tugas.split("_");
console.log(nama);
console.log(nama[2]);

const nama_tugas = nama[3].split(".");
close.log(nama_tugas);