// --- DATA KOLEKSI IKON SVG (Path Standard Icons) ---
const iconsData = [
    {
        id: "star",
        name: "Star Icon",
        tags: ["star", "bintang", "favorite", "rating"],
        path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    },
    {
        id: "heart",
        name: "Heart Icon",
        tags: ["heart", "hati", "love", "suka"],
        path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    },
    {
        id: "bookmark",
        name: "Bookmark Icon",
        tags: ["bookmark", "simpan", "tag", "save"],
        path: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
    },
    {
        id: "bell",
        name: "Bell Icon",
        tags: ["bell", "lonceng", "notification", "notifikasi"],
        path: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
    },
    {
        id: "gear",
        name: "Settings Icon",
        tags: ["settings", "gear", "pengaturan"],
        path: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    },
    {
        id: "home",
        name: "Home Icon",
        tags: ["home", "rumah", "beranda"],
        path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    }
];

// --- STATE APLIKASI ---
let selectedIcon = iconsData[0];

// --- AMBIL ELEMEN DOM ---
const colorPicker = document.getElementById("color-picker");
const sizeSlider = document.getElementById("size-slider");
const sizeValue = document.getElementById("size-value");
const searchInput = document.getElementById("search-input");

const previewIconContainer = document.getElementById("preview-icon-container");
const activeIconName = document.getElementById("active-icon-name");
const activeIconDetails = document.getElementById("active-icon-details");

const iconGrid = document.getElementById("icon-grid");
const svgCodeOutput = document.getElementById("svg-code-output");
const btnCopy = document.getElementById("btn-copy");
const toast = document.getElementById("toast");

// --- 1. RENDER KOLEKSI IKON ---
function renderIconGrid(filteredIcons) {
    iconGrid.innerHTML = "";
    filteredIcons.forEach((icon) => {
        const card = document.createElement("div");
        card.className = `icon-card ${icon.id === selectedIcon.id ? "active" : ""}`;
        card.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0f172a">
                <path d="${icon.path}"></path>
            </svg>
        `;

        card.addEventListener("click", () => {
            selectedIcon = icon;
            document.querySelectorAll(".icon-card").forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
            updatePreview();
        });

        iconGrid.appendChild(card);
    });
}

// --- 2. UPDATE PRATINJAU & KODE SVG ---
function updatePreview() {
    const color = colorPicker.value;
    const size = sizeSlider.value;

    sizeValue.textContent = `${size}px`;
    activeIconName.textContent = selectedIcon.name;
    activeIconDetails.textContent = `Size: ${size}px | Color: ${color}`;

    // Generate String Kode SVG
    const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">\n  <path d="${selectedIcon.path}"/>\n</svg>`;

    previewIconContainer.innerHTML = svgString;
    svgCodeOutput.value = svgString;
}

// --- 3. FILTER PENCARIAN IKON ---
searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = iconsData.filter((icon) =>
        icon.name.toLowerCase().includes(query) ||
        icon.tags.some((tag) => tag.includes(query))
    );
    renderIconGrid(filtered);
});

// --- 4. SALIN KODE SVG ---
btnCopy.addEventListener("click", () => {
    svgCodeOutput.select();
    navigator.clipboard.writeText(svgCodeOutput.value).then(() => {
        showToast("Kode SVG berhasil disalin! 🚀");
    });
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// --- EVENT LISTENERS KONTROL ---
colorPicker.addEventListener("input", updatePreview);
sizeSlider.addEventListener("input", updatePreview);

// Inisialisasi awal
renderIconGrid(iconsData);
updatePreview();
