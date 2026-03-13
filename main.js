"use strict";

const desktopList = document.querySelectorAll(".desktop-ul li");
const prevBtns = document.querySelectorAll(".previous-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const hero3 = document.querySelector(".hero3");

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

function imgDisplay(item1, item2, item3) {
  item1.classList.add("toLeft");
  item2.classList.remove("hide");
  item3.classList.add("hero-container");
}

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("prevBtn1")) {
      imgDisplay(hero1, hero2, hero2);
    } else if (btn.classList.contains("prevBtn2")) {
      imgDisplay(hero2, hero3, hero3);
    }
  });
});
