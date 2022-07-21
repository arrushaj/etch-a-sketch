const grid = document.createElement('div');

const button = document.createElement('button');
button.textContent = "Generate sketch pad";
button.addEventListener('click', createSketchPad);

const container = document.querySelector('.container');

const row = document.createElement('div');
row.classList.add('header');
container.appendChild(row);
row.appendChild(button);

function createSketchPad() {
    let squares;
    do {
        squares = prompt("How many squares per side? (max: 100)");
    } while (squares > 100);
    removeAllChildNodes(container);
    const row = document.createElement('div');
    row.classList.add('header');
    container.appendChild(row);
    row.appendChild(button);
    for (i = 0; i < squares; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 0; j < squares; j++) {
            const grid = document.createElement('div');
            grid.addEventListener('mouseover', () => {
                grid.classList.add('colored');
            });   
            grid.classList.add('grid');
            row.appendChild(grid);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', () => {
            grid.classList.add('colored');
        });   
        grid.classList.add('grid');
        row.appendChild(grid);
    }
}

