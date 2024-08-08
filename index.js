const element = document.querySelector('.parent-container');

const cotegory = 'Brownie';
const name = 'Salted carael Brownie';

function itemCard(image, name, price){
    return `<div class="parent">
    <div class="upper-container">
      <picture>
        <source  media="(min-width:1440px)" 
        srcset="${image.desktop}" alt="waffle-desktop">
        <source media="(min-width:1366px)"  srcset="${image.tablet}" alt="waffle-tablet">
        <img  src="${image.mobile}" alt="waffle-mobile">
      </picture>
       <button class="addToCart" >
        <img src="./assets/images/icon-add-to-cart.svg" alt="">
        <p class="cart">Add to Cart</p>
      </button>  
      <div class="add-to-cart-button"  id="selectbtn">
       <span><img src="./assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" class="decrement"> </span>
       <span class="number">01</span>
       <span><img src="./assets/images/icon-increment-quantity.svg" alt="icon-increment-quantity" class="increment">  </span>
      </div>
    </div>
    
    <div class="lower-container">
      <p class="subtittle">${cotegory}</p>
      <p class="dessert-name">${name}</p>
      <p class="price">$${price}</p>
    </div>
    </div>`
}

// document.body.appendChild(element);