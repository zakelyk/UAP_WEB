
function hitung(){
    var kode = document.getElementById("kode_input").value;
    var qty = document.getElementById("qty_input").value;
    var harga = document.getElementById(kode).innerHTML;
    // alert("Harga : "+harga +"\nQty : "+qty+"Kode : "+kode);
    total = qty * harga;
    alert("Total pembayaran adalah : "+total);
    kembalian();
}
function kembalian(){
    bayar = window.prompt("Masukan uang user : ");
    // alert("bayar : "+bayar);
    kembali = total - bayar;
    alert("total kembalian anda adalah : "+kembali);
}