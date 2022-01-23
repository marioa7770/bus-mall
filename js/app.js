'use strict';

//global variables

let productArray = [];
let counter = 0;
let counterMaxValue = 3;

const myContainer = document.querySelector
  ('section');
const myButton = document.querySelector
  ('section + div');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

//functional logic




function Product(name, fileExtension = 'jpg') {
  this.views = 0;
  this.likes = 0;
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  productArray.push(this);

}

function getRandomProduct() {
  return Math.floor(Math.random() * productArray.length);
}

function renderProduct() {

  let product1 = getRandomProduct();
  let product2 = getRandomProduct();
  while (product1 === product2) {
    product2 = getRandomProduct();
  }

  image1.src = productArray[product1].src;
  image1.alt = productArray[product1].name;
  image2.src = productArray[product2].src;
  image2.src = productArray[product2].src;
  productArray[product1].views++;
  productArray[product2].views++;
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image');
  }

  counter++;
  // find out what image was clicked on 
  let productClicked = event.target.alt;

  // increment likes on that product
  for (let i = 0; i < productArray.length; i++) {
    if (productClicked === productArray[i].name) {
      productArray[i].likes++;
      break;

    }

  }
  // render new goats on the page

   
  if (counter === counterMaxValue) {
    //stop the game
    myContainer.removeEventListener('click', handleClick);
    myButton.className = 'clicks-allowed';
    myButton.addEventListener('click', handleButtonClick);
  }

  renderProduct();

}

function handleButtonClick(event) {
  if (counter === counterMaxValue) {
    renderResults();
  }

}

function renderResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < productArray.length; i++) {
    let message = `${productArray[i].name} had ${productArray[i].views} views
      and was clicked on ${productArray[i].likes} times`;
    let li = document.createElement('li');
    li.textContent = message;
    ul.appendChild(li);
  }

}

// code that runs on page load

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');



renderProduct();

myContainer.addEventListener('click', handleClick);

