$(function(){
$.ajax({
type:"GET",
url:"data/user.php",
success:function(data){
	console.log(data);
    $('.user_name').html(data.uname);
    $('.avatar').attr("src",data.avatar);
   }
})
})
$("[data-trigger=dropdown]").parent().mouseover(
	function(){$(this).children().last().show();
}).mouseout(function(){$(this).children().last().hide();})

