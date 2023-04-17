<?php
//$group_id = $_POST['group_id'];
$name = $_POST['name'];

require_once ("config.php");

//соединение с БД
$connect = new mysqli(HOST, USER, PASSWORD, DB);
if($connect->connect_error){
 exit("Ошибка подключения к БД: ".$connect->connect_error);
}

//установить кодировку
$connect->set_charset("utf8");

//код запроса
$sql = "INSERT INTO `groups`(`title`) VALUES ('$name')";

//выполнение запроса
$result = $connect->query($sql);
if($result){
    echo "ОК";
}
else{
    echo "ERROR";
}