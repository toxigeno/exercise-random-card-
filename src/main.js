/* eslint-disable */
import "bootstrap";
import "./style.css";

let cardSuit;
let cardNumber;
let cardArray = ["Hearts", "Spades", "Clubs", "Diamonds"];
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, "K", "Q", "J", "A"];

window.onload = function() {
  cardSuit = Math.floor(Math.random() * 4) + 1; // random numeros de 1 a 4
  cardNumber = Math.floor(Math.random() * 12); // random de 1 a 10 + 4 letras
  drawCard(cardSuit, cardNumber);
};

function drawCard(cardSuit, cardNumber) {
  let top = document.querySelector("#top");
  let lucky = document.querySelector("#lucky");
  let bottom = document.querySelector("#bottom");

  let suit = "";
  switch (cardSuit) {
    case 1:
      suit = "Hearts";
      break;
    case 2:
      suit = "Spades";
      break;
    case 3:
      suit = "Clubs";
      break;
    case 4:
      suit = "Diamonds";
      break;
    default:
      break;
  }
  top.classList.add(suit);
  bottom.classList.add(suit);
  lucky.innerHTML = numberArray[cardNumber];
}
