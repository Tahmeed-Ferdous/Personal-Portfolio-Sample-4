const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 600) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

});