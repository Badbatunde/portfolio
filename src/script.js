"https://kit.fontawesome.com/457a315592.js";

const navbar = document.querySelector("nav");
const navPages = document.querySelectorAll(".nav-pages a")

window.onscroll = () => {
  if (window.scrollY > 0 && window.scrollY < 600) {
    navbar.classList.add("nav-active");
    navPages[0].classList.add("active")
    navPages[1].classList.remove("active")
    navPages[2].classList.remove("active")
    navPages[3].classList.remove("active")
  } else if (window.scrollY > 600 && window.scrollY < 1400) {
    navbar.classList.add("nav-active");
    navPages[0].classList.remove("active")
    navPages[1].classList.add("active")
    navPages[2].classList.remove("active")
    navPages[3].classList.remove("active")
  } else if (window.scrollY > 1400 && window.scrollY < 2500){
    navbar.classList.add("nav-active");
    navPages[0].classList.remove("active")
    navPages[1].classList.remove("active")
    navPages[2].classList.add("active")
    navPages[3].classList.remove("active")
  } else if (window.scrollY > 2500){
    navbar.classList.add("nav-active");
    navPages[0].classList.remove("active")
    navPages[1].classList.remove("active")
    navPages[2].classList.remove("active")
    navPages[3].classList.add("active")
  } else {
    navbar.classList.remove("nav-active");
  }
};

let header = document.querySelector(".nav-pages");
let btns = header.getElementsByClassName("link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
