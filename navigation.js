"use strict";

const stats = document.querySelector(".stats");
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

stats.addEventListener("input", (e) => {
  getModifier(e.target);
});

function getModifier(abilityScoreElement) {
  let content = abilityScoreElement.textContent;
  let numericContent = content.replace(/\D/g, "");
  abilityScoreElement.textContent = numericContent;

  let abilityScore = parseInt(numericContent);
  let modifier = Math.floor((abilityScore - 10) / 2);

  let modifierSpan =
    abilityScoreElement.parentElement.querySelector(".modifier");
  modifierSpan.textContent = `(${modifier >= 0 ? "+" : ""}${modifier})`;
}
