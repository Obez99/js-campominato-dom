//Stampare tot celle in base alla difficoltà selezionata
function cellsCounter(num) {
  let result = 0;
  switch (num) {

    case 1:
      result = 100;
      break;

    case 2:
      result = 81;
      break;

    case 3:
      result = 49;
      break;

  }
  return result;

}

//Generare e aggiustare le celle
function cellsGenerator() {
  gameContainer.innerHTML = "";
  //Stampare le celle
  const cellsPerRow = Math.sqrt(cellsCount);
  const cellSize = 100 / cellsPerRow;

  for (let i = 0; i < cellsCount; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = cellSize + "%";
    cell.style.height = cellSize + "%";
    cell.append(i + 1);
    gameContainer.append(cell);
    cell.addEventListener("click", cellClick)

  }

}

function cellClick() {
  score.innerHTML = ""

  if (this.className === "cell cell_active") {
    scoreCounter--;
  }

  if (bombs.includes(parseInt(this.innerHTML))) {
    this.classList.add("cell_bomb")
    scoreCounter = 0;

  }
  else {
    this.classList.add("cell_active")
    scoreCounter++;
    score.append(scoreCounter)
  }



}

/**
 * 
 * @param {*} cells - Cells number given by the game's difficulty.
 * @param {*} nBombs - Number of bombs to generate. (Default is 16).
 */
function bombsGenerator(cells, nBombs = 16) {
  //Creo un array di numeri casuali cioè 16 numeri
  const bombs = [];
  let actualBomb = 0;
  //per 16 volte
  for (let i = 0; i < nBombs; i++) {
    //Genero un numero casuale
    actualBomb = Math.floor(Math.random() * cells + 1);
    //Controllo che ci sia già
    if (bombs.includes(actualBomb)) {
      i--
    } else {
      bombs[i] = actualBomb;
    }
  }

  bombs.sort((a, b) => a - b)
  return bombs;
}
