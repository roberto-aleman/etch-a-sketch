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
    let desiredGridSize = 0;
    while (desiredGridSize < 1 || desiredGridSize > 100) {
        const input = prompt("Please enter desired grid size (1-100)");
        if (input !== null) {
            const parsedInput = parseInt(input);
            if (Number.isNaN(parsedInput) || parsedInput < 1 || parsedInput > 100) {
                alert("Invalid input. Please enter a number between 1 and 100");
            }
            else {
                desiredGridSize = parsedInput;
            }
        }
    }
    gridSize = desiredGridSize;
    while (container?.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
}
export {};
