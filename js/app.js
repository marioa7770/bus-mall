'use strict';

//global variables

let productArray = [];
let counter = 0;
let counterMaxValue = 15;
let indexArray = [];

const myContainer = document.querySelector
('section');
const myButton = document.querySelector
// eslint-disable-next-line no-unexpected-multiline
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

function selectRandomProduct() {
  return Math.floor(Math.random() * productArray.length);
}

function renderProduct() {




  while (indexArray.length < 4) {
    let randomNumber = selectRandomProduct();
    if (!indexArray.includes(randomNumber)) {
      indexArray.push(randomNumber);
    }
  }

  console.log(indexArray);

  let product1 = indexArray.shift();
  let product2 = indexArray.shift();



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
    renderChart();
  } else {
    renderProduct();
  }

}

function renderChart() {

  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange' ,'Pink'];
  let productNames = [];
  let productLikes = [];
  let productViews = [];
  for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    productLikes.push(productArray[i].likes);
    productViews.push(productArray[i].views);

  }

  const data = {
    labels: productNames,
    datasets: [ {
      label: '# of views',
      data: productViews,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    },
    {
      label: '# of likes',
      data: productLikes,
      backgroundColor: [
       'rgba(255, 159, 64, 0.2)',
       ],
      borderColor: [
        'rgb(255, 159, 64)',
     ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const chart = document.getElementById('myCanvas');
  const myChart = new Chart(chart, config);

}




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

