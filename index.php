<?php
header("Content-Type:text/html; charset=UTF-8");

require_once("api/config.php");
require_once("api/core.php");

if (isset($_GET['option'])){    //проверяем get параметр
    $class=trim(strip_tags($_GET['option']));   //очищаем его от HTML и PHP-теги и пробелы из начала и конца строки
    
} else {
    $class='main';
}


if(file_exists("api/".$class.".php")){ //проверяем существование файла
    include ("api/".$class.".php"); //то подключаем
    if (class_exists($class)){ //если существует класс
        $obj = new $class; //создаем объект от класса Main
        $obj->get_body();
    } 
    else{
        exit("<p>Верный класс</p>");
    }
}

    else{
        exit("<p>Неверный путь</p>");
    }
