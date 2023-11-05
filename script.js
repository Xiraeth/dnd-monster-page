"use strict";

const openMenuIcon = document.querySelector("#openMenu");
const sidebar = document.querySelector("#sidebar");
const xButton = document.querySelector(".fa-xmark");

openMenuIcon.addEventListener("click", function (e) {
  sidebar.style.transform = "translateX(0)";
  openMenuIcon.style.display = "none";
});

xButton.addEventListener("click", function (e) {
  sidebar.style.transform = "translateX(-100px)";
  openMenuIcon.style.display = "block";
});

window.addEventListener("click", function (e) {
  if (e.target != sidebar && e.target != openMenuIcon) {
    sidebar.style.transform = "translateX(-100px)";
    openMenuIcon.style.display = "block";
  }
});
