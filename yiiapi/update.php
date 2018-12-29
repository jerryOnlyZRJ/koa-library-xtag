<?php

    require_once('pdo.php');

    header("Content-type:application/json;charset=utf-8");

    $param = json_decode(file_get_contents("php://input"), true);

    $sql = "UPDATE `book` SET `name`=\"".$param["name"]."\", `author`=\"".$param["author"]."\", `date`=\"".$param["date"]."\", `score`=".$param["score"]." WHERE `id`=".$param["id"].";";

    $result = $dbh->exec($sql);

    echo json_encode($result);
?>