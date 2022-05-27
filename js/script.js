document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("typewriter").volume = 0.1;
  document.getElementById("typewriter").play();
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});

var txt = "Hi, I'm Christina.";
var myArray = txt.split("");
var loopTimer;
var loopTimer2;
var txt2 = "Junior Software Developer.";
var myArray2 = txt2.split("");

function frameLooper() {
  if (myArray.length > 0) {
    document.getElementById("type_text").innerHTML += myArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 200);
}
frameLooper();

function frameLooper2() {
  if (myArray2.length > 0) {
    document.getElementById("para1").innerHTML += myArray2.shift();
  } else {
    clearTimeout(loopTimer2);
    return false;
  }
  loopTimer2 = setTimeout("frameLooper2()", 250);
}
frameLooper2();

document.getElementById("para1").addEventListener(
  "mouseover",
  function (event) {
    event.target.innerHTML = "Junior Web Developer.";
    event.target.style.color = "rgb(95, 125, 126)";
    event.target.style.textShadow = "2px 2px black";

    setTimeout(function () {
      event.target.style.color = "";
      event.target.innerHTML = "Junior Software Developer.";
      event.target.style.textShadow = "";
    }, 5000);
  },
  false
);

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

const contact = document.querySelector(".contact");

contact.addEventListener("click", () => {
  document.querySelector(".modal").style.visibility = "visible";
});

const languages = document.querySelector(".icons");
const languagesScroll = languages.scrollWidth;

window.addEventListener("load", () => {
  self.setInterval(() => {
    if (languages.scrollLeft !== languagesScroll) {
      languages.scrollTo(languages.scrollLeft + 1, 0);
    }
  }, 15);
});
