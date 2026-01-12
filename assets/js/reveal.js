/* =========================
   PREMIUM REVEAL MOTION
   SAFE / NO HTML CHANGE
========================= */

(() => {

  const style = document.createElement("style");
  style.textContent = `
    .__reveal{
      opacity:0;
      transform:translateY(40px);
      filter:blur(6px);
      transition:
        opacity 1.1s cubic-bezier(.16,1,.3,1),
        transform 1.1s cubic-bezier(.16,1,.3,1),
        filter 1.1s cubic-bezier(.16,1,.3,1);
      will-change:opacity,transform,filter;
    }

    .__reveal.__show{
      opacity:1;
      transform:translateY(0);
      filter:blur(0);
    }
  `;
  document.head.appendChild(style);

  document.addEventListener("DOMContentLoaded", () => {

    const targets = [
      ".section-head",
      ".card",
      ".about",
      ".about-grid > div"
    ];

    const els = document.querySelectorAll(targets.join(","));
    if(!els.length) return;

    els.forEach(el => el.classList.add("__reveal"));

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add("__show");
          io.unobserve(e.target);
        }
      });
    },{
      threshold:0.18,
      rootMargin:"0px 0px -120px 0px"
    });

    els.forEach(el => io.observe(el));
  });

})();
