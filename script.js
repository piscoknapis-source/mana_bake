// script.js - Mana Bake

// Fungsi untuk smooth scroll waktu klik navbar
var links = document.querySelectorAll('.navbar a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    var target = this.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      var tujuan = document.querySelector(target);
      if (tujuan) {
        tujuan.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

// Tampilkan pesan waktu klik tombol WA
var tombolWA = document.querySelector('.tombol-wa');
if (tombolWA) {
  tombolWA.addEventListener('click', function() {
    alert('Kamu akan diarahkan ke WhatsApp. Siap pesan? 🍪');
  });
}

// Tampilkan tahun sekarang di footer otomatis
var footer = document.querySelector('.footer');
if (footer) {
  var tahunSekarang = new Date().getFullYear();
  footer.innerHTML = footer.innerHTML.replace('2024', tahunSekarang);
}
