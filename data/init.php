<?php
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = '';
$db_database = 'meishijie';
$db_port = 3306;
$db_charset = 'UTF8';

$conn = mysqli_connect(
  $db_host, $db_user, $db_password, $db_database, $db_port);
  mysqli_query($conn, "SET NAMES $db_charset");
function sql_execute($sql){
  global $conn;
  $result = mysqli_query($conn, $sql);

  if(!$result){
    return  "��ѯִ��ʧ�ܣ�����SQL�﷨��$sql";
  }else {
    return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
  }
}