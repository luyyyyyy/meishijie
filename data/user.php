<?php

header('Content-Type: application/json;charset=UTF-8');
session_start();
if(! @$_SESSION['loginUid']){die('{"code":300, "msg":"login required"}');}
require_once('init.php');

$sql = "SELECT * FROM msj_user WHERE uid=$_SESSION[loginUid]";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
echo json_encode($row);
