import {postData} from "../services/requests";

const forms = ()=> {
//получаем все формы и все input
const form = document.querySelectorAll('form');
const inputs = document.querySelectorAll('input');
//для загрузки фото - все input  с этим атрибутом
let upload = document.querySelectorAll('[name = "upload"]');


//оповещаем юзера о процессе отправки - создадим объект с текстами
const message = {
loading: 'Загрузка',
success: 'Спасибо, мы скоро с Вами свяжемся',
failure: 'Что то пошло не так...',
// покажем перед отправкой иконки
spinner: "assets/img/spinner.gif", 
ok: "assets/img/ok.png",
fail: "assets/img/fail.png",
};

//настроим пути для отправки данных – они у нас разные
const path = {
  designer: 'assets/server.php', // для фото
  question: 'assets/question.php', // для вопросов
};

//ф. отправки


//доп. ф по очистке input
const clearInput = ()=> {
inputs.forEach(item => { 
  item.value = ''; 
 });
 //Добавляем очистку имени - файл не выбран
 upload.forEach(item => { 
  item.previousElementSibling.textContent =  'Файл не выбран';
 });
};
//для фото - обработчик - сработает когда юзер добавит фото
upload.forEach(item => { 
  item.addEventListener('input', ()=> { 
    //получаем имя файла фото через свойство files
  console.log(item.files[0]); // вся инфа
  console.log(item.files[0].name); // Готовый сайт-29.06.png
  let dots; // троеточие
  //получаем имя файла в разметку HTML
  item.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.'; // разбиваем точкой на массив, проверяем на длину и создаем условие для dots

  //имя  - первая часть обрезаем  slice + троеточие + вторая часть
  const name =  item.files[0].name.split('.')[0].slice(0, 6) + dots + item.files[0].name.split('.')[1];
  item.previousElementSibling.textContent =  name;

  //можно оптимизировать код
  //let arr = item.files[0].name.split('.'); // и заменить выше.
 });
 });

//навешиваем обработчики на клики по отправке формы
form.forEach(item => { 
  item.addEventListener('submit', (e)=> { 
    e.preventDefault(); // убираем перезагрузку страницы
    //подготавливаем форму - для показа сообщений о процессе отправки
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    item.parentNode.appendChild(statusMessage); //родитель формы

    //добавляем классы из animate.css
    item.classList.add('animated', 'fadeOutUp'); // скрываем - из animate.css
    //т.к. форма не исчезнет из структуры а просто станет прозрачной она не даст иконкам появиться в нужном месте поэтому надо форму после анимации совсем убрать из структуры
    setTimeout(() => {
      item.style.display = 'none';
    }, 400); // примерно
//создаем элемент для иконок
    let statusImg = document.createElement('img');
    statusImg.setAttribute('src', message.spinner );
    //добавим анимацию
    statusImg.classList.add('animated', 'fadeInUp');
    //вставляем фото в блок родителя формы
    statusMessage.appendChild(statusImg);

    //также еще добавим текст к иконке
    let textMessage = document.createElement('div');
    textMessage.textContent = message.loading;
    //добавлем
    statusMessage.appendChild(textMessage);

  //собираем все данные из формы с formData c помощью конструктора FormData ( если нужен формат JSON то надо сконвертировать)
    const formData = new FormData(item); // из какой формы получать
    //api - нужен для формирования динамического пути отправки
let api ;
// если в родителях не найдет -вернет null (false), если найдет -то сработает путь designer
//Если условий будет больше - использовать switch-case
 item.closest('.popup-design') || item.classList.contains('calc_form')  ? api = path.designer : api = path.question;
console.log(api);

    // вызываем ф. и передаем путь api и данные формы
    postData(api, formData)
    //далее получаем ответ в виде текста
    .then(res => {
      console.log(res);
      //если успешно прошел запрос пишем сообщение юзеру
      statusImg.setAttribute('src', message.ok );
      textMessage.textContent = message.success;
    })
    //если будет ошибка то catch
    .catch( ()=> {
      statusImg.setAttribute('src', message.fail );
      textMessage.textContent = message.failure;
      
     
    })
    //finally для очистки полей и скрытия сообщения об отправке
    .finally(() => {
      clearInput(); // вызвали ф. очистки полей
      setTimeout(() => {
       statusMessage.remove(); //просто удаляем элемент через таймер
        item.style.display = 'block'; // показываем форму обратно
        item.classList.remove('fadeOutUp'); // удаляем класс показа
        item.classList.add('fadeInUp'); // добавим класс анимации показа

        // закрываем все модалки после кнопки Отправить
        // const windows = document.querySelectorAll('[data-modal]');
        // windows.forEach(item => {
        //   item.style.visibility = 'hidden';
        //   item.style.opacity = 0;
        //   item.style.transition = 'all 0.7s ease .0s'; 
        //    document.body.style.overflow = '';
        // });

      }, 3000);
    });
 });
 });


}; //конец forms

export default forms; // по умолчанию экспортируем


