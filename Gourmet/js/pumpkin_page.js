function loadPage(pno){$.ajax({
    type:'get',
	data:{pno:pno},
    url:'./data/pumpkin_page.php',
    success:function(data){
		var d=data.data;
        console.log(d);
		var html='';
		for(var i=0;i<d.length;i++){
			var obj=d[i];
            var spanInner=$("#form span")[parseInt(Math.floor(Math.random()*2))].innerHTML;
			html+=`<li>
			<img src="${obj.avater}" alt=""/>
			<span>${obj.context}</span>
			  <span>${spanInner}</span>
			<a href="#">回复</a></li>`;
			console.log(d[i]);
		}
		$("#comment_ul").html(html);
	},
    error:function(){
        alert('网络异常');
    }
})}
loadPage(0);
$("#page_ul").on('click','li',function(e){
	e.preventDefault();
	console.log(1);
    var $_index=$(this).index();
	console.log($_index);
    loadPage($_index);
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	
})
