const enter=document.getElementById('enter'),main=document.getElementById('main'),audio=document.getElementById('audio'),picker=document.getElementById('songPicker'),surprise=document.getElementById('surpriseBtn'),final=document.getElementById('final');
function hearts(){const e=document.createElement('div');e.className='particles';e.textContent=['❤️','💕','🌹','✨','🌸'][Math.floor(Math.random()*5)];e.style.left=Math.random()*100+'vw';e.style.bottom='-30px';e.style.animationDuration=(4+Math.random()*4)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),8000)}setInterval(hearts,700);
enter.onclick=()=>{main.classList.remove('hidden');document.getElementById('main').scrollIntoView({behavior:'smooth'});audio.play().catch(()=>{})};
picker.onchange=()=>{const f=picker.files[0];if(f){audio.src=URL.createObjectURL(f);audio.play()}};
surprise.onclick=()=>{final.classList.remove('hidden');final.scrollIntoView({behavior:'smooth'});for(let i=0;i<25;i++)setTimeout(hearts,i*100)};


// Memory slideshow
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
const prevSlide=document.getElementById('prevSlide');
const nextSlide=document.getElementById('nextSlide');
let currentSlide=0;
let slideTimer;

function showSlide(index){
  if(!slides.length) return;
  currentSlide=(index+slides.length)%slides.length;
  slides.forEach((slide,i)=>slide.classList.toggle('active',i===currentSlide));
  dots.forEach((dot,i)=>dot.classList.toggle('active',i===currentSlide));
}

function nextMemorySlide(){
  showSlide(currentSlide+1);
}

function startSlideshow(){
  clearInterval(slideTimer);
  slideTimer=setInterval(nextMemorySlide,5000);
}

if(slides.length){
  prevSlide.onclick=()=>{showSlide(currentSlide-1);startSlideshow()};
  nextSlide.onclick=()=>{showSlide(currentSlide+1);startSlideshow()};
  dots.forEach(dot=>{
    dot.onclick=()=>{
      showSlide(Number(dot.dataset.slide));
      startSlideshow();
    };
  });
  showSlide(0);
  startSlideshow();
}
