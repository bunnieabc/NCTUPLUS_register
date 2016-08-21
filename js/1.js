// JavaScript Document
// JavaScript Document
var num = 0;
var chart = 0;
var click1 = 0;
$(document).ready(function(){
	
	/*setTimeout(function() {
	$("header").css("background-image","url(img/bg4.jpg)").fadeOut(1000);
      // Do something after 5 seconds
}, 3000);*/
	
	
	re_win();
	var test =window.innerWidth;
	
		
		var aa = ['url(img/bg6.jpg)','url(img/bg5.jpg)','url(img/bg3.jpg)'];
		var t1=0;
		setInterval(function() {
		$('.bg1').fadeOut(1000, function() 
		{
				$('.bg1').css('background-image', aa[t1]).fadeIn(1000);
				t1++;
				if(t1 == 3) t1 = 0;
			});
		},7000)
		
	$(".nav").css("color","red")
	$(window).bind("load resize",function() {
		re_win();
	});
	//$(".wrap").delay(5000).css("background-color", "red");
});


function re_win(){

	if(window.innerWidth<=768)
	{
		$(".header-right").css("display","none");
		//$(".header-left").css("width","170%");
		$(".header-left h3").css("margin-left","20%");
		$(".header-left h1").css({"margin-left":"19%","font-size":"4.5em"});
		$(".header-left").css("margin","none");		
		$(".header-left").css({'overflow':'hidden'});	
		$(".parallelogram2").css({'width':'200px','margin-left':'20%'});
		$(".hr-left").css("display","none");
	$(".tabs-block").css({"width":"195%","margin-left":'10.4%','height':'190px','display':'none'})
		
		//RWD
		$(".warning").html("<h5>建議以Chrome 或 Firefox瀏覽</h5>")
		$(".warning").css({'margin-left':'21.4%','margin-top':'5%','color':'#aaa'})
		$(".btn-inner").html("<div class='btn-remove'><a href='#' class='btn btn-primary btn-xl page-scroll' style='font-size:16px;font-weight:300;margin-right:20px;margin-left:30%;margin-top:20%;'>登入</a></div>")
		
		
		$(".header-content-inner").css("margin-top","12%")
		
		$("#func").hover(function(){	
			$(".chart").hide()
			} , function(){
		});
		
		$(".chart").hide();
		$(".func2").css({'display':'block', 'background':'#0073b1'});
		
		
	}
	else
	{
		$(".func2").css('display','none');
		console.log("test");
		$("#func").hover(function(){
			
			$(".chart").fadeIn()
				
			var _this = $(this),
			_subnav = _this.children('ul');
 
		// 變更目前母選項的背景顏色
		// 同時淡入子選單(如果有的話)
		//_this.css('backgroundColor', '#06c');
			_subnav.stop(true, true).fadeIn(400);
		} , function(){
		
			$(this).css('backgroundColor', '').children('ul').stop(true, true).fadeOut(400);
		});
		$(".header-content-inner").css("margin-top","1%")
		$(".tabs-block").css({'display':'block'})
		$(".header-right").css("display","block");
		$(".header-left").css("margin-left","0");	
		$(".header-left").css("width","100%");	
		$(".header-left h3").css({"display":"block",'margin-left':'0%'});
		$(".tabs-block").css("width","100%")		
		$(".btn-remove").remove();
		$(".warning h5").remove();
		$(".hr-left").css("display","block");
		$(".parallelogram2").css({'width':'200px','margin-left':'0%'});
		$(".header-left h1").css("margin-left","0%");
		$(".tabs-block").css({"width":"100%","margin-left":'0%'})
	}
	
};