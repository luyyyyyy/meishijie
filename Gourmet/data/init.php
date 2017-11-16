<?php
header('Content-Type:application/json;charset=utf-8');
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'pumpkin';
$db_port = 3306;
$db_charset = 'UTF8';
$conn = mysqli_connect(
  $db_host, $db_user, $db_password, $db_database, $db_port);
  mysqli_query($conn, "SET NAMES $db_charset");
function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);
  $num=mysqli_affected_rows($conn);
  if($num!=1){
    return  "评论失败 网络异常";
  }else {
	  
    return '评论成功！谢谢您的评论';
	 
	
  }
}