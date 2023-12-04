let card = document.getElementById('card');
let appy = document.getElementById('appy');
let h1 = document.getElementById('h1');
let h3 = document.getElementById('h3');
let h2 = document.getElementById('h2');

card.addEventListener('mouseover', function() {
h1.classList.add('h1');
h2.classList.add('h2');
h3.classList.add('h3');
appy.classList.add('appy');
  });