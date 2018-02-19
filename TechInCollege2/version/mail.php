<?php

$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : null;

$select = isset($_POST['select']) ? htmlspecialchars($_POST['select']) : null;

$status = isset($_POST['status']) ? htmlspecialchars($_POST['status']) : null;

$tel = isset($_POST['tel']) ? htmlspecialchars($_POST['tel']) : null;

if ($name != "" && $select != "" && $status != "" && $tel != "")
{
    mail("ownedblackhood@mail.ru", "Заявление на поступление",
    "Здравствуйте, мое имя $name. Я выбрал(а) специальность $select и являюсь $status. Связаться со мной можно по $tel"
    );
    echo "Ваша заявка успешно отправлена!";
}
else
{
    echo "Заполните все поля!";
}

