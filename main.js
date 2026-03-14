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

// === transitionend?? ===

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
    if (btn.classList.contains("nextBtn4")) {
      removeTransition();
    } else {
      addTransition();
    }
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

// === keyboard control ===

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
    if (currentSlide == totalSlides - 1) {
      removeTransition();
    } else {
      addTransition();
    }
  } else if (e.key === "ArrowLeft") {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    if (currentSlide == totalSlides - 1) {
      removeTransition();
    } else {
      addTransition();
    }
  }
});
