<?php

    require_once('pdo.php');

    header("Content-type:application/json;charset=utf-8");

    $id = $_GET["id"];

    $sql = "SELECT * FROM `book` WHERE `id`=$id;";

    $result = $dbh->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result[0]);
?>