

function boardSize(size) {
let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;

for(let i=0;i<size*size;i++) {
  let cell = document.createElement('div');
  cell.classList.add("cell");
    cell.style.backgroundColor = "#e0e0e0";
  cell.addEventListener("mouseover",colorCell);
    container.appendChild(cell);
}
}
boardSize(16);

function changeSize(input) {
  input >= 2 && input <= 100 ? boardSize(input) : console.log("input error! to many or to few squares");
}
function colorCell() {
  color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}
function changeColor(choice) {
color=choice;

}
function resetContainer() {
  let container = document.querySelector(".container");
  let cells = container.querySelectorAll("div");
  cells.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}
const sizeButton = document.querySelector('.sizeButton');
const input = document.querySelector('input[type="text"]');

sizeButton.addEventListener('click', () => {
  changeSize(input.value);
});