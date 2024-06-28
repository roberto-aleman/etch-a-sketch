const container = document.querySelector("#container");
let squaresPerSide = 16;
for (let i = 0; i < squaresPerSide; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < squaresPerSide; j++) {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        row.appendChild(div);
    }
    container?.appendChild(row);
}
export {};
