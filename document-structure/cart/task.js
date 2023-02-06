const productDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const productInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
let productValue = Array.from(document.querySelectorAll('.product__quantity-value'));

productDec.forEach((item, i) => {
  item.addEventListener('click', () => {
    productValue[i].textContent == 1 ? false : productValue[i].textContent--;
  })
})
productInc.forEach((item, i) => {
  item.addEventListener('click', () => {
    productValue[i].textContent++;
  })
})
const productAdd = Array.from(document.querySelectorAll('.product__add'));
let cartProducts = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const productImage = document.querySelectorAll('.product__image');

productAdd.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    const dataId = (product[i].getAttribute('data-id'));
    const parent = productImage[i].closest('.product');
    const parentImg = parent.querySelector('.product__image')
    const imgSrc = parentImg.getAttribute('src');
    const meaning = Number(productValue[i].outerText);

    const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    const coincidence = cartProduct.find(el => el.dataset.id == e.target.closest('.product').dataset.id);
      if(!coincidence) {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id=${dataId}>
          <img class="cart__product-image" src=${imgSrc}>
          <div class="cart__product-count">${meaning}</div>
        </div>
        `);
      } else {
        const cartProductCount = coincidence.querySelector('.cart__product-count');
        cartProductCount.innerText = +cartProductCount.outerText + meaning;
      }
  })
})