<?php
if (isset($_GET['name']) && isset($_GET['surname']) && isset($_GET['select1']) && isset($_GET['select2']) && isset($_GET['select3']) && isset($_GET['select4']) && isset($_GET['select5'])) {
    $name = $_GET['name'];
    $surname = $_GET['surname'];
    $select1 = $_GET['select1'];
    $select2 = $_GET['select2'];
    $select3 = $_GET['select3'];
    $select4 = $_GET['select4'];
    $select5 = $_GET['select5'];

    echo "Данные получены. Имя: $name, Фамилия: $surname, Список1: $select1, Список2: $select2, Список3: $select3, Список4: $select4, Список5: $select5";
} else {
    echo "Данные не переданы.";
}
?>