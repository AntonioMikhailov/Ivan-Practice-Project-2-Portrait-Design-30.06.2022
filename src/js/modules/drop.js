const drop = () => {

const fileInputs = document.querySelectorAll('[name="upload"]');
// на эти input нам надо повесить 4 разных события - можно через цикл 4 раза назначить 4 разных события, но  можно по другому - создать массив событий

['dragenter', 'dargleave', 'dragover', 'drop'].forEach(eventName => {
//внутри еще один цикл
fileInputs.forEach(item => {
  item.addEventListener(eventName, preventDefaults, false);   // обработчик будет приходить из внешнего цикла
 });
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation(); //Прекращает дальнейшую передачу текущего события. прекращает всплытие события выше к родителям

}
// подскажем юзеру что его фото над нужно областью загрузки
function highLight(item) { // подсветиv Ближайший к форме блок file-upload
item.closest('.file_upload').style.backgroundColor = "blue";
console.log(444);

}
// убираем подсветку после события
function unHighLight(item) { //

  if(item.closest('.calc_form')) {
  item.closest('.file_upload').style.backgroundColor = "#fff"; // но цвет фона может быть разный у разных форм поэтому делаем проверку на фон родителя
  } else {
    item.closest('.file_upload').style.backgroundColor = "#ededed"; 
  }
  
  }

// ловим событие когда фото над зоной drop
  ['dragenter',  'dragover'].forEach(eventName => {
    //внутри еще один цикл
    fileInputs.forEach(item => {
      item.addEventListener( eventName, ()=> highLight(item), false);   // обработчик будет приходить из внешнего цикла
     });
    });

    // наоборот -ловим событие когда фото уходит из зоны drop 
  ['dragleave',  'drop'].forEach(eventName => {
    //внутри еще один цикл
    fileInputs.forEach(item => {
      item.addEventListener( eventName, ()=> unHighLight(item), false);   // 
     });
    });

    //теперь ловим событие drop
    fileInputs.forEach(item => {
      item.addEventListener('drop', (e)=> { 
        // получаем и модифицируем файлы 15-24
        item.files = e.dataTransfer.files; //кладем в input объект с файлом из проводника
        // также как и в forms.js обрезаем длинные имена фото - копируем код от туда
        let dots; // троеточие
  //получаем имя файла в разметку HTML
  item.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.'; // разбиваем точкой на массив, проверяем на длину и создаем условие для dots
  //имя  - первая часть обрезаем  slice + троеточие + вторая часть
  const name =  item.files[0].name.split('.')[0].slice(0, 6) + dots + item.files[0].name.split('.')[1];
  item.previousElementSibling.textContent =  name;

      } );   // обработчик будет приходить из внешнего цикла
     });

};//

export default drop;