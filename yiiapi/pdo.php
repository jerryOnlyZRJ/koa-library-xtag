<?php
 
$dsn = 'mysql:dbname=yii2basic;host=localhost;port=3306';

$username = 'root';

$password = '123456';

try {

 $dbh = new PDO($dsn, $username, $password); 
 $dbh->exec("set names utf8");

} catch(PDOException $e) {

 die('Could not connect to the database:<br/>' . $e);

}

?>