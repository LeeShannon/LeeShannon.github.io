window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= window.innerHeight) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
