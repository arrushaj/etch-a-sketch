const grid = document.createElement('div');
const container = document.querySelector('.container');

grid.classList.add('grid');

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', () => {
            grid.classList.add('colored');
        });
        grid.addEventListener('mouseout', () => {
            grid.classList.remove('colored');
        });         
        grid.classList.add('grid');
        row.appendChild(grid);
    }
}


