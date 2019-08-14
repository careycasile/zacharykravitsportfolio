//
//
//
// PAGE TAB TITLE
window.onload = event => {
  function addPageTitle() {
    return (document.title = "Zachary Allen Kravits");
  }
  function playAnimation() {
    return line1;
  }
  addPageTitle();
};

//
//
//
// NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mobileOptions = document.getElementById("mobileoptions");

menuToggle.addEventListener("click", function() {
  if (mobileOptions.style.display == "none") {
    mobileToggleOpen("Close");
  } else {
    mobileToggleClose("Menu");
  }
});

function mobileToggleOpen(displayClose) {
  document.getElementById("mobileoptions").style.display = "block";
  document.getElementById("body-wrapper").style.display = "none";
  document.getElementById("menu-toggle").innerHTML = displayClose;
}

function mobileToggleClose(displayOpen) {
  document.getElementById("mobileoptions").style.display = "none";
  document.getElementById("body-wrapper").style.display = "block";
  document.getElementById("menu-toggle").innerHTML = displayOpen;
}

// // Edge Case: Show content if user opened mobile menu then resized to show desktop view

window.addEventListener("resize", function() {
  if (window.innerWidth > 545) {
    document.getElementById("body-wrapper").style.display = "block";
    mobileToggleClose("Menu");
  }
});

//
//
//
// MODAL

const modalBackground = document.getElementById("bg-modal");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const blur = document.getElementById("blur");

// // Clicking the card
card.addEventListener("click", function() {
  modalBackground.style.display = "flex";
  blur.setAttribute("class", "blur");
});

closeButton.addEventListener("click", function() {
  modalBackground.style.display = "none";
  blur.removeAttribute("class", "blur");
});

//
//
//
// ANIMATIONS
// import anime from "animejs/lib/anime.es.js";

// const anime = require("anime");

// // // Peace SVG
// const line1 = anime({
//   targets: ".cls-1",
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "easeInOutSine",
//   duration: 1500,
//   direction: "alternate",
//   loop: true
// });
