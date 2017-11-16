/********************评论区*************************/
$(".submit").click(
function(){
	var context=$('.textarea').val();
    var avater=$("#up_msg img").attr('src');
    var liLength=$("#comment_ul li").length;
    console.log(liLength);
    var spanInner=$("#form span")[parseInt(Math.floor(Math.random()*2))].innerHTML;
	$.ajax({
		type:'POST',
		url:"./data/pumpkin_detail.php",
		data:{context:context,avater:avater},
		success:function(data){
		console.log(data,context);
		var arr=[];
		arr.push(context);
		var html="";
		for(var i=0;i<arr.length;i++){
			html+=`
			<li><img src="${'./'+avater}" alt=""/>
			<span>${arr[i]}</span>
			  <span>${spanInner}</span>
			<a href="#">回复</a></li>
			`
        }
            $("#comment_ul").find('li').eq(0).html(html);
            if(liLength>=0){
                $('.textarea').val('');
            }
			console.log(html,arr.length);
        },
		error:function(){
			alert('您的网络异常');

			
		}
	})
})



$(function(){
    var duration=2000;
    var playTime=1000;
    banner(duration,playTime)
})
function banner(duration,playTime){
    var cloneLi=$("#img_carousel li").eq(0).clone();
        $("#img_carousel").append(cloneLi);
    var liLength=$("#img_carousel li").length;
    var imgLength=liLength-1;
    var index=0;
    function move(){
        index++;
	//        console.log(index);
        $("#img_carousel").css("left",-index*280);
        if(index>imgLength){
            $("#img_carousel").css("left",index*0);
            index=0;
        }
    }
    function moveBot(){
        index++;
        $("#bot_carousel").css("left",-index*70);
        if(index>imgLength){
            $("#bot_carousel").css("left",-index*0);
            index=0;
        }
    }
    var timer=setInterval(move,playTime);
    var timer=setInterval(moveBot,playTime);
}
