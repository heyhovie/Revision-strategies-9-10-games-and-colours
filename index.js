// General_____________________________________________

var startB = document.getElementById('startButton');
var startP = document.getElementById('startPanel');

function hideHelp() {
  var x = document.getElementById("help-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function resetAll() {
  window.location.reload();
  return false;
}

function start() {
  startP.style.display = 'none';
  randomPosition();
  addDivs();
  startB.style.display = 'none';
}
// Bespoke funcitons_____________________________________
var tile1 = document.getElementById('tile1');
var tile2 = document.getElementById('tile2');
var tile3 = document.getElementById('tile3');
var tile4 = document.getElementById('tile4');
var tile5 = document.getElementById('tile5');
var tile6 = document.getElementById('tile6');
var tile7 = document.getElementById('tile7');
var tile8 = document.getElementById('tile8');
var tile9 = document.getElementById('tile9');
var tile10 = document.getElementById('tile10');
var tile11 = document.getElementById('tile11');
var tile12 = document.getElementById('tile12');
var allTiles = [tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12];
var testArray = [];
var count = [];
var divComp = [];
var tileComp = [];
var disablerDiv = document.getElementById('disabler');
var winCount = [];
var loseCount = [];
var guessText = document.getElementById('guessText');
var winnerTab = document.getElementById('winTab');
var guessCount = [];

function winCheck() {
  if (winCount.length == 6) {
    guessCount.push(winCount.length + loseCount.length);
    guessText.innerHTML = guessCount[0];
    winnerTab.style.display = 'block';
  }
}

function switchState(tile) {
  var myTile = tile.getAttribute('id');
  tile.style.backgroundImage = "url(images/" + myTile + ".png)"
  divComp.push(tile.classList.value);
  tileComp.push(tile);
  count.push('yo');
  if (divComp.length == 2) {
    disablerDiv.style.display = 'block';
  }
  setTimeout(
    function() {
      if (count.length >= 2) {
        if (divComp[0] == divComp[1]) {
          winCount.push('win');
          winCheck();
          console.log(winCount);
        } else {
          loseCount.push('loss');
          console.log(loseCount);
          for (k = 0; k < tileComp.length; k++) {
            tileComp[k].style.backgroundImage = "url(images/dlearn.png)";
          }
        }
        console.log(divComp);
        tileComp = [];
        divComp = [];
        count = [];
        disablerDiv.style.display = 'none';
      }
    }, 2000
  );

}

function randomPosition() {
  testArray = [];
  for (i = 0; testArray.length < 12; i++) {
    var randomIndex = Math.floor(Math.random() * 12);
    if (testArray.includes(randomIndex) != true) {
      testArray.push(randomIndex);
    }
  }
  console.log(testArray);
}

var tileB = document.getElementById('tileBox');
var myDivs = ["<div class='tile one' id='tile1' onclick='switchState(this)'></div>",
  "<div class='tile two' id='tile2' onclick='switchState(this)'></div>",
  "<div class='tile three' id='tile3' onclick='switchState(this)'></div>",
  "<div class='tile four' id='tile4' onclick='switchState(this)'></div>",
  "<div class='tile five' id='tile5' onclick='switchState(this)'></div>",
  "<div class='tile six' id='tile6' onclick='switchState(this)'></div>",
  "<div class='tile one' id='tile7' onclick='switchState(this)'></div>",
  "<div class='tile two' id='tile8' onclick='switchState(this)'></div>",
  "<div class='tile three' id='tile9' onclick='switchState(this)'></div>",
  "<div class='tile four' id='tile10' onclick='switchState(this)'></div>",
  "<div class='tile five' id='tile11' onclick='switchState(this)'></div>",
  "<div class='tile six' id='tile12' onclick='switchState(this)'></div>"
];

function addDivs() {
  var outputDiv = '';
  for (i = 0; i < testArray.length; i++) {
    outputDiv = outputDiv + myDivs[testArray[i]];
  }
  tileB.innerHTML = outputDiv;
}
