"use strict";

const desktopList = document.querySelectorAll(".desktop-ul li");
const prevBtns = document.querySelectorAll(".previous-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const hero = document.querySelector(".section__hero");
const slides = document.querySelectorAll(".hero-container");

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

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
  hero.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function addTransition() {
  hero.classList.add("slideTransition");
}
function removeTransition() {
  hero.classList.remove("slideTransition");
}

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    if (btn.classList.contains("nextBtn4")) {
      removeTransition();
    } else {
      addTransition();
    }
    updateSlidePosition();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    if (btn.classList.contains("prevBtn1")) {
      removeTransition();
    } else {
      addTransition();
    }
    updateSlidePosition();
  });
});
