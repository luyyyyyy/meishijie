<?php
/**
* 接收客户端提交的登录信息：name、pwd，执行登录验证；
* 返回表明登录成功或失败的JSON消息：
* 如：{"code":200, "msg":"check passed"}
*/
header('Content-Type: application/html;charset=UTF-8');
header('Access-Control-Allow-Origin:*');

@$uname = $_REQUEST['uname'];
@$upwd = $_REQUEST['upwd'];

require_once('init.php');
$sql = "SELECT * FROM msj_user WHERE email='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);

$row=mysqli_fetch_assoc($result);
if($row==null){
  echo '{"code":-1, "msg":"用户名或密码不正确"}';
}else {
   session_start();
   $_SESSION['loginUname'] =$row['uname'];
   $_SESSION['loginUid'] = $row['uid'];
   $uid=$row["uid"];
   echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
}