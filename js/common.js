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

//tooltip
(function($){
	$.fn.tooltip = function(options){
		//default setting
		$.fn.tooltip.defaults={
			//默认position
			position: {
				my: 'top center',  // Position my top left...
				at: 'bottom center', // at the bottom right of...
				adjust: {
					screen: true
				},
				viewport: $(window)
			}
		};
		//根据selector属性设置
		
		//
		return this.each(function(){
			var opts = $.extend({},$.fn.tooltip.defaults,options);
			$(this).qtip(opts);
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