document.addEventListener('DOMContentLoaded', function() {
    // Navigasi scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Simulasi klik Wishlist
    const hearts = document.querySelectorAll('.wishlist-btn i');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.classList.toggle('fa-solid');
            this.classList.toggle('fa-regular');
            this.classList.toggle('text-danger');
        });
    });
});

function scrollCategory(direction) {
    const container = document.getElementById('category-container');
    const scrollAmount = 300; // Jarak geser dalam pixel

    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Opsional: Menambahkan klik pada lingkaran kategori
document.querySelectorAll('.category-circle').forEach(item => {
    item.addEventListener('click', () => {
        const categoryName = item.nextElementSibling.innerText;
        alert('Membuka kategori: ' + categoryName);
    });
});

// Tunggu sampai semua elemen HTML dimuat
document.addEventListener('DOMContentLoaded', function() {

    // 1. Aksi Free Shipping
    document.getElementById('feat-shipping').addEventListener('click', () => {
        alert("Informasi Pengiriman: Pesanan Anda akan dikirim dalam 2-3 hari kerja secara gratis jika belanja di atas $75.");
    });

    // 2. Aksi Easy Returns
    document.getElementById('feat-returns').addEventListener('click', () => {
        alert("Kebijakan Pengembalian: Anda dapat menukar barang dalam 30 hari selama tag masih ada dan kondisi barang baru.");
    });

    // 3. Aksi Secure Payment
    document.getElementById('feat-payment').addEventListener('click', () => {
        alert("Pembayaran Aman: Kami mendukung kartu kredit, debit, dan e-wallet dengan enkripsi SSL 256-bit.");
    });

    // 4. Aksi Stores Near You (Pencarian Lokasi)
    document.getElementById('feat-stores').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    // Membuka Google Maps dengan koordinat user dan mencari toko fashion terdekat
                    window.open(`https://www.google.com/maps/search/fashion+store/@${lat},${lon},15z`, '_blank');
                },
                () => {
                    // Jika user menolak izin lokasi, buka peta dengan pencarian umum
                    window.open('https://www.google.com/maps/search/C-Style+Fashion+Store', '_blank');
                }
            );
        } else {
            alert("Maaf, browser Anda tidak mendukung fitur lokasi.");
        }
    });

});

// Logika Navbar mengecil saat scroll
      window.onscroll = function() {
        var header = document.getElementById("mainHeader");
        if (window.pageYOffset > 80) {
          header.classList.add("scrolled");
        } 
        else {
          header.classList.remove("scrolled");
        }
      };

