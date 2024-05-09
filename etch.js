
function makeGrid(numGrid) {
    const container = document.getElementById("div-container");

    for (i = 0; i < numGrid * numGrid; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        

        //container.innerHTML += '<div id="box"></div>';
        //const grid = document.querySelector('div');
        grid.addEventListener(
            "mouseover",
            (event) => {

                event.target.style.backgroundColor = "orange";
                setTimeout(() => {
                    event.target.style.backgroundColor = "";
                }, 750);
            },
            false,
        );

    };
};

makeGrid(16);







