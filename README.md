# 🎨 SVG Icon Picker & Colorizer

Aplikasi generator dan penyesuai ikon SVG (*SVG Icon Picker & Colorizer*) interaktif berbasis JavaScript untuk memilih ikon web, mengubah warna dan ukurannya secara *real-time*, serta menyalin kode markup SVG satu klik.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Dynamic SVG String Generation:**
   Membentuk blok string elemen `<svg>` secara terstruktur melalui manipulasi properti `fill`, `width`, `height`, dan `path`.
2. **Array Filtering & Search Handling:**
   Menyaring koleksi data objek ikon (`iconsData`) menggunakan pencocokan kata kunci pencarian (*keyword tags*) secara responsif.
3. **Clipboard API & Textarea Selection:**
   Menggunakan atribut `.select()` dan metode `navigator.clipboard.writeText()` untuk memberikan kemudahan penyalinan kode markup HTML/SVG.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Control bar, pratinjau ikon aktif, grid galeri ikon, & textarea kode
├── style.css        # Desain Neobrutalism biru-pop, framing monokrom pratinjau, & layout
└── script.js        # Logika array ikon SVG, filter pencarian, generator SVG, & DOM
