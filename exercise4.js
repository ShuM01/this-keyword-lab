//Buggy Code
const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
 // BUG: this.classList.add('active') throws an error
// this.classList.add('active');//
event.currentTarget.classList.add('active');
});

//arrow function don't have their own "this".
//they inherit "this" from the surrounding scope

//so I use event.currentTarget instead of "this" to refer to the clicked element.
//the listner is attached to the box element, This makes it equivalent to "this" in a regular function.