<?php
	require_once('init.php');
	@$pno=$_REQUEST['pno'];
	@$pageSize=$_REQUEST['pageSize'];
	if(!$pno){
		$pno=0;
	}else{
		$pno=intval($pno);//将字符串的数据转换为整数
	}
	if(!$pageSize){
		$pageSize=6;
	}else{
		$pageSize=intval($pageSize);
	}
	$arr=[
		'recodeCount'=>0,
		'pageCount'=>0,
		'pno'=>$pno,
		'pageSize'=>$pageSize,
		'data'=>null

	];
	$sql="SELECT COUNT(*) FROM comment";
	$count=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($count);
	$arr['recodeCount']=intval($row[0]);
	$arr['pageCount']=intval($arr['recodeCount']/$arr['pageSize']);
	$num=intval($pno*$pageSize);
	$sql="select * from comment limit $num,$pageSize";
	$result=mysqli_query($conn,$sql);
	$myList=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$arr['data']=$myList;
	echo json_encode($arr);	
?>