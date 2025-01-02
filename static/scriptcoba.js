// Array untuk menyimpan data
const wishList = [];

// Fungsi untuk menambah data ke array wishList
function addData() {
    const nama = document.getElementById("nama").value;
    const harapan = document.getElementById("harapan").value;
    const untuk = document.getElementById("untuk").value;

    const newWish = { nama, harapan, untuk };
    wishList.push(newWish);

    // Tampilkan data di browser
    displayData();
}

// Fungsi untuk menampilkan data di halaman
function displayData() {
    const dataContainer = document.querySelector("pre");
    dataContainer.textContent = JSON.stringify(wishList, null, 2);
}

// Fungsi untuk menyimpan data (misalnya kirim ke server atau lokal)
function saveData() {
    // Misalnya kirim data ke server menggunakan AJAX atau fetch
    console.log("Data disimpan:", wishList);
}

// Event listener untuk tombol Add Data
document.getElementById("add-data").addEventListener("click", addData);

// Event listener untuk tombol Save Data
document.getElementById("save-data").addEventListener("click", saveData);
