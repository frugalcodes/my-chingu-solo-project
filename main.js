//  Smooth scrolling

const scrollElems = document.querySelectorAll('.nav-link');

for (let i = 0; i < scrollElems.length; i++) {
  const elem = scrollElems[i];

  elem.addEventListener('click', function (e) {
    e.preventDefault();

 
    const scrollElemId = e.target.href.split('#')[1];


    const scrollEndElem = document.getElementById(scrollElemId);


    const anim = requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const duration = 1400;
      const start = stamp;

      const startScrollOffset = window.pageYOffset;
      const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;

      scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
    })
  })
}


const easeInCubic = function (t) { return t*t*t }
 
const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
   const runtime = currentTime - startTime;
   let progress = runtime / duration;
   
   progress = Math.min(progress, 1);
   
   const ease = easeInCubic(progress);
   
   window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
if(runtime < duration){
     requestAnimationFrame((timestamp) => {
       const currentTime = timestamp || new Date().getTime();
       scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
     })
   }
 }

// parallax effect for background image



const parallax = document.getElementById(".section01");

window.addEventListener("scroll", function(){

  let offset = window.pageYOffset;

  section01.style.backgroundPositionY = offset * 0.7 + "px";
})

const parallax1 = document.getElementById(".section03");

window.addEventListener("scroll", function(){

  let offset = window.pageYOffset;

  section03.style.backgroundPositionY = (offset - section03.offsetTop) * 0.7 + "px";
})

const parallax2 = document.getElementById(".section05");

window.addEventListener("scroll", function(){

  let offset = window.pageYOffset;

  section05.style.backgroundPositionY = (offset - section05.offsetTop) * 0.7 + "px";
})
