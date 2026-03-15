"use strict";

const desktopList = document.querySelectorAll(".desktop-ul li");
const prevBtns = document.querySelectorAll(".previous-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const hero = document.querySelector(".section__hero");
let slides = document.querySelectorAll(".hero-container");

// === navigation hover ===

desktopList.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    menu.lastElementChild.classList.add("opacity");
  });
  menu.addEventListener("mouseleave", () => {
    menu.lastElementChild.classList.remove("opacity");
  });
});

// === gallery display control ===

let currentSlide = 1;
let totalSlides = slides.length;
transform();
addTransition();

function transform() {
  hero.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function navigate(index, withTransition = true) {
  if (withTransition) addTransition();
  else removeTransition();
  currentSlide = index;
  transform();
}

function nextSlide() {
  navigate(currentSlide + 1, true);
}

function previousSlide() {
  navigate(currentSlide - 1, true);
}

function removeTransition() {
  hero.classList.remove("slideTransition");
}

function addTransition() {
  hero.classList.add("slideTransition");
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", nextSlide);
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", previousSlide);
});

// === keyboard control ===

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    previousSlide();
  }
});

// === swipe control ===

let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function swipe() {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      console.log('right');
      nextSlide();
    } else {
      previousSlide();
    }
  }
}

hero.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, false);

hero.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  swipe();
}, false)

// === transition control ===

hero.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".hero-container");
  totalSlides = slides.length;

  if (currentSlide === totalSlides - 1) {
    removeTransition();
    currentSlide = 1;
    transform();
    setTimeout(addTransition, 20);
    return;
  }

  if (currentSlide === 0) {
    removeTransition();
    currentSlide = totalSlides - 2;
    transform();
    setTimeout(addTransition, 20);
    return;
  }

  addTransition();
});
