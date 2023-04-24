<?php
/* создание подготавливаемого запроса */
$result = $this->connect->prepare("SELECT * FROM students WHERE id_student=?");
/* связывание параметров с метками */
$result->bind_param("i", $id);
/* выполнение запроса */
$result->execute();
/* получение данных*/
$rows = $result->get_result();
    if (!$rows) {
        echo "<p>Данных нет</p>";
    } 
    else {
        echo "<p class='back'><a href='/'>Назад</a></p>";
        $myrow  =  $rows->fetch_assoc();
        echo "<div>
            $myrow[lname], $myrow[fname], $myrow[gender], $myrow[age]
        </div>"; 
}
