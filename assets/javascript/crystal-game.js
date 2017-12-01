var target = 0;
var current = 0;
var wins = 0;
var losses = 0;
var gems = [0, 1, 2, 3];

// Random number generator
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set the target and current on the page
function start() {
  target = getRandom(19, 120);
  $(".targetScore").text(target);
  $(".currentScore").text(current);
  for (var g = 0; g < gems.length; g++){
    gems[g] = getRandom(1, 12);
  }
}
// Check to see if you won or lost
function check() {
  if (target == current) {
    wins++;
    current = 0;
    $("#winsNumber").text("Wins: " + wins);
    alert("You Won!");
    start();
  }
  else if (target < current) {
    losses++;
    current = 0;
    $("#lossesNumber").text("Losses: " + losses);
    alert("You lost");
    start();
  }
}

// Run the game
$(document).ready(function () {
  start();
  $(".amethyst").on('click', function  (){
    current = gems[0] + current;
    $(".currentScore").text(current);
    check();
  });
  $(".peridot").on('click', function  (){
    current = gems[1] + current;
    $(".currentScore").text(current);
    check();
  });
  $(".quartz").on('click', function  (){
    current = gems[2] + current;
    $(".currentScore").text(current);
    check();
  });
  $(".zircon").on('click', function  (){
    current = gems[3] + current;
    $(".currentScore").text(current);
    check();
  });
});

// Popup if someone tries to leave the page
window.onbeforeunload = function() {
    return "";
};
