<?php

    require_once('pdo.php');

    header("Content-type:application/json;charset=utf-8");

    $param = json_decode(file_get_contents("php://input"), true);

    $sql = "INSERT INTO `book` (`name`, `author`, `date`, `score`) VALUES (\"".$param["name"]."\", \"".$param["author"]."\", \"".$param["date"]."\", ".$param["score"].");";

    $result = $dbh->exec($sql);

    echo json_encode($result[0]);
?>