//
//
//
// PAGE TAB TITLE
const url = window.location.pathname;
const file = url.replace(".html", "");
const pageName = file.substring(file.lastIndexOf("/") + 1);
const upperCase = pageName.charAt(0).toUpperCase() + pageName.slice(1);

window.onload = event => {
  function addPageTitle() {
    if (pageName === "index") {
      return (document.title = "Zachary Allen Kravits" + " - " + "Home");
    } else {
      return (document.title = "Zachary Allen Kravits" + " - " + upperCase);
    }
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
let headers = document.querySelectorAll(".projectSection");
let links = [];

function createLinks() {
  for (var x = 0; x < headers.length; x++) {
    links.push(headers[x].innerHTML);
  }

  for (var link = 0; link < links.length; link++) {
    const newLink = document.createElement("LI");
    newLink.innerHTML = links[link];
    document.getElementById("scroll-links").appendChild(newLink);
    newLink.setAttribute("id", links[link]);
    newLink.setAttribute("class", "link");
    newLink.addEventListener("click", function() {
      //scroll to action
      let linkClicked = newLink.id;
      console.log(linkClicked);
      for (var y = 0; y < headers.length; y++) {
        if (headers[y].innerHTML == linkClicked) {
          headers[y].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }
}
createLinks();
