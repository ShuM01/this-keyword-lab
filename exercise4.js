// Buggy Code
const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
  // Arrow functions do not have their own "this".
  // They inherit "this" from the surrounding scope,
  // so this.classList.add('active') throws an error.
  // this.classList.add('active');
  event.currentTarget.classList.add('active');
});  

// FIX: event.currentTarget always refers to the element
  // the listener is attached to (the box). This makes it equivalent to "this" in a regular function handler.