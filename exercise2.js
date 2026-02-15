const swatches = document.querySelectorAll('.swatch');

//Define the handler function
function applyColor() {
    const color = this.dataset.color;
     this.style.backgroundColor = color;
}

//Attach the handler to each swatch
swatches.forEach(swatch => {
    swatch.addEventListener('click', applyColor);
});