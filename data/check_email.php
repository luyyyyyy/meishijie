<?php
/**
* ���տͻ����ύ��email����֤����������Ƿ��Ѿ����ڡ�
* �������ڣ��򷵻�{"code":200, "msg":"non-exists"}
* �����ڣ��򷵻�{"code":201, "msg":"exists"}
*/
header('Content-Type: application/json;charset=UTF-8');

@$email = $_REQUEST['email'] or die('{"code":401,"msg":"phone required"}');

require_once('init.php');
$sql = "SELECT uid FROM msj_user WHERE email='$email' LIMIT 1";
$result = mysqli_query($conn,$sql);

if(!$result){       //SQL���ִ��ʧ��
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $row = mysqli_fetch_assoc($result);
  if(!$row){        //������벻����
    echo('{"code":200, "msg":"non-exists"}');
  }else {           //��������Ѿ�����
    echo('{"code":201, "msg":"exists"}');
  }
}