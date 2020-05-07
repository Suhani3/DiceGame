//Generate random numbers
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

//Change images source value
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNum1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNum2 + ".png");

//Alternatives
//To select - querySelector(.img1) & querySelector(.img2)
//Can store the value for src in variables and use them here.

if (randomNum1 > randomNum2)
  document.querySelector("h1").innerHTML = "🥇 Player 1 Wins!";
else if (randomNum2 > randomNum1)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥇";
else
  document.querySelector("h1").innerHTML = "Draw!";
