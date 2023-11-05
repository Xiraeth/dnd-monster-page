"use strict";

const WOLF_HP = 37;
const WOLF_AC = 14;
const WOLF_SPEED = 50;
const WOLF_DMG_DICE = 6;

// Wolf attack: 2d6 + 3

const attackBtn = document.querySelector(".attackRollContainer button");
const attackRoll = document.querySelector(".attackRoll");
const damageBtn = document.querySelector(".damageRollContainer button");
const damageRoll = document.querySelector(".damageRoll");

attackBtn.addEventListener("click", function (e) {
  const roll = generateRandomRoll(20);
  attackRoll.textContent = roll;
  changeTextColor(roll, attackRoll);
});

damageBtn.addEventListener("click", (e) => {
  const roll1 = generateRandomRoll(WOLF_DMG_DICE);
  const roll2 = generateRandomRoll(WOLF_DMG_DICE);

  const damage = roll1 + roll2 + 3;
  damageRoll.textContent = damage;
  changeTextColor(damage, damageRoll);
});

function generateRandomRoll(side) {
  return Math.floor(Math.random() * side) + 1;
}

function changeTextColor(roll, element) {
  if (roll == 1) element.style.color = "crimson";
  if (roll > 1 && roll < 10) element.style.color = "tomato";
  else if (roll >= 10 && roll < 15) element.style.color = "yellow";
  else if (roll >= 15 && roll < 20) element.style.color = "rgb(88, 181, 255)";
  else if (roll == 20) element.style.color = "mediumspringgreen";
}
