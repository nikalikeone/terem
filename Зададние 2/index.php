<?php
if (isset($_GET['name']) && isset($_GET['surname'])) {
    $name = $_GET['name'];
    $surname = $_GET['surname'];
    $select1 = $_GET['select1'];
    $select2 = $_GET['select2'];
    $select3 = $_GET['select3'];
    $select4 = $_GET['select4'];
    $select5 = $_GET['select5'];

    echo "Данные получены.\n Имя: $name,\n Фамилия: $surname,\n Список1: $select1,\n Список2: $select2,\n Список3: $select3,\n Список4: $select4,\n Список5: $select5";
} else {
    echo "Данные не переданы.";
}

?>