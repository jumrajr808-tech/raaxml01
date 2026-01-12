const DEV_USER = "dev";
const DEV_PASS = "raa123";

document.addEventListener("DOMContentLoaded", () => {
  const devMenu = document.getElementById("devMenu");
  const devBtn = document.getElementById("devBtn");

  // tampilkan tombol login kalau belum login
  if (localStorage.getItem("dev_mode") !== "true") {
    devMenu.style.display = "block";
    devBtn.textContent = "Dev Login";
  } else {
    devMenu.style.display = "block";
    devBtn.textContent = "Dev Logout";
  }

  devBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (localStorage.getItem("dev_mode") === "true") {
      localStorage.removeItem("dev_mode");
      alert("Dev Mode OFF");
      location.reload();
    } else {
      const user = prompt("DEV USERNAME:");
      const pass = prompt("DEV PASSWORD:");

      if (user === DEV_USER && pass === DEV_PASS) {
        localStorage.setItem("dev_mode", "true");
        alert("Dev Mode ON");
        location.reload();
      } else {
        alert("Akses ditolak");
      }
    }
  });
});
