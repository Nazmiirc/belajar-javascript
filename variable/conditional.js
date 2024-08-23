let mhs = {
    name: "Daffa",
    age: 20,
    major: "TRPL",
    skills: ['Sysadmin', 'OOP', 'Design'],
    mhsActive: true,
}

console.log(mhs.name);




// if else blog
if (mhs.major == "TRMG") {
    console.log(mhs.name + " Jurusan TRMG")
} else if (mhs.major == "TRKJ") {
    console.log(mhs.name + " Jurusan TRKJ")
} else if (mhs.major == "TRPL") {
    console.log(mhs.name + " Jurusan TRPL")
} else{
    console.log(mhs.name + "Jurusan" + mhs.major);
}

Ternary
console.log(mhs.major == "TRPL" ? mhs.name + " Jurusan TRPL" : mhs.name + " Bukan TRPL")

//Switch Case
switch (mhs.major) {
    case "TRMG":
        console.log(mhs.name + " Jurusan TRMG");
        break;
    case "TRKJ":
        console.log(mhs.name + " Jurusan TRKJ");
        break;
    case "TRPL":
        console.log(mhs.name + " Jurusan TRPL");
        break;
    default:
        console.log(mhs.name + " Bukan anak IDN");
}

// conditional function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
    let age = peserta.age;
    let poor = peserta.poor;
    let skills = peserta.skills;
    console.log(peserta)

    if (age < 21 , poor == true , skills.length > 2) {
        console.log("mahasiswa Lulus")
    } else if(age > 21 , poor == true , skills.length > 2) {
        console.log("mahasiswa hampir Lulus")
    } else {
        console.log("mahasiswa tidak Lulus")
    }
}

cekKelulusan(mhs);