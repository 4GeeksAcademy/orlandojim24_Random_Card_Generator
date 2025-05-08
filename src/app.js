import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector('.card').classList.add(getRandomSuit());
  document.querySelector('.card .number').innerHTML = getRandomNumber ();
};


let getRandomNumber = ()=> {
  let number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random() * number.length);
  return number[indexNumbers];
};

let getRandomSuit = () => {
  let suit = ["diamond","spade","heart","club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};