var gap = 200;

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > gap) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
