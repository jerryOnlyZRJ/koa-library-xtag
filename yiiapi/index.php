<?php

    require_once('pdo.php');

    header("Content-type:application/json;charset=utf-8");

    $sql = "SELECT * FROM `book`;";

    $result = $dbh->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
?>