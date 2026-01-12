/* =========================
   TYPING SYSTEM (SAFE)
========================= */
document.addEventListener("DOMContentLoaded", () => {

  heroTyping();
  singleTyping();
});

/* =========================
   HERO RANDOM TYPING
========================= */
function heroTyping(){
  const el = document.querySelector(".typing-text");
  if (!el) return;

  const texts = [
    "Kualitas Premium & Harga Terjangkau",
    "Bot WhatsApp Fast & Stabil",
    "Automation Premium Siap Pakai",
    "Support Responsif 24 Jam"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  el.style.whiteSpace = "nowrap";
  el.style.borderRight = "2px solid rgba(255,255,255,.5)";

  function typeLoop(){
    const current = texts[textIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        setTimeout(() => deleting = true, 1600);
      }
    } else {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeLoop, deleting ? 40 : 70);
  }

  typeLoop();
}

/* =========================
   SINGLE TYPING (data-typing)
========================= */
function singleTyping(){
  const el = document.querySelector("[data-typing]");
  if (!el) return;

  const text = el.getAttribute("data-typing");
  let i = 0;

  el.textContent = "";
  el.style.whiteSpace = "nowrap";
  el.style.borderRight = "2px solid rgba(255,255,255,.5)";

  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
      el.style.borderRight = "none";
    }
  }, 60);
}
