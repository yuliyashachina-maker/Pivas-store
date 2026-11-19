let cart = JSON.parse(localStorage.getItem('cart')||'[]');

function addToCart(name, price){
  cart.push({name:name, price:price});
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + ' добавлен! Всего: ' + cart.length);
  location.reload();
}

function updateBottom(){
  let cart = JSON.parse(localStorage.getItem('cart')||'[]');
  let total = 0;
  cart.forEach(i=> total+=i.price);
  
  // ищем внизу надписи и меняем
  document.body.innerHTML = document.body.innerHTML
    .replace('Корзина пуста', cart.length>0 ? 'В корзине: '+cart.length+' шт' : 'Корзина пуста')
    .replace(/Итого: \d+ ₸/, 'Итого: '+total+' ₸');
}

window.addEventListener('DOMContentLoaded', updateBottom);
