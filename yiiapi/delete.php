<?php

    require_once('pdo.php');

    header("Content-type:application/json;charset=utf-8");

    $param = json_decode(file_get_contents("php://input"), true);

    $id = $param["id"];

    $sql = "DELETE FROM `book` WHERE `id`=$id;";

    $result = $dbh->exec($sql);

    echo json_encode($result[0]);
?>