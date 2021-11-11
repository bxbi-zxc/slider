let container = document.getElementById("container").offsetWidth;
let btnNext = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
let sliders = [];
let btnBack = document.getElementById("back");

for (let i = 0; i < slides.length; ++i) {
    sliders[i] = slides[i].querySelector('img');
    slides[i].remove() 
}

let step = 0;
let offset = 0;

function drow() {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(sliders[step])
    slide.style.left = offset * container + "px"
    document.querySelector(".slider").appendChild(slide)
    
    if (step + 1 == slides.length) {
        step = 0;
    } else {
        step++
    }
    offset = 1
}
drow(); drow();

function left () {
    btnNext.removeEventListener('click', left)
    let slides2 = document.querySelectorAll(".slide")
    let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
      slides2 [i].style.left = offset2 * container - container + "px"
      offset2++;
  }

setTimeout(function() {
    slides2[0].remove()
    drow()
    btnNext.addEventListener("click", left)
}, 500)

}
btnNext.addEventListener("click", left);  

////////////////////////////////////////////////////////////////////////////////////////

for (let i = 0; i < slides.length; ++i) {
    sliders[i] = slides[i].querySelector('img');
    slides[i].remove() 
}


drow(); drow();
function drow() {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(sliders[step])
    slide.style.right = offset * container + "px"
    document.querySelector(".slider").appendChild(slide)
    
    if (step + 1 == slides.length) {
        step = 0;
    } else {
        step++
    }
    offset = 1
}

function right () {
    btnBack.removeEventListener('click', right)
    let slides3 = document.querySelectorAll(".slide")
    let offset3 = 0;
  for (let i = 0; i < slides3.length; i++) {
      slides3 [i].style.right = offset3 * container - container + "px"
      offset3++;
  }

  setTimeout(function() {
    slides3[0].remove()
    drow()
    btnBack.addEventListener("click", right)
}, 500)

}
btnBack.addEventListener("click", right);  