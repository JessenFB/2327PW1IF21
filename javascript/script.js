document.getElementById ("judul").innerHTML = "Javascript";

let desc = document.getElementById("deskripsi")
desc.innerHTML = "Belajar Dom, Variabel, Perualangan"

let nama = document.getElementById("nama")
let btnSimpan = document.getElementById("simpan")
let data = [];

btnSimpan.addEventListener("click",function (){
    console.log("Tombol Ditekan")
    data.push(nama.value);
    console.log(data);

    document.getElementById("list").innerHTML = "";
    for(const [index,value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += `<li>${value}</li>`;
    }
});
