/**
 * EvEvDigital Auto-Hydration & WhatsApp Engine
 * Sektor 08: Penjahit Busana, Vermak Express & Konveksi Seragam (evevtayler)
 */

const PROFIL_USAHA = {
  nama: "evevtayler",
  brandLengkap: "evevtayler — Penjahit, Vermak Kilat & Konveksi Seragam",
  sektor: "Penjahit Busana, Vermak Express & Konveksi Seragam",
  tagline: "Vermak Kilat 15–30 Menit, Jahit Jas & Kebaya Bespoke, hingga Konveksi Seragam Bergaransi",
  deskripsi:
    "Workshop penjahit profesional di Jakarta Timur yang melayani vermak kilat bisa ditunggu (potong celana, kecilkan pinggang, ganti resleting YKK), jahit kustom jas pria & kebaya modern, serta konveksi seragam kantor dan komunitas bergaransi pas di badan.",
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "kontak@evevdigital.com",
  alamat: "Jl. Otista Raya No. 88, Bidara Cina, Jatinegara, Jakarta Timur 13330",
  mapsUrl: "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88,+Jatinegara,+Jakarta+Timur",
  jamOperasional: "Buka Setiap Hari: 08.00 – 21.00 WIB",
  areaLayanan: "Melayani datang langsung ke workshop, jemput-antar area Jabodetabek & pengiriman konveksi seluruh Indonesia",
  garansi: "Garansi Pas di Badan & Gratis Revisi Vermak 7 Hari",
  copyright: "© 2026 evevtayler. Hak Cipta Dilindungi.",
  powered: "EvEvDigital",
  layanan: [
    {
      id: "vermak-potong-celana",
      badge: "Bisa Ditunggu",
      nama: "Potong Celana Jeans & Bahan",
      harga: "Rp 15.000",
      hargaAngka: 15000,
      pengerjaan: "15 – 30 Menit",
      rincian: "Potong panjang celana jeans (tetap pertahankan keliman asli/chain stitch) maupun celana bahan kantor dengan hasil super rapi."
    },
    {
      id: "kecilkan-pinggang",
      badge: "Paling Laris",
      nama: "Kecilkan Pinggang, Paha & Kaki",
      harga: "Rp 25.000",
      hargaAngka: 25000,
      pengerjaan: "30 – 45 Menit",
      rincian: "Sesuaikan ukuran pinggang longgar atau ubah potongan menjadi slim fit agar celana dan rok jatuh proporsional saat dipakai."
    },
    {
      id: "ganti-resleting-ykk",
      badge: "Original YKK",
      nama: "Ganti Resleting YKK Celana & Jaket",
      harga: "Rp 20.000",
      hargaAngka: 20000,
      pengerjaan: "20 – 30 Menit",
      rincian: "Penggantian resleting macet atau rusak menggunakan kepala & rel YKK asli yang kuat dan tidak mudah selip."
    },
    {
      id: "permak-gamis-dress",
      badge: "Jahitan Halus",
      nama: "Permak Gamis, Dress & Kemeja",
      harga: "Rp 35.000",
      hargaAngka: 35000,
      pengerjaan: "1 Hari / Express",
      rincian: "Potong bawah, kecilkan lingkar dada/lengan, atau rapikan bahu untuk gamis brukat, dress pesta, kemeja kerja, dan batik lapis furing."
    },
    {
      id: "jahit-jas-kebaya",
      badge: "Bespoke Fit",
      nama: "Jahit Kustom Jas Pria & Kebaya Modern",
      harga: "Mulai Rp 350.000",
      hargaAngka: 350000,
      pengerjaan: "4 – 7 Hari",
      rincian: "Pembuatan pola khusus sesuai ukuran tubuh untuk jas pengantin, blazer eksekutif, kebaya wisuda, dan gaun pesta termasuk sesi fitting."
    },
    {
      id: "konveksi-seragam",
      badge: "Harga Grosir",
      nama: "Konveksi Seragam Kantor & Komunitas",
      harga: "Mulai Rp 75.000/pcs",
      hargaAngka: 75000,
      pengerjaan: "7 – 14 Hari",
      rincian: "Produksi kemeja PDH/PDL, polo shirt bordir komputer, jaket bomber, dan wearpack safety minimal 12 pcs dengan bahan Drill/Lacoste pilihan."
    }
  ],
  buatPesanWA: function (layanan, harga, estimasi) {
    var baris = [
      "Halo " + this.nama + ", saya ingin konsultasi / booking layanan jahit & vermak:",
      ""
    ];
    if (layanan) {
      baris.push("• Layanan : " + layanan);
    }
    if (harga) {
      baris.push("• Estimasi Tarif : " + harga);
    }
    if (estimasi) {
      baris.push("• Estimasi Pengerjaan : " + estimasi);
    }
    baris.push("• Jumlah Pakaian : 1 pcs");
    baris.push("• Rencana Datang / Jemput : ");
    baris.push("");
    baris.push("Mohon info antrean workshop hari ini ya. Terima kasih!");
    return baris.join("\n");
  },
  getWhatsAppUrl: function (layanan, harga, estimasi) {
    var teks = layanan
      ? this.buatPesanWA(layanan, harga, estimasi)
      : "Halo " + this.nama + ", saya ingin konsultasi layanan vermak kilat, jahit kustom, atau konveksi seragam.";
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(teks);
  }
};

window.PROFIL_USAHA = PROFIL_USAHA;

document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto-Hydrate elemen dengan atribut data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (typeof PROFIL_USAHA[key] === "string") {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Auto-Hydrate tombol & tautan WA berbasis layanan
  document.querySelectorAll("[data-wa-layanan]").forEach(function (link) {
    var namaLayanan = link.getAttribute("data-wa-layanan");
    var hargaLayanan = link.getAttribute("data-wa-harga") || "";
    var estLayanan = link.getAttribute("data-wa-estimasi") || "";
    link.setAttribute("href", PROFIL_USAHA.getWhatsAppUrl(namaLayanan, hargaLayanan, estLayanan));
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 3. Auto-Hydrate tautan WA umum
  document.querySelectorAll("[data-wa-umum]").forEach(function (link) {
    var customMsg = link.getAttribute("data-wa-umum");
    var url = customMsg
      ? "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(customMsg)
      : PROFIL_USAHA.getWhatsAppUrl();
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // 4. Render otomatis daftar tarif lengkap jika kontainer tersedia
  var tarifContainer = document.getElementById("daftar-tarif-evevtayler");
  if (tarifContainer && Array.isArray(PROFIL_USAHA.layanan)) {
    tarifContainer.innerHTML = PROFIL_USAHA.layanan
      .map(function (item) {
        var waHref = PROFIL_USAHA.getWhatsAppUrl(item.nama, item.harga, item.pengerjaan);
        return (
          '<div class="col-md-6 col-lg-4 mb-4">' +
            '<div class="evev-tarif-card">' +
              '<div class="evev-tarif-card__head">' +
                '<span class="evev-tarif-card__badge">' + item.badge + '</span>' +
                '<span class="evev-tarif-card__time"><i class="far fa-clock"></i> ' + item.pengerjaan + '</span>' +
              '</div>' +
              '<h4 class="evev-tarif-card__title">' + item.nama + '</h4>' +
              '<p class="evev-tarif-card__desc">' + item.rincian + '</p>' +
              '<div class="evev-tarif-card__foot">' +
                '<div>' +
                  '<span class="evev-tarif-card__label">Estimasi Tarif</span>' +
                  '<div class="evev-tarif-card__price">' + item.harga + '</div>' +
                '</div>' +
                '<a href="' + waHref + '" target="_blank" rel="noopener noreferrer" class="evev-tarif-card__btn">' +
                  '<i class="fab fa-whatsapp"></i> Pesan WA' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      })
      .join("");
  }

  // 5. Intercept form untuk routing otomatis ke WhatsApp
  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var searchInput = form.querySelector('input[type="search"], input[name="search-input"]');
      if (searchInput) {
        var query = searchInput.value.trim();
        var searchPopup = document.querySelector(".search-popup");
        if (searchPopup) {
          searchPopup.classList.remove("popup-visible");
        }
        if (query) {
          var waUrlSearch = PROFIL_USAHA.getWhatsAppUrl(query, "", "Tanya estimasi biaya & waktu pengerjaan");
          window.open(waUrlSearch, "_blank", "noopener,noreferrer");
        } else {
          var targetSec = document.querySelector("#layanan");
          if (targetSec) targetSec.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      var inputs = form.querySelectorAll("input, textarea, select");
      var detail = [];
      inputs.forEach(function (input) {
        var name = input.getAttribute("data-label") || input.name || input.placeholder || "Keterangan";
        var val = input.value ? input.value.trim() : "";
        if (val && input.type !== "submit" && input.type !== "button") {
          detail.push("• " + name + " : " + val);
        }
      });
      var pesan =
        "Halo " + PROFIL_USAHA.nama + ", saya ingin konsultasi / order jahit & vermak pakaian:\n\n" +
        (detail.length ? detail.join("\n") : "• Mohon info estimasi biaya & jadwal pengerjaan.");
      window.open(
        "https://wa.me/" + PROFIL_USAHA.whatsapp + "?text=" + encodeURIComponent(pesan),
        "_blank",
        "noopener,noreferrer"
      );
    });
  });

  // 6. Smooth scroll untuk tautan internal
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
