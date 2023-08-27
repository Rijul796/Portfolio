// script.js

const button = document.querySelector(".btn-primary");

button.addEventListener("click", function () {
  window.location.href = "main.html";
});

const headerTextAnimation = () => {
  h1.style.transform = "translateY(" + Math.random() * 10 + "px)";
};

const header = document.querySelector("header");

header.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
});

header.addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});

setInterval(headerTextAnimation, 1000);

const welcomeWindow = document.querySelector(".welcome-window");

welcomeWindow.classList.add("active");

setTimeout(function () {
  welcomeWindow.classList.remove("active");
}, 3000);

const links = document.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("mouseover", function () {
    this.style.color = "red";
  });

  link.addEventListener("mouseleave", function () {
    this.style.color = "blue";
  });
});