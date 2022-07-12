const filter = ()=> {
  // т.к. классов в весртке очень много передавать их в параметры мы не будем т.к. нерационально - пропишем их вручную
const menu = document.querySelector('.portfolio-menu');
const items = menu.querySelectorAll('li');
const btnAll = menu.querySelector('.all');
const btnLovers = menu.querySelector('.lovers');
const btnChef = menu.querySelector('.chef');
const btnGirl = menu.querySelector('.girl');
const btnGuy = menu.querySelector('.guy');
const btnGrandmother = menu.querySelector('.grandmother');
const btnGranddad = menu.querySelector('.granddad');

const wrapper = document.querySelector('.portfolio-wrapper');
const markGirl = wrapper.querySelectorAll('.girl');
const markAll = wrapper.querySelectorAll('.all');
const markLovers = wrapper.querySelectorAll('.lovers');
const markChef = wrapper.querySelectorAll('.chef');
const markGuy = wrapper.querySelectorAll('.guy');
const no = document.querySelector('.portfolio-no');


//создадим ф. фильтрации элементов
const typeFilter = (markType)=> {
  //сначала скрываем все элементы
 markAll.forEach(item => {
  item.style.display = 'none';
  item.classList.remove('animated', 'fadeIn'); // из animate.css
 });
 no.style.display = 'none';
 no.classList.remove('animated', 'fadeIn');

if(markType) { // если есть данные в параметре
  markType.forEach(item => {
    item.style.display = 'block';
    item.classList.add('animated', 'fadeIn');
  });
  //если в параметр ничего не передали - значит фото для бабушек и дедушек и показываем текст - что таких фото пока нет
} else {
  no.style.display = 'block';
  no.classList.add('animated', 'fadeIn');
 
}

};

//эти вызовы после клика можно оптимизировать  - как?  12-19
btnAll.addEventListener('click', ()=> { 
  typeFilter(markAll)
});
btnLovers.addEventListener('click', ()=> { 
  typeFilter(markLovers)
});
btnChef.addEventListener('click', ()=> { 
  typeFilter(markChef)
});
btnGirl.addEventListener('click', ()=> { 
  typeFilter(markGirl)
});
btnGuy.addEventListener('click', ()=> { 
  typeFilter(markGuy)
});
btnGrandmother.addEventListener('click', ()=> { 
  typeFilter() // без аргументов т.к еще нет таких фото
});
btnGranddad.addEventListener('click', ()=> { 
  typeFilter()  // без аргументов т.к еще нет таких фото
});

// делаем подсветку активного таба через делегирование
menu.addEventListener('click', (e)=> { 
let target = e.target;
if(target && target.tagName == 'LI') {
 items.forEach(elem => {
  elem.classList.remove('active');
  target.classList.add('active')
  
 });
}
 
});

}; //конец
export default filter;
