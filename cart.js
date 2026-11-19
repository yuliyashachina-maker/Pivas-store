function addToCart(n,p){
 var c=JSON.parse(localStorage.getItem('cart')||'[]');
 c.push({name:n,price:p});
 localStorage.setItem('cart',JSON.stringify(c));
 var e=document.getElementById('cart-count');
 if(e){e.textContent=c.length;e.style.display='inline-block';}
 alert(n+' добавлен! Всего: '+c.length);
}
function setLang(l){
 localStorage.setItem('lang',l);
 location.reload();
}
