// Jalankan fungsi setelah dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan elemen carousel
    var myCarousel = document.getElementById("carouselExampleInterval");

    // Tambahkan event listener untuk mendeteksi perubahan slide
    myCarousel.addEventListener("slid.bs.carousel", function () {
        // Dapatkan elemen aktif
        var activeItem = myCarousel.querySelector(".carousel-item.active");

        // Atur opasitas item aktif ke 1 untuk efek fade
        activeItem.style.opacity = 1;
    });

    // Tambahkan event listener untuk mendeteksi sebelum slide berubah
    myCarousel.addEventListener("slide.bs.carousel", function () {
        // Dapatkan elemen aktif
        var activeItem = myCarousel.querySelector(".carousel-item.active");

        // Atur opasitas item aktif menjadi 0.5 saat slide berubah
        activeItem.style.opacity = 0.5;
    });
});
