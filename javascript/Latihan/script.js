let nama = document.getElementById("nama");
let instansi = document.getElementById("instansi")
let btnSimpan = document.getElementById("simpan")

let data = [];


btnSimpan.addEventListener("click", function(){
console.log("tombol ditekan");

data.push({nama : nama.value,instansi : instansi.value});
console.log (data);

document.getElementById("list").innerHTML = "";
    for(const [index,value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += `</tr><td>${value.nama}</td><td>
         ${value.instansi}</td></tr>`;
    }
});


fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => console.log(json))
            