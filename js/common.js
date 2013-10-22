/*
	通用js
*/
(function($){
	//关闭层
	$.fn.closeDiv = function(){
		$(this).click(function(){
			$(this).parent().remove();
		})
	};
	//dropdown菜单
	$.fn.dropDown = function(){
		$(this).hover(function(){
			$(this).find('a:first').addClass('on');
			$(this).find('>ul').show();
		},function(){
			$(this).find('a:first').removeClass('on');
			$(this).find('>ul').hide();
		});
	};
	//collapse
	$.fn.collapse = function(){
		$(this).find('a').click(function(event){
			$(this).next().toggle();
			$(this).toggleClass('open');
		});
	};
	
	
})(jQuery);

//
$(function(){
	//start
	
	//层关闭
	$('.close').closeDiv();
	
	//dropdown菜单
	$('.dropdown').dropDown();
	$('.sub-dropdown').dropDown();
	$('.hassub').collapse();
	//end
});