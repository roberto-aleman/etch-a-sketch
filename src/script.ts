const container = document.querySelector("#container");
let squaresPerSide = 16;

for (let i = 0; i < squaresPerSide; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "row");
  for (let j = 0; j < squaresPerSide; j++) {
    row.appendChild(createSquare());
  }
  container?.appendChild(row);
}

function createSquare() {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.addEventListener("mouseover", (e) => {
    const target = e.currentTarget as HTMLDivElement;
    target.style.backgroundColor = "black";
  });
  return square;
}
