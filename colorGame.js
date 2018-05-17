var squares = document.querySelectorAll(".squares");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

var numSquares = 6;
var colors = [];
var correctColor;

resetButton.addEventListener("click", function(){
  reset();
});

init();

function init(){
  setupModeButtons();
  gameplay();
}

function reset(){
  resetButton.textContent = "New Colors";
  message.textContent = "";
  //generate all new colors
  colors = randomColors(numSquares);
  //pick new random color
  correctColor = pickColor(colors);
  //display new random color
  colorDisplay.textContent = correctColor;
  for(var i = 0; i < squares.length; i++){
    //add colors to squares
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "rgb(98, 146, 201)";
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset()
    });
  }
}

function gameplay(){
  for(var i = 0; i < squares.length; i++){
  //add colors to squares
  //add event listener to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === correctColor) {
      message.textContent = "Correct!";
      changeColor(correctColor);
      h1.style.backgroundColor = correctColor;
      resetButton.textContent = "PLAY AGAIN?"
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again!"
    }
    }); 
  }
  reset();
}

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    //change each square color to match correct color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(arr){
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

function randomRGB() {
  //pick a "red"
  var r = Math.floor(Math.random() * 256)
  //pick a "green"
  var g = Math.floor(Math.random() * 256)
  //pick a "blue"
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomColors(numOfColors){
  var arr = [];
  for (var i = 0; i < numOfColors; i++){
    arr.push(randomRGB());
  }
  return arr;
}