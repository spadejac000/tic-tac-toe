
// Decide who's turn it is
// Mark a box
// Switch player Turn


//variables
var gameOver;
var player1;
var player2;
var player = false;
var turn;
var game = true;
var boxesMarked = [];
var boxes = document.getElementsByClassName("box");
var winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var listOfBoxes = {
  box1: 0,
  box2: 0,
  box3: 0,
  box4: 0,
  box5: 0,
  box6: 0,
  box7: 0,
  box8: 0,
  box9: 0,
};

// add an unselected class to each box
// for (key in listOfBoxes) {
//   document.getElementById(key).classList.add('unselected');
// }

// if box is clicked, then box is marked
  var clickedBoxes = function() {
    //push box that has been clicked into array
    boxesMarked.push(this);
    // Deciding who's turn it is
    // if (player === false) {
    //   document.getElementById("player").textContent = "1";
    // } else if (player === true){
    //   document.getElementById("player").textContent = "2";
    // }
    // player1 = !player1;
    if(player === false) {
      if (listOfBoxes[this.id] === 0) {
        console.log('clicked');
        listOfBoxes[this.id] = 1;
        document.getElementById("player").textContent = "2";
        player = true;
        this.textContent = "X";
        console.log(this.id);
      };
  } else {
    if (listOfBoxes[this.id] === 0) {
      console.log('clicked');
      listOfBoxes[this.id] = 2;
      document.getElementById("player").textContent = "1";
      player = false;
      this.textContent = "O";
      console.log(this.id);
  }}
  console.log(boxesMarked.length);
  };

// loop through aray when a box has been clicked
for(var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", clickedBoxes);
    // console.log(this);
}

// reset tic tac toe board function
var reset = function() {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  document.getElementById("reset").addEventListener("click", reset);
});





// var boxMarked = {
//   box1: false,
//   box2: false,
//   box3: false,
//   box4: false,
//   box5: false,
//   box6: false,
//   box7: false,
//   box8: false,
//   box9: false,
// };

// var box2 = document.getElementById("box2").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box3 = document.getElementById("box3").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box4 = document.getElementById("box4").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box5 = document.getElementById("box5").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box6 = document.getElementById("box6").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box7 = document.getElementById("box7").addEventListener("click", function() {
//   console.log("X");
// });

// var box8 = document.getElementById("box8").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box9 = document.getElementById("box9").addEventListener("click", function() {
//   console.log("X");
// });
