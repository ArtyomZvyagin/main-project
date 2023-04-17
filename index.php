<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Клиент-серверное приложение</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>

    <form id="form-insert-student">
        <input type="text" name="fname" id="fname" placeholder="введите имя" required><br>
        <input type="text" name="lname" id="lname" placeholder="введите фамилию" required><br>
        <input type="number" name="age" id="age" placeholder="введите возраст" required><br>
        <input type="radio" name="gender" id="m" value="m" checked>
        <label for="m">Мужской</label>
        <input type="radio" name="gender" id="f" value="f">
        <label for="f">Женский</label><br>
        <input type="submit" value="Добавить">
    </form>

    <form id="form-insert-group">
    <input type="text" name="name" placeholder="введите название группы" required><br>
    <input type="submit" value="Добавить">
    </form>


    <div class="content">
    <?php
    require_once ("config.php");

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
    </div>


<!-- Вывод список групп на страницу -->
<div class="group"> 
        <?php
        $connect = new mysqli(HOST, USER, PASSWORD, DB);
        if($connect->connect_error){
            exit("Ошибка подключения к БД: ".$connect->connect_error);

        }
        $connect->set_charset("utf8");
        $sql = "SELECT * FROM `groups`";
        $result = $connect -> query($sql);
        while ($row = $result ->fetch_assoc()){
            echo "<div>
            $row[group_id], $row[title]</div>";
        }
        ?>
    </div>
    <!-- -->
    <div class="block"></div>

    <div class="message">
        bgtnbthnbslt
    </div>

</body>
</html>