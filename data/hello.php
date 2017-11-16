<?php

header('Content-Type:text/plain;charset=UTF-8');
session_start();
if(!$_SESSION['loginUid']){ echo '<a href="#">登录</a>';}
require_once('init.php');

$sql = "SELECT uname FROM msj_user WHERE uid=$_SESSION[loginUid]";
$uname=sql_execute($sql)[0]["uname"];
echo "Welcome ".$uname;
