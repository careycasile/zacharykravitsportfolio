//
//
//
// PAGE TAB TITLE
window.onload = event => {
  function addPageTitle() {
    return (document.title = "Zachary Allen Kravits");
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
// WORK PAGE

const card = document.getElementById("card");
const outsideModal = document.getElementById("behind-modal");
const modal = document.getElementById("modal-container");
const closeButton = document.getElementById("close-button");
const blur = document.getElementById("blur");

// // Clicking the card
card.addEventListener("click", function() {
  modal.style.display = "flex";
  modal.style.display = "-webkit-flex";
  outsideModal.style.display = "block";
  blur.setAttribute("class", "blur");
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
  outsideModal.style.display = "none";
  blur.removeAttribute("class", "blur");
});

outsideModal.addEventListener("click", function() {
  modal.style.display = "none";
  outsideModal.style.display = "none";
  blur.removeAttribute("class", "blur");
});

// // Create links for a modal
function createLinks() {
  let sections = document.querySelectorAll("#projectSection");
  let links = [];

  for (var x = 0; x < sections.length; x++) {
    links.push(sections[x].innerHTML);
  }
  for (var link = 0; link < links.length; link++) {
    const newLink = document.createElement("LI");
    newLink.innerHTML = links[link];
    document.getElementById("scroll-links").appendChild(newLink);
    newLink.setAttribute("id", links[link]);
    newLink.setAttribute("class", "link");
  }
}
createLinks();
