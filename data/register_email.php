<?php
/**
* 接收客户端
*/
header('Content-Type: application/json;charset=UTF-8');


@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
@$email = $_REQUEST['email'] or die('{"code":403,"msg":"email required"}');



require_once('init.php');
$sql = "INSERT INTO msj_user(upwd,email) VALUES('$upwd','$email')";
$result = mysqli_query($conn,$sql);

if(!$result){
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $uid = mysqli_insert_id($conn);
  echo('{"code":200, "msg":"register succ", "uid":'.$uid.'}');
}