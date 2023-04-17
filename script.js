const formInsert = document.getElementById("form-insert-student");
const formInsert1 = document.getElementById("form-insert-group");
const msg = document.querySelector(".message");
const content = document.querySelector(".content");


formInsert.addEventListener("submit", (event) => {
    event.preventDefault(); //отменяем стандартную отправку формы
    let formData = new FormData(formInsert); //собираем данные с формы, которые ввел пользователь
    let xhr = new XMLHttpRequest(); //создаем объект отправки запроса на сервер
    xhr.open("POST", "insertStudent.php"); //открываем соединение
    xhr.send(formData); //отправка данных на сервер
    xhr.onload = () => {
        if(xhr.response == "ОК"){
            msg.innerHTML="Студент добавлен!";
            msg.classList.add("success");
            msg.classList.add("show-message");
            let div = document.createElement("div");
            let fname = formData.get("fname");
            let lname = formData.get("lname");
            let age = formData.get("age");
            let gender = formData.get("gender");


            div.innerHTML = `${fname}, ${lname}, ${age}, ${gender}`;
            content.append(div);


        }
        else {
            msg.innerHTML="Ошибка";
            msg.classList.add("reject");
            msg.classList.add("show-message");
        }
    };
});


//ГРУППЫ 

formInsert1.addEventListener("submit", (event) => {
    event.preventDefault(); //отменяем стандартную отправку формы
    let formData = new FormData(formInsert1); //собираем данные с формы, которые ввел пользователь
    let xhr = new XMLHttpRequest(); //создаем объект отправки запроса на сервер
    xhr.open("POST", "insertGroup.php"); //открываем соединение
    xhr.send(formData); //отправка данных на сервер
    xhr.onload = () => {
        if(xhr.response == "ОК"){
            msg.innerHTML="Группа добавлена!";
            msg.classList.add("success");
            msg.classList.add("show-message");
            let div = document.createElement("div");
            //let group_id = formData.get("group_id");
            let name = formData.get("name");


            div.innerHTML = `${name}`;
            content.append(div);


        }
        else {
            msg.innerHTML="Ошибка";
            msg.classList.add("reject");
            msg.classList.add("show-message");
        }
    };
});





