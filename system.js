
// slide img
const slides = document.querySelectorAll('.slide_img');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide_img, index) => {
    if (index === slideIndex) {
    slide_img.style.display = 'block';
    } else {
    slide_img.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 5000); 

//list_let
let totalValue = 0;
let discountValue = 0;
let netTotalValue = 0;



//add product
const product =[
  {
    id:1,
    image:'img/1.reasons_to_stay_alive.jpg',
    title:'แด่เธอผู้แตกสลาย',
    price:275
  },
  {
    id:2,
    image:'img/2.Hiro.jpg',
    title:'จิตวิทยาสายดาร์ก',
    price:225
  },
  {
    id:3,
    image:'img/3.secrets_of_happiness.jpg',
    title:'ความลับของความสุข',
    price:325
  },
  {
    id:4,
    image:'img/4.always_by_your_side.jpg',
    title:'ฉันจะเป็นดอกไม้ให้เธอเสมอ',
    price:275
  },
  {
    id:5,
    image:'img/5.psychology_of_money.jfif',
    title:'จิตวิทยาว่าด้วยการเงิน',
    price:255
  },
  {
    id:6,
    image:'img/6.ikikai.jpg',
    title:'จิตวิทยาว่าด้วยการเงิน',
    price:315
  },
];






const selectedProductsElement = document.getElementById('selectedProducts');
function addSelectedProduct(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('selected_product');
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="selected_product_image">
    <div class="selected_product_details">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      </div>
  `;
  selectedProductsElement.appendChild(productDiv);
}

const addToCartButtons = document.querySelectorAll('.buy_color');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.id.split('_')[1]); // Extract product ID from button ID
    const selectedProduct = product.find(item => item.id === productId);
    if (selectedProduct) {
      addSelectedProduct(selectedProduct);
      totalValue += selectedProduct.price; 
      updateTotalValue(); 


    }
  });
});



function updateTotalValue() {
  const totalElement = document.querySelector('.total_value');
  totalElement.textContent = `$${totalValue.toFixed(2)}`;
}

function addSelectedProduct(product) {
  const productDiv = document.createElement('div');
  productDiv.classList.add('selected_product');
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="selected_product_image">
    <div class="selected_product_details">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    </div>
  `;
  selectedProductsElement.appendChild(productDiv);
}


function updateTotalValue() {
  const totalElement = document.querySelector('.total_value');
  totalElement.textContent = `$${totalValue.toFixed(2)}`;
  
  // Calculate discount and net total
  if (totalValue >= 1000) {
    discountValue = totalValue * 0.1;
  } else {
    discountValue = 0;
  }
  netTotalValue = totalValue - discountValue;
  
  const discountElement = document.querySelector('.total_sell');
  discountElement.textContent = `$${discountValue.toFixed(2)}`;
  
  const netTotalElement = document.querySelector('.sp_sell_value');
  netTotalElement.textContent = `$${netTotalValue.toFixed(2)}`;
}



function orderButtonClicked() {
  const formInputs = document.querySelectorAll('.form_address input, .form_address textarea');
  let isFormComplete = true;

  formInputs.forEach(input => {
    if (input.value.trim() === '') {
      isFormComplete = false;
    }
  });

  if (isFormComplete) {
    alert('จัดซื้อสำเร็จ');
  } else {
    alert('กรุณาตรวจสอบข้อมูลให้ครอบถ้วน');
  }
}

function cancelButtonClicked() {
  const formInputs = document.querySelectorAll('.form_address input, .form_address textarea');
  formInputs.forEach(input => {
    input.value = '';
  });

  // Reset total values
  totalValue = 0;
  discountValue = 0;
  netTotalValue = 0;
  updateTotalValue();

  // Clear selected products
  selectedProductsElement.innerHTML = '';
}

const orderButton = document.querySelector('.submit_bottom');
orderButton.addEventListener('click', orderButtonClicked);

const cancelButton = document.querySelector('.canel_bottom');
cancelButton.addEventListener('click', cancelButtonClicked);


