const accordeon = (triggersSelector )=> {
  const btns = document.querySelectorAll(triggersSelector);

  // Первый вариант на CSS свойствах

//   blocks.forEach(item => { // добавим анимацию для контента при появлении
//     item.classList.add('animated', 'fadeInDown');
// });

// btns.forEach(item => {
//   item.addEventListener('click', function() {
//     console.log(333);
//     // обычная ф. т.к. this 
//     //узнаем  - является ли элемент на котором кликнули активным 
//    if(!this.classList.contains('active')) {
//     //если нет
  
//    btns.forEach(elem => {
//   elem.classList.remove('active', 'active-style')
//    });
//    this.classList.add('active', 'active-style');
//    }
//   });
// });
// // Показ и скрытие самого контента делаем в main.css


  // //ВТОРОЙ вариант на JS  - меняем высоту блоков конента - открыть можно все элементы
  btns.forEach(item => {
    item.addEventListener('click', function() { // нужен контекст вызова поэтому обычная ф.
    this.classList.toggle('active-style');
    //далее класс active добавляем уже контенту - следующему после кнопки триггера
    this.nextElementSibling.classList.toggle('active-content');

    if(this.classList.contains('active-style')) {
      this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px'; // 80 это padding в стилях
    } else {
      this.nextElementSibling.style.maxHeight =  '0px';
    }
    });
  });

  //ТРЕТИЙ вариант - открыть можно только по одному элементу
// btns.forEach(item => {
//   item.addEventListener('click', function() { // нужен контекст вызова поэтому обычная ф.
//     btns.forEach(elem => {
//       elem.classList.remove('active-style');      
//     });
//    this.classList.add('active-style');
//    //далее класс active добавляем уже контенту - следующему после кнопки триггера
//    this.nextElementSibling.forEach(element => {
//     element.classList.remove('active-content');
//   element.style.maxHeight =  '0px';
// });
// this.nextElementSibling.classList.add('active-content');
//  this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px'; // 80 это padding в стилях


  //  if(this.classList.contains('active-style')) {
   
  //  } else {
  //   this.nextElementSibling.style.maxHeight =  '0px';
  //  }
  // });
// });

}; //
export default accordeon;