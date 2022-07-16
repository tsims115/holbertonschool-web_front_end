/* Js script that divides and adds */

function divideBy(firstNumber) {
  return (secondNumber) => secondNumber / firstNumber;
}
function addBy(firstNumber) {
  return (secondNumber) => firstNumber + secondNumber;
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
