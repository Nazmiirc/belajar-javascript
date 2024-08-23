let pc = {
    procie: "celeron",
    ram: ["2gb", "8gb"],
    slotRam: 2,
    mobo: {
        chip: "B450",
        socket: "LGA1abcd",
        dualChannel: true
    }
}
console.log(pc["procie"])  //---kalo mau akses object harus pake string
console.log(pc["mobo"]["chip"])  //---(kalo mau akses object harus pake string,
console.log(pc["ram"][1])           //kurung kedua utk akses object kedua).