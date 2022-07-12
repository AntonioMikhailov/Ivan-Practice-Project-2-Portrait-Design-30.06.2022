const burger = (menuSelector, burgerSelector)=> {
const menuElem = document.querySelector(menuSelector);
const burgerElem = document.querySelector(burgerSelector);

menuElem.style.display = 'none'; // делаем изначально скрытым

burgerElem.addEventListener('click', ()=> { 
 if(menuElem.style.display == 'none' && window.screen.availWidth < 993) {
  menuElem.style.display = 'block';
 } else {
  menuElem.style.display = 'none';
 }
});

// следим за шириной экрана
window.addEventListener('resize', ()=> { 
 if(window.screen.availWidth > 992) {
  menuElem.style.display = 'none';
 } 
});

}; //
export default burger;