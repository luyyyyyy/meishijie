<?php
<?php
/**
* ���տͻ���
*/
header('Content-Type: application/json;charset=UTF-8');


@$upwd = $_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
@$phone = $_REQUEST['phone'] or die('{"code":404,"msg":"phone required"}');

require_once('../init.php');
$sql = "INSERT INTO msj_user(upwd,phone) VALUES('$upwd','$phone')";
$result = mysqli_query($conn,$sql);

if(!$result){
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $uid = mysqli_insert_id($conn);
  echo('{"code":200, "msg":"register succ", "uid":'.$uid.'}');
}