"use strict";

const desktopList = document.querySelectorAll(".desktop-ul li");
const mobileList = document.querySelectorAll(".mobile-ul li");
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

mobileList.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    menu.lastElementChild.classList.add("black");
  });
  menu.addEventListener("mouseleave", () => {
    menu.lastElementChild.classList.remove("black");
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

nextBtns[4].addEventListener("click", () => {
  removeTransition();
  currentSlide = 1;
  transform();
  setTimeout(addTransition, 20);
});

prevBtns[0].addEventListener("click", () => {
  removeTransition();
  currentSlide = totalSlides - 2;
  transform();
  setTimeout(addTransition, 20);
});

// === keyboard control ===

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (currentSlide === totalSlides - 1) {
      removeTransition();
      currentSlide = 1;
      transform();
      setTimeout(addTransition, 20);
    } else {
      nextSlide();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentSlide === 0) {
      removeTransition();
      currentSlide = totalSlides - 2;
      transform();
      setTimeout(addTransition, 20);
    } else {
      previousSlide();
    }
  }
});

// === mobile menu control ===

const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuPanel = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");

function displayFlex(item) {
  item.classList.remove("hide");
  item.classList.add("flex");
}

function removeHide(item) {
  item.classList.remove("hide");
}

function addHide(item) {
  item.classList.add("hide");
}

hamburgerIcon.addEventListener("click", () => {
  displayFlex(menuPanel);
  removeHide(overlay);
  addHide(logo);
});

closeBtn.addEventListener("click", () => {
  addHide(menuPanel);
  addHide(overlay);
  removeHide(logo);
});

overlay.addEventListener("click", () => {
  addHide(menuPanel);
  addHide(overlay);
  removeHide(logo);
});
