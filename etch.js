
const container = document.getElementById("div-container");

function makeGrid(numGrid) {
    //const container = document.getElementById("div-container");

    for (i = 0; i < numGrid * numGrid; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);

        grid.addEventListener(
            "mouseover",
            (event) => {

                event.target.style.backgroundColor = "salmon";
                // setTimeout(() => {
                //     event.target.style.backgroundColor = "";
                //   }, 750);
            },
            // false,
        );

    };
};

makeGrid(16);

function reset() {
    let grid = container.querySelectorAll('div');
    grid.forEach((div) => {
        div.remove();
    });
    let newGrid = prompt("make grid");
    makeGrid(newGrid);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {

    reset();
});

//(div.style.backgroundColor = "white"));




