// import watchList from "./images/watchList.svg";
// import training from "./images/training.svg";

//
//
//
// PAGE TAB TITLE -----------------------------------------------------------------------------------
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
// NAVIGATION -----------------------------------------------------------------------------------
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
// WORK -----------------------------------------------------------------------------------
let buttons = document.querySelectorAll(".card");
let modal = document.querySelector(".modal");
let modals = document.querySelectorAll(".modal");
let modalNames = document.querySelectorAll("#modal-title");

// const project = document.querySelector(".modal");
const outsideModal = document.getElementById("behind-modal");
const modalWindow = document.getElementById("modal-container");
const closeButton = document.getElementById("close-button");
const page = document.getElementById("page");

const uxProjects = [
  {
    title: "Watch List",
    subtitle: "UX/UI  |  Idelic",
    description:
      "A workflow enabling trucking fleets to analyze their riskest drivers while saving time, money, and lives."
  },
  {
    title: "Training",
    subtitle: "UX/UI  |  Idelic",
    description:
      "Enabling safety team management to track and assign required trainings within a trucking fleet."
  }
];

function createButtons() {
  for (var project = 0; project < uxProjects.length; project++) {
    const btnForProject = document.createElement("button");
    document.getElementById("card-section").appendChild(btnForProject);
    btnForProject.setAttribute("class", "card");
    btnForProject.setAttribute("id", project);
  }
}
createButtons();

const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");

for (var z = 0; z < cards.length; z++) {
  cards[z].addEventListener("click", function(e) {
    let cardId = e.target.id;
    loopThroughModals(cardId);
  });
}

function loopThroughModals(cardId) {
  for (var w = 0; w < modals.length; w++) {
    modals[w].setAttribute("id", [w]);
    console.log(w);
    if (cardId == w) {
      console.log("modal id is " + [w] + " and " + "card id is " + [cardId]);
      modals.getElementById(w).style.display = "block";
    } else {
      document.querySelector(".modal").style.display = "none";
    }
  }
}

// document.getElementById("page").style.display = "none";
// document.getElementById("modal-container").style.display = "block";

outsideModal.addEventListener("click", function(e) {
  modalWindow.style.display = "none";
  outsideModal.style.display = "none";
  page.style.display = "block";
  console.log(e);
});

closeButton.addEventListener("click", function(e) {
  modalWindow.style.display = "none";
  outsideModal.style.display = "none";
  page.style.display = "block";
  console.log(e);
});

// // Create links for a modal
// let headers = document.querySelectorAll(".projectSection");
// let links = [];

// function createLinks() {
//   for (var x = 0; x < headers.length; x++) {
//     links.push(headers[x].innerHTML);
//   }

//   for (var link = 0; link < links.length; link++) {
//     const newLink = document.createElement("LI");
//     newLink.innerHTML = links[link];
//     document.getElementById("scroll-links").appendChild(newLink);
//     newLink.setAttribute("id", links[link]);
//     newLink.setAttribute("class", "link");
//     newLink.addEventListener("click", function() {
//       //scroll to action
//       let linkClicked = newLink.id;

//       for (var y = 0; y < headers.length; y++) {
//         if (headers[y].innerHTML == linkClicked) {
//           headers[y].scrollIntoView({
//             behavior: "smooth",
//             block: "start"
//           });
//         }
//       }
//     });
//   }
// }
// // work();
// createLinks();
