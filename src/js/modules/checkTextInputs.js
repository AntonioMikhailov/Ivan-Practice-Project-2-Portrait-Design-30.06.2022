const checkTextInputs = (selector)=> {
  const textInputs = document.querySelectorAll(selector); 

  textInputs.forEach(item => { 
    item.addEventListener('keypress', (e)=> {
     //получаем кнопку которую нажал юзер
      if(e.key.match(/[^а-яё 0-9]/ig)){
        // ^ - исключающий диапазон - значит все кроме этих и значит вся латиница будет preventDefault
        // будет отображать только  - если вся кириллица + цифры в любом регистре
        e.preventDefault(); //Работает , но не понял.  Отменил стандартное поведение чего? Ввод остальных символов видимо. Понял см. выше.
      } 
   
}); 
//я создал второй обработчик - и он работает даже проще чем выше у Ивана. Он также стирает те данные которые можно вставить в поле через копирование на латинице или которые есть в автозаполнении. Т.е. достаточно этого обработчика - я
item.addEventListener('input', ()=> {
  item.value =  item.value.replace(/[a-z]/ig, '');
});
   });
};

export default checkTextInputs; // по умолчанию экспортируем