"https://kit.fontawesome.com/457a315592.js" 

const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

let header = document.querySelector(".nav-pages");
let btns = header.getElementsByClassName("link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

const quality = '21'
console.log(typeof quality) // returns string

const quantity = Number(quality)
console.log(typeof (quantity)) // returns number