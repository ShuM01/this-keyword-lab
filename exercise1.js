//select all
const buttons = document.querySelectorAll('.color-btn');

//the handler function
function changeColor(e) {
    this.style.backgroundColor = 'yellow';
}

//attach the handler 
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});

