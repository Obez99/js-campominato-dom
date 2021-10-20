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
  this.classList.toggle("cell_active")
}

function bombsGenerator(cells) {
  const bombs = []
  for (i = 0; i < 16; i++) {
    bombs[i] = Math.floor(Math.random() * cells + 1);
  }
  bombs.sort((a, b) => a - b)
  return bombs;
}