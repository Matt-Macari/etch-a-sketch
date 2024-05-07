
function makeGrid(numGrid) {
    const container = document.getElementById("div-container");

    for (i = 0; i < numGrid * numGrid; i++) {
        container.innerHTML += '<div id="box"></div>';
        const box = document.getElementById('box');
        box.addEventListener('mouseover', colorSquare);

    };
};

makeGrid(24);







