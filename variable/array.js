// ------------------------------------------Pertemuan 1-----------------------------------------------//
let mhs = ["Raihan", "Sabil", "Ukasyah"];
//             0        1         2

let totalMhs = mhs.length
mhs.push("Alip"); //---nambah di akhir
mhs.pop(); //---ngapus yang akhir
mhs.unshift("Ya'qub");  //---nambah dari Array 0
mhs.splice(2,0, "Sulthon"); /*---angka pertama untuk mau nambahnya mulai dari index berapa,
                                angka kedua buat ngapus,terakhir adalah object buat ditambahin*/
mhs.splice(2,0); /*---angka pertama buat mulai dari index berapa,
                    angka kedua buat berapa index yang mau dihapus*/
console.log(mhs);

//mhsStrong = mhs.slice(1, 2)  /*1 sebagai brp yang dipilih, 2 sebagai mulai dari mana*/ 
//console.log(mhsStrong)
