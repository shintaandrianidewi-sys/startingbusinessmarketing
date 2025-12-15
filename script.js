// JavaScript untuk Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Anda bisa menambahkan validasi form di sini, misalnya:
// document.querySelector('.contact-form form').addEventListener('submit', function(e) {
//     // Lakukan validasi input
//     // Jika validasi gagal:
//     // e.preventDefault();
//     // alert("Mohon isi semua kolom dengan benar!");
// });

console.log("Website Kosmetik GlowUp Berhasil dimuat!");
