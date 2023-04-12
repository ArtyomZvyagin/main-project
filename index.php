<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Клиент-серверное приложение</title>
</head>
<body>
    <?php

    define("HOST","localhost");
    define("USER","root");
    define("PASSWORD","root");
    define("DB","school");

    //соединение с БД
    $connect = new mysqli(HOST, USER, PASSWORD, DB);
    if($connect->connect_error){
        exit("Ошибка подключения к БД: ".$connect->connect_error);
    }

    //установить кодировку
    $connect->set_charset("utf8");

    //код запроса
    $sql = "SELECT * FROM `students`";

    //выполнить запрос
    $result = $connect->query($sql);

    //вывести результаты запроса на страницу
    while ($row = $result->fetch_assoc()) {
        echo "<div>
                $row[lname], $row[fname], $row[gender], $row[age]
            </div>";
    }
    


    ?>
</body>
</html>