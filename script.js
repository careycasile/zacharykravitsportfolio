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

// Scroll progress
const content = document.getElementById("material");
const contentScroll = document.getElementById("material").style.height;

content.addEventListener(
  "scroll",
  function() {
    var scrollTop = documentElement["scrollTop"] || document.body["scrollTop"];
    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    scrollPercentage = (scrollTop / scrollBottom) * 100 + "%";
    document
      .getElementById("progressBar")
      .style.setProperty("--scroll", scrollPercentage);
    // const scrolled = window.scrollY;
    // !== undefined
    //   ? window.pageYOffset
    //   : (document.documentElement || document.content.parentNode || document.contentScroll)
    //       .scrollTop;
    //

    // document.getElementById("progressBar").style.width = winScroll + "%";
  },
  { passive: true }
);

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

// document.addEventListener("click", function(e) {
//   if (e.target.className == "link") {
//     scrollTop(0);
//     // alert("hey");
//   }
// });

// // Scroll to something in the modal
// function scrollToAnchor(aid) {
//   var aTag = $("a[name='" + aid + "']");
//   $("#material").animate({ scrollTop: aTag.offset().top }, "slow");
// }

// $(".link").click(function(e) {
//   console.log(e.target.id);
//   $("#material").animate({ scrollTop: e.target.id }, "slow");
// });
