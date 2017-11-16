//<!-- 更多登录方式 -->
$("#more_log").click(e=>{
var $img=$(e.target).next();
  $img.slideToggle(200,function(){
    if($img.is(":has(:hidden)")){
	  $("#more_log").html("收起∧");
      }else{
      $("#more_log").html("更多第三方登录方式∨");
    }
  })
})
//注册方式切换
$(".zc_font").on("click","[data-toggle=item]",e=>{
 e.preventDefault();
var $item=$(e.target);
if(!$item.hasClass("active")){
	$item.addClass("active").siblings().removeClass("active");
	$($item.attr("href")).addClass("active").siblings().removeClass("active");
  } 
})
console.log("2");
//切换到登录

$("#mm_log").click(e=>{
	e.preventDefault();
console.log("1");
    if($(e.target).attr("opened") == 0){
			$("#more_zc").show();
			$(e.target).html("已有账号？马上登陆 ∧");
	        $("#log").hide();
			$(e.target).attr("opened","1");
            $(".rg_title").html('<img src="img/left.png"> &nbsp;注册美食杰&nbsp; <img src="img/right.png">');
		}else{
			$("#more_zc").hide();
			$(e.target).html("还没有账号？免费注册 ∨");
			$("#log").show();
			$(e.target).attr("opened","0");
            $(".rg_title").html('<img src="img/left.png"> &nbsp;登录美食杰&nbsp; <img src="img/right.png">');
		}

})

//注册验证
/*1.对邮箱地址进行验证*/
var result=true;
email.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '邮箱不能为空';
    this.nextElementSibling.className = 'msg-error';
     result=false;
  } else if (this.validity.typeMismatch) {
    this.nextElementSibling.innerHTML = '邮箱格式不正确';
    this.nextElementSibling.className = 'msg-error';
	 result=false;
  } else {
    var that = this;
    if (!that.value) {   //用户没有输入任何内容
      result=false;
    }
    $.ajax({
      url: 'data/check_email.php',
      data: {email: that.value},
      success: function (result) {
        if (result.code === 201) {
          that.nextElementSibling.innerHTML = '该邮箱已经注册过';
          that.nextElementSibling.className = 'msg-error';
          result=false;
		} else if (result.code === 200) {
          that.nextElementSibling.innerHTML = '该邮箱可以使用';
          that.nextElementSibling.className = 'msg-success';
		  result=true;
        } else {
          alertMsg('验证邮箱出错！请稍后重试。')
          result=false;
        }
      }
    })
  }
}
/*2.对密码进行验证*/
upwd.onfocus = function () {
  this.nextElementSibling.innerHTML = '密码长度在6到12位之间';
  this.nextElementSibling.className = 'msg-default';
  result=false;
}
upwd.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '密码不能为空';
    this.nextElementSibling.className = 'msg-error';
    result=false
  } else if (this.validity.tooShort) {
    this.nextElementSibling.innerHTML = '密码长度不能少于6位';
    this.nextElementSibling.className = 'msg-error';
    result=false;
  } else {
    this.nextElementSibling.innerHTML = '密码格式正确';
    this.nextElementSibling.className = 'msg-success';
	result=true;
  }
}
/**/
phone.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '手机号不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.patternMismatch) {
    this.nextElementSibling.innerHTML = '手机号格式不正确';
    this.nextElementSibling.className = 'msg-error';
  } else {
    var that = this;
    if (!this.value) {   //用户没有输入任何内容
      return;
    }
    $.ajax({
      url: 'data/check_phone.php',
      data: {phone: that.value},
      success: function (result) {
        if (result.code === 201) {
          that.nextElementSibling.innerHTML = '该电话已经注册过';
          that.nextElementSibling.className = 'msg-error';
        } else if (result.code === 200) {
          that.nextElementSibling.innerHTML = '该电话可以使用';
          that.nextElementSibling.className = 'msg-success';
          	that.parentNode.nextElementSibling.lastElementChild.className="send";
        } else {
          alertMsg('验证手机出错！请稍后重试。')
        }
      }
    })
  }
}
phone.onfocus = function () {
  this.nextElementSibling.innerHTML = '请输入合法的手机号';
  this.nextElementSibling.className = 'msg-default';
}
/**/
/*2.对密码进行验证*/
password.onfocus = function () {
  this.nextElementSibling.innerHTML = '密码长度在6到12位之间';
  this.nextElementSibling.className = 'msg-default';
  result=false;
}
password.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '密码不能为空';
    this.nextElementSibling.className = 'msg-error';
	
	//document.getElementById("phone_yzmbtn").className="errsend";
    result=false
  } else if (this.validity.tooShort) {
    this.nextElementSibling.innerHTML = '密码长度不能少于6位';
    this.nextElementSibling.className = 'msg-error';
	//document.getElementById("phone_yzmbtn").className="errsend";
    result=false;
  } else {
    this.nextElementSibling.innerHTML = '密码格式正确';
	console.log("44");
    this.nextElementSibling.className = 'msg-success';
	//document.getElementById("phone_yzmbtn").className="send";
	result=true;
  }
}
console.log("7");
console.log(result);
/**注册按钮监听函数**/
$('#bt-register').click(e=>{
	e.preventDefault();
	var email=$("#email").val(),
	    upwd=$("#upwd").val();
	console.log(email);
	console.log(result);
    if(result){
     console.log("bb");	
	 $.ajax({
	  type:"POST",
      url:"data/register_email.php",
	  data:{email:email,upwd:upwd},
      success:function(data){
	    if(data.code===200)
			location.href ='user.html';
	  },
      error:function(data){
	    alert("网络错误");
	  }
	 })
}
})
/*登录*/
console.log("8");
$("#log").click(function(e){
  e.preventDefault();
  var uname=$("#uname").val();
  var upwd=$("#qrmm").val();
  console.log(uname);
  console.log(upwd);
  $.ajax({
    type:"GET",
    url:"data/log.php",
    dataType: "json",
	data:{uname:uname,upwd:upwd},
	success:function(data){
		console.log(data);
	  if(data.code>0){
		console.log("vvdd");
	 sessionStorage.setItem("uname",uname);
     sessionStorage.setItem("uid",data.uid);
	 location.href="user.html";
	  }
	},
    error:function(data){
	 alert("网络错误");
	}
  });
  });
