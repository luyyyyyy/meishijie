<?php
/**
* ���տͻ����ύ��phone����֤�˵绰�����Ƿ��Ѿ����ڡ�
* �������ڣ��򷵻�{"code":200, "msg":"non-exists"}
* �����ڣ��򷵻�{"code":201, "msg":"exists"}
*/
header('Content-Type: application/json;charset=UTF-8');

@$phone = $_REQUEST['phone'] or die('{"code":401,"msg":"phone required"}');

require_once('init.php');
$sql = "SELECT uid FROM msj_user WHERE phone='$phone' LIMIT 1";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL���ִ��ʧ��
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $row = mysqli_fetch_assoc($result);
  if(!$row){        //�绰���벻����
    echo('{"code":200, "msg":"non-exists"}');
  }else {           //�绰�����Ѿ�����
    echo('{"code":201, "msg":"exists"}');
  }
}