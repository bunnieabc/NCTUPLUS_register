// JavaScript Document
// JavaScript Document
var num = 0;
var chart = 0;
var click1 = 0;
$(document).ready(function(){
	
	
	re_win();
	var test =window.innerWidth;
	
	$(window).bind("load resize",function() {
		re_win();
	});

});


function re_win(){

	if(window.innerWidth<=768)
	{

		$("#func").hover(function(){	
			$(".chart").hide()
			} , function(){
		});
		
		$(".chart").hide();
		$(".func2").css({'display':'block', 'background':'#0073b1'});
		$(".footer1").css("margin-bottom","0")
		
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
		
	}
	
};