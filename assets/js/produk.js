/* =========================
   DATA PRODUK
========================= */
const produkList = [
  {
    id: 1,
    nama: "SEWA BOT MURAH & BERKUALITAS",
    harga: "mulai dari Rp 1000",
    img: "assets/img/bot1.png",
    ringkas: "Bot WhatsApp siap pakai untuk store & personal",
    fitur: [
      "Auto Reply and fast respon",
      "banyak fitur yang menarik",
      "bisa buat jaga group",
      "harga frendly ga bikin sekarat",
      "ada fitur membuat sticker dll"
    ],
    wa: "Script Bot WhatsApp"
  },
  {
    id: 2,
    nama: "SCRIPT BOT ALICE",
    harga: "Rp 50.000",
    img: "assets/img/bot2.png",
    ringkas: "SCRIPT BOT WHATSAPP PREMIUM",
    fitur: [
      "Performa Tinggi",
      "UI NYAMAN DI MATA",
      "Anti Delay",
      "DILENGKAPI APIKEY PREMIUM",
      "FITUR LENGKAP",
      "NO ENC, BEBAS EDIT",
      "RAMAH DEV, GA RIBET RENAME",
      "UPDATE SETIAP TANGGAL 10",
      "FREE UPDATE",
    ],
    wa: "Bot WhatsApp Premium"
  },
  {
    id: 3,
    nama: "JASA RENAME SCRIPT",
    harga: "Rp 10.000",
    img: "assets/img/bot3.png",
    ringkas: "RENAME SAMPAI SIAP PAKAI",
    fitur: [
      "RENAME MULAI DARI NAMA SAMPAI CONNECT",
      "LANSUNG SIAP PAKAI"
    ],
    wa: "Landing Page Store"
  }
];

/* =========================
   ELEMENT
========================= */
const productsEl = document.getElementById("products");
const modal = document.getElementById("modal");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");
const mBtn = document.getElementById("mBtn");

/* =========================
   RENDER PRODUK
========================= */
function renderProducts() {
  productsEl.innerHTML = "";

  produkList.forEach(p => {
    const card = document.createElement("div");
    card.className = "card reveal";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.nama}">
      <div class="info">
        <h3>${p.nama}</h3>
        <small>${p.ringkas}</small>
        <div class="price">${p.harga}</div>
      </div>
      <div class="info-btn" title="Detail fitur">i</div>
    `;

    /* CARD → INFO RINGKAS */
    card.addEventListener("click", () => openRingkasModal(p));

    /* INFO ICON → DETAIL FITUR */
    const infoBtn = card.querySelector(".info-btn");
    infoBtn.addEventListener("click", e => {
      e.stopPropagation();
      openDetailModal(p);
    });

    productsEl.appendChild(card);
  });
}

renderProducts();

/* =========================
   MODAL RINGKAS (CARD)
========================= */
function openRingkasModal(p) {
  mTitle.textContent = p.nama;
  mDesc.innerHTML = `
    <p style="line-height:1.7">
      ${p.ringkas}
    </p>
    <p style="margin-top:10px">
      <strong>Harga:</strong> ${p.harga}
    </p>
  `;

  mBtn.href =
    "https://wa.me/628xxxxxxxxx?text=" +
    encodeURIComponent(
      `Halo, saya ingin order ${p.wa}\nHarga: ${p.harga}`
    );

  modal.classList.add("show");
}

/* =========================
   MODAL DETAIL (INFO ICON)
========================= */
function openDetailModal(p) {
  mTitle.textContent = `Detail Fitur ${p.nama}`;

  mDesc.innerHTML = `
    <ul style="padding-left:16px;line-height:1.8">
      ${p.fitur.map(f => `<li>${f}</li>`).join("")}
    </ul>
  `;

  mBtn.href =
    "https://wa.me/628xxxxxxxxx?text=" +
    encodeURIComponent(
      `Halo, saya ingin tanya detail fitur ${p.wa}`
    );

  modal.classList.add("show");
}

/* =========================
   CLOSE MODAL
========================= */
modal.addEventListener("click", e => {
  if (e.target === modal || e.target.classList.contains("close")) {
    modal.classList.remove("show");
  }
});

/* =========================
   MENU TOGGLE
========================= */
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.onclick = () => sideMenu.classList.add("show");
closeMenu.onclick = () => sideMenu.classList.remove("show");

console.log("Produk system ready ✔");
