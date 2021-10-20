
//Ascoltare il bottone
//Prelevare il valore del selector attuale
const playButton = document.getElementById("playButton")
const difficultySelector = document.getElementById("difficultySelector")
const gameContainer = document.getElementById("gameContainer")
let bombs = [];
const score = document.getElementById("score")
let scoreCounter = 0;

playButton.addEventListener("click", function () {
  //Cancellare le celle precedenti
  //Convertire il valore nel numero di celle che dovranno essere stampate
  scoreCounter = 0;
  score.innerHTML = ""
  chosenDifficulty = parseInt(difficultySelector.value);
  cellsCount = cellsCounter(chosenDifficulty);
  bombs = bombsGenerator(cellsCount);
  cellsGenerator();
})


