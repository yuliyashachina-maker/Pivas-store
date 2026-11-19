let cart = JSON.parse(localStorage.getItem('cart')||'[]');
function updateBadge(){
  let b=document.getElementById('cart-count');
  if(b) b.textContent = cart.length>0 ? cart.length : '';
}
function addToCart(name,price){
  cart.push({name,price});
  localStorage.setItem('cart',JSON.stringify(cart));
  updateBadge();
  alert(name+' добавлен в корзину!');
}
updateBadge();
