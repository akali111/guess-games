var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var score = document.getElementById("score");
var button = document.getElementById("button");
button.addEventListener("click", check);
var totalscore = 10;
var randomnumber = Math.floor(Math.random() * 10) + 1;
function check() {
  var enterednumber = guessnumber.value;
  if (randomnumber == enterednumber) {
    console.log("RIGHT");
    result.textContent = "Right";
    alert("You won");
  } else {
    console.log("wrong");
    result.textContent = "wrong";
    totalscore = totalscore - 1;
    score.textContent = "score:" + totalscore;
  }
}
