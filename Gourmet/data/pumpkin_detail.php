<?php
require_once('init.php');
@$context=$_REQUEST['context'];
@$avater=$_REQUEST['avater'];
//$uname=$_REQUEST['uname'];
$sql="insert into comment values('null','$context','$avater')";
echo json_encode(sql_execute($sql));
