/* LOADING */
const loader = document.getElementById("loader");
const main = document.getElementById("main");

setTimeout(()=>{
  loader.style.opacity = "0";
  setTimeout(()=>{
    loader.style.display = "none";
    main.style.opacity = "1";
    startTyping();
  },600);
},1600);

/* TYPING EFFECT */
const titleText = "RAAXML01";
const subText = "Premium Digital Store";

const tTitle = document.getElementById("typingTitle");
const tSub = document.getElementById("typingSub");

function type(el, text, speed, cb){
  let i = 0;
  const int = setInterval(()=>{
    el.textContent += text[i];
    i++;
    if(i >= text.length){
      clearInterval(int);
      cb && cb();
    }
  }, speed);
}

function startTyping(){
  type(tTitle, titleText, 120, ()=>{
    type(tSub, subText, 70);
  });
}

/* STAR PARTICLE */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize",resize);

const stars = Array.from({length:90},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*1.4,
  s:Math.random()*0.4+0.2
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,255,255,.8)";
  stars.forEach(star=>{
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
    ctx.fill();
    star.y += star.s;
    if(star.y > canvas.height){
      star.y = 0;
      star.x = Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();
