"https://kit.fontawesome.com/457a315592.js";

const navbar = document.querySelector("nav");
window.onscroll = () => {
  if (window.scrollY > 300) {
    navbar.classList.add("nav-active");
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

let decimal = 9.1
let getInt = Math.ceil(decimal)

console.log(getInt) // returns 10
