//getelementbyID untuk menghubungkan button di html
//eventlistener buat ngarahin apa yang bakal terjadi kalo di "click"
//Function berfungsi sebagai callback dan dibuat anonim karena tidak dibutuhkan ditempat lain funcnya
document.getElementById("add-data").addEventListener("click",async function(){
    const form = document.getElementById("wish-form");

    // Validasi form sebelum mengirim data
    if (!form.checkValidity()) {
        alert("Silakan isi semua field yang diperlukan.");
        return;
    }
    //menggunakan .value untuk mendapatkan nilai yang diinput dari variabel
    const nama = document.getElementById("nama").value;
    const harapan = document.getElementById("harapan").value;
    const untuk = document.getElementById("untuk").value;
    
    const newItem = {
        Nama: nama,
        Harapan: harapan,
        untuk_siapa: untuk
    };
    //try untuk mendeteksi kalo terjadi kesalahan
    try {
    //fetch fungsi js untuk membuat permintaan HTTP (GET,POST,dkk) ke url tertentu dengan endpoint tertentu
    //await dieksekusi saat fetch selesai dan mengembalikan respon dari server (promise)
    //kalau gapake await, kode berikutnya akan dieksekusi sebelum respon dari fetch diterima    
        const response = await fetch("/send-data/", {
            //method disesuaikan dengan HTTP yang ada di API backend
            method: "POST",
            //content type diubah berdasarkan jenis data yang dikirim, biar servernya tau
            //karena bentuk tipe datanya list jadi pake JSON (cari aja ndiri banyak contohnya)
            headers: {
                "Content-Type": "application/json"
            },
            //body menentukan isi dari permintaan POST (data yg dikirim ke server)
            //stringify untuk mengubah objek (newitem) menjadi string json
            body: JSON.stringify(newItem)
        });
        //await dieksekusi dengan menunggu server 'response' dan mengubahnya formatnya jadi JSON
        
        const data = await response.json()
        //alert buat nampilin notifikasi pop up, kalo di console warna merah
        alert("Data added: " + JSON.stringify(data));
        //location.reload(); // Reload halaman untuk memperbarui data yang ditampilkan
    } catch (error){
        console.error("terjadi kesalahan : ", error);
        alert("Gagal menambahkan data. Silahkan coba ulang");
    }    
});

document.getElementById("save-data").addEventListener("click", async function () {
    try{
        await fetch("/save-data/", {
            method : "POST",
        });
        alert("Data berhasil disimpan");
    }catch (error){
        console.error("terjadi kesalahan : ", error);
        alert("Gagal menyimpan data. Silahkan coba ulang");
    }
})