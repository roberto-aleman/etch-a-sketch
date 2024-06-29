let gridSize = 16;
const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");
newGridBtn?.addEventListener("click", changeGridSize);
window.onload = () => {
    createGrid();
};
function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        for (let j = 0; j < gridSize; j++) {
            row.appendChild(createSquare());
        }
        container?.appendChild(row);
    }
}
function createSquare() {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.addEventListener("mouseover", (e) => {
        const target = e.currentTarget;
        target.style.backgroundColor = "black";
    });
    return square;
}
function changeGridSize() {
    let desiredGridSize = prompt("Please enter desired grid size (1-100)");
    if (desiredGridSize) {
        gridSize = Number(desiredGridSize);
    }
    while (container?.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
}
export {};
