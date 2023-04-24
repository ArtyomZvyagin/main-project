const formInsert = document.getElementById("form-insert-student");
const formInsert1 = document.getElementById("form-insert-group");
const msg = document.querySelector(".message");
const content = document.querySelector(".content");

//отправка данных через форму
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


// отправка данных без формы - метод get
//лайки у студентов

const btnsLike = document.querySelectorAll(".like");

function setLike(str1, str2) {
    return function(event) {
    let idStudent = event.target.closest(".student").dataset.id;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "api/setLike.php?id=" + idStudent);
    xhr.onload = function() {
        if(xhr.response=="ОК") {
           let num = +event.target.closest(".student").querySelector(".num-like").textContent;

           event.target.closest(".student").querySelector(".num-like").innerHTML = num + 1;

           console.log(str1);
        }
        else{
            console.log(str2);
        }
    }
    xhr.send();
    }
}

for(btn of btnsLike) {
    btn.addEventListener("click", setLike("Успешно", "Ошибка"));
}


//пример promise
function getrandomInt(max) { //функция генерации случайного числа
    return Math.floor(Math.random()*max);
}

const myPromise = new Promise((resolve, reject)=>{
    console.log("я - промис");
    let num;
    setTimeout(()=>{
        num = getrandomInt(10);
        console.log(num);
        if(num >= 5){
            resolve(num);
        }
        else{
            reject("плохо! число меньше 5");
        }
    }, 3000);
});

myPromise
    .then(
        (result)=>{
        console.log(result);
        result++;
        console.log(result);
        return result;
    }   
)
    .then((result)=>{console.log(result*2)}) 
    .catch(
    (result)=>{console.log(result)}
)
.finally(
    ()=>{console.log("Конец!")}
);