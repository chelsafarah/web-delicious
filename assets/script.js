//slide gambar
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-white";
}

//untuk toggle hamburger

const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const navbarLink = document.getElementsByClassName("navbar-link")[0];
const link = document.querySelectorAll(".link");

toggleButton.addEventListener("click", () => {
  navbarLink.classList.toggle("active");
});

link.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbarLink.classList.toggle("active");
  });
});
