const video = document.getElementById("floatingVideo");
const triggerPoint = video.offsetTop;

window.addEventListener("scroll", () => {

  if(window.scrollY > triggerPoint + 200){
    video.classList.add("video-floating");
  }else{
    video.classList.remove("video-floating");
  }

});

const row = document.querySelector(".testimonial-row");

setInterval(()=>{
  row.scrollBy({left:380, behavior:"smooth"});
},3000);

const steps = document.querySelectorAll(".step");

steps.forEach(step=>{
  step.addEventListener("click",()=>{

    steps.forEach(s=>s.classList.remove("active")); // remove old
    step.classList.add("active");                   // add new

  });
});

